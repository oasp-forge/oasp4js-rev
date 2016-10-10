import { Component, OnInit } from '@angular/core';
import { OaspI18n } from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService } from '../../../../oasp/oasp-security/oasp-security.service';
import { KitchenRestService } from '../service/Kitchen.service.rest';

@Component({
  selector: 'app-kitchen',
  templateUrl: 'Kitchen.component.html'
})

export class KitchenComponent implements OnInit {

    public availableCommands = [];
    public assignedCommands = [];

    public orderPositions = [];
    public offers = [];
    public products = [];
    public offerList = [];
    public mealNameList = [];
    public sideDishNameList = [];

    public selectedAvailableCommand;
    public selectedAssignedCommand;
    public security = true;

    public pageData = {
        pagination: {
            page: 1,
            total: true
        }
      };

    public sort = [{name: 'id', direction: 'ASC'}];

    i18n;

    public headers: string[];
    public attributeNames: string[] = ['id', 'orderId', 'offerName', 'mealName', 'sideDishName'];

    constructor (private securityService: SecurityService, private oaspI18n: OaspI18n, private kitchenRestService: KitchenRestService) {
    }

    ngOnInit() {
      if (!this.securityService.getUser()) {
          this.security = false;
          this.securityService.logOut();
      } else {
          this.i18n = this.oaspI18n.getI18n();
          this.kitchenRestService
                  .getOffers(this.pageData)
                          .subscribe(data => {
                              for (let i = 0; i < data.result.length ; i++) {
                                  this.offerList.push(data.result[i].name);
                              }
                              this.kitchenRestService.disableLoading();
                          },
                          err =>  { this.kitchenRestService.disableLoading(); });

          this.kitchenRestService
                  .getProducts(this.pageData)
                          .subscribe(data => {
                              for (let i = 0; i < data.result.length ; i++) {
                                  if (data.result[i][Object.keys(data.result[i])[0]] === 'Meal') {
                                      this.mealNameList.push(data.result[i].description);
                                  }
                                  if (data.result[i][Object.keys(data.result[i])[0]] === 'SideDish') {
                                      this.sideDishNameList.push(data.result[i].description);
                                  }
                              }
                              this.kitchenRestService.disableLoading();
                          },
                          err =>  { this.kitchenRestService.disableLoading(); });
          this.getLists();
          this.headers = [this.i18n.kitchen.id, this.i18n.kitchen.orderID, this.i18n.kitchen.offerName,
                          this.i18n.kitchen.mealName, this.i18n.kitchen.sideDishName];
      }
    }

    getLists() {
        this.kitchenRestService.getOffers(this.pageData).subscribe(data => {
            this.offers = data.result;
            this.kitchenRestService.getProducts(this.pageData).subscribe( pData => {
                this.products = pData.result;
                this.kitchenRestService.getOrderPositions(this.sort).subscribe( opData => {
                    this.orderPositions = opData;
                    this.fillKitchenTables();
                    this.kitchenRestService.disableLoading();
                },
                err =>  { this.kitchenRestService.disableLoading(); });
            },
            err =>  { this.kitchenRestService.disableLoading(); });
        },
        err =>  { this.kitchenRestService.disableLoading(); });
    }

    fillKitchenTables() {

        this.assignedCommands = [];
        this.availableCommands = [];

        // Retrieve data from three different lists : orderpositions -> offerId -> Product
        for (let i = 0 ; i < this.orderPositions.length ; i++) {
            let kitchenProduct = {
                id : 0,
                orderId : 0,
                offerName : '',
                mealName : '',
                sideDishName : ''
            };

            kitchenProduct.id = this.orderPositions[i].id;
            kitchenProduct.orderId = this.orderPositions[i].orderId;
            kitchenProduct.offerName = this.orderPositions[i].offerName;

            for (let j = 0; j < this.offers.length ; j++) {
                if (this.orderPositions[i].offerId === this.offers[j].id) {
                    for (let t = 0 ; t < this.products.length ; t++) {
                        if (this.offers[j].mealId === this.products[t].id) {
                            kitchenProduct.mealName = this.products[t].description;
                        }
                        if (this.offers[j].sideDishId === this.products[t].id) {
                            kitchenProduct.sideDishName = this.products[t].description;
                        }
                    }
                }
            }

            if (this.orderPositions[i].cookId) {
                this.assignedCommands.push(kitchenProduct);
            } else {
                this.availableCommands.push(kitchenProduct);
            }
        }
    }

    searchFilters(filters) {
        this.kitchenRestService.applyFilters(filters)
                                      .subscribe(data => {
                                          if (data.length) {
                                              this.orderPositions = data;
                                          } else {
                                               this.orderPositions = [];
                                               if (data.state === 'ORDERED') {
                                                   this.orderPositions.push(data);
                                               }
                                          }
                                          this.fillKitchenTables();
                                          this.kitchenRestService.disableLoading();
                                      },
                                      err =>  { this.kitchenRestService.disableLoading(); });

    }

    sortColumnBy(sortParam) {
      this.sort = sortParam;
      this.getLists();
    }

    sortAssignedColumnBy(sortParam) {
      this.sort = sortParam;
      this.getLists();
    }

    availableSelected(value) {
        this.selectedAvailableCommand = value;
    }

    assignedSelected(value) {
        this.selectedAssignedCommand = value;
    }

    assign() {
        for (let i = 0 ; i < this.orderPositions.length ; i++) {
            if (this.selectedAvailableCommand.id === this.orderPositions[i].id) {
                this.kitchenRestService.moveOrderPosition(this.orderPositions[i], 1).subscribe(data => {
                  this.kitchenRestService.disableLoading();
                  this.getLists(); },
                  err =>  { this.kitchenRestService.disableLoading(); });
            }
        }
        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }

    return() {
        for (let i = 0 ; i < this.orderPositions.length ; i++) {
            if (this.selectedAssignedCommand.id === this.orderPositions[i].id) {
                this.kitchenRestService.moveOrderPosition(this.orderPositions[i], null).subscribe(data => {
                  this.kitchenRestService.disableLoading(); this.getLists(); },
                  err =>  { this.kitchenRestService.disableLoading(); });
            }
        }
        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }

    finish(state) {
        for (let i = 0 ; i < this.orderPositions.length ; i++) {
            if (this.selectedAssignedCommand.id === this.orderPositions[i].id) {
                this.kitchenRestService.finishOrderPosition(this.orderPositions[i], state);
            }
        }
        this.getLists();
        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }
}
