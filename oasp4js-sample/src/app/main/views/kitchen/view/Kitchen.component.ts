
import {Component} from '@angular/core'

import {Command} from '../../../models/command/Command.model'

import {KitchenRestService} from '../service/Kitchen.service.rest'

import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {SearchPanelComponent} from '../../../../oasp/oasp-ui/search-panel/Search-panel.component'
import {OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../../oasp/oasp-security/oasp-security.service';
import {Router} from '@angular/router'

@Component({
  selector:'kitchen',
  templateUrl:'app/main/views/kitchen/view/Kitchen.component.html',
  directives: [GridTableComponent, SearchPanelComponent],
  providers: [KitchenRestService, OaspI18n, SecurityService]
})

export class KitchenComponent{

    public availableCommands = [];
    public assignedCommands = [];

    public orderPositions = [];
    public offers = [];
    public products = [];

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

    constructor(private router: Router, private securityService: SecurityService, private oaspI18n: OaspI18n, private kitchenRestService: KitchenRestService){
        if(!this.securityService.getUser()){
            this.router.navigate(["/"])
            this.security = false;
        } else {
            this.i18n = oaspI18n.getI18n();
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
