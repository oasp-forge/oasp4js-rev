import { Component } from '@angular/core'
import { OaspI18n } from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService } from '../../../../oasp/oasp-security/oasp-security.service';
import { KitchenRestService } from '../service/Kitchen.service.rest'

@Component({
  selector:'kitchen',
  templateUrl:'Kitchen.component.html',
  providers: [KitchenRestService, OaspI18n, SecurityService]
})

export class KitchenComponent{

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
        }};

    i18n;

    public headers: string[];
    public attributeNames: string[] = ["id", "orderId", "offerName", "mealName", "sideDishName"];

    constructor(private securityService: SecurityService, private oaspI18n: OaspI18n, private kitchenRestService: KitchenRestService){
        if(!this.securityService.getUser()){
            this.security = false;
            this.securityService.logOut();
        } else {
            this.i18n = oaspI18n.getI18n();
            this.kitchenRestService
                    .getOffers(this.pageData)
                            .subscribe(data => {
                                for( let i = 0; i < data.result.length ; i++){
                                    this.offerList.push(data.result[i].name)
                                }
                            });

            this.kitchenRestService
                    .getProducts(this.pageData)
                            .subscribe(data => {
                                for( let i = 0; i < data.result.length ; i++){
                                    if(data.result[i][Object.keys(data.result[i])[0]] === "Meal"){
                                        this.mealNameList.push(data.result[i].description)
                                    }
                                    if(data.result[i][Object.keys(data.result[i])[0]] === "SideDish"){
                                        this.sideDishNameList.push(data.result[i].description)
                                    }
                                }
                            });
            this.getLists();
            this.headers = [this.i18n.kitchen.id,this.i18n.kitchen.orderID, this.i18n.kitchen.offerName, this.i18n.kitchen.mealName, this.i18n.kitchen.sideDishName];
        }
    }

    getLists(){
        this.kitchenRestService.getOffers(this.pageData).subscribe(data => {
            this.offers = data.result
            this.kitchenRestService.getProducts(this.pageData).subscribe(data => {
                this.products = data.result
                this.kitchenRestService.getOrderPositions().subscribe(data => {
                    this.orderPositions = data
                    this.fillKitchenTables();
                });
            });
        });
    }

    fillKitchenTables(){

        this.assignedCommands = [];
        this.availableCommands = [];

        //Retrieve data from three different lists : orderpositions -> offerId -> Product
        for( let i = 0 ; i < this.orderPositions.length ; i++){
            var kitchenProduct = {
                id : 0,
                orderId : 0,
                offerName : "",
                mealName : "",
                sideDishName : ""
            }

            kitchenProduct.id = this.orderPositions[i].id;
            kitchenProduct.orderId = this.orderPositions[i].orderId;
            kitchenProduct.offerName = this.orderPositions[i].offerName;

            for(let j = 0; j < this.offers.length ; j++){
                if(this.orderPositions[i].offerId === this.offers[j].id){
                    for(let t = 0 ; t < this.products.length ; t++){
                        if(this.offers[j].mealId === this.products[t].id){
                            kitchenProduct.mealName = this.products[t].description;
                        }
                        if(this.offers[j].sideDishId === this.products[t].id){
                            kitchenProduct.sideDishName = this.products[t].description;
                        }
                    }
                }
            }

            if(this.orderPositions[i].cookId){
                this.assignedCommands.push(kitchenProduct);
            } else {
                this.availableCommands.push(kitchenProduct);
            }
        }
    }

    searchFilters(filters){
        this.kitchenRestService.applyFilters(filters)
                                      .subscribe(data =>{
                                          if(data.length){
                                              this.orderPositions = data;
                                          } else {
                                               this.orderPositions = []
                                               if(data.state == "ORDERED"){
                                                   this.orderPositions.push(data);
                                               }
                                          }
                                          this.fillKitchenTables();
                                      });

    }

    availableSelected(value){
        this.selectedAvailableCommand = value;
    }

    assignedSelected(value){
        this.selectedAssignedCommand = value;
    }

    assign(){
        for(let i = 0 ; i < this.orderPositions.length ; i++){
            if(this.selectedAvailableCommand.id === this.orderPositions[i].id){
                this.kitchenRestService.moveOrderPosition(this.orderPositions[i], 1);
            }
        }
        this.getLists();

        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }

    return(){
        for(let i = 0 ; i < this.orderPositions.length ; i++){
            if(this.selectedAssignedCommand.id === this.orderPositions[i].id){
                this.kitchenRestService.moveOrderPosition(this.orderPositions[i], null);
            }
        }
        this.getLists();

        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }

    finish(state){
        for(let i = 0 ; i < this.orderPositions.length ; i++){
            if(this.selectedAssignedCommand.id === this.orderPositions[i].id){
                this.kitchenRestService.finishOrderPosition(this.orderPositions[i], state);
            }
        }
        this.getLists();

        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }
}
