import {Component} from '@angular/core'

import {Command} from '../../../models/command/Command.model'

import {KitchenService} from '../service/Kitchen.service'
import {KitchenRestService} from '../service/Kitchen.service.rest'

import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {SearchPanelComponent} from '../../../../oasp/oasp-ui/search-panel/Search-panel.component'


@Component({
  selector:'kitchen',
  templateUrl:'app/main/views/kitchen/view/Kitchen.component.html',
  directives: [GridTableComponent, SearchPanelComponent],
  providers: [KitchenService]
})

export class KitchenComponent{

    public availableCommands = [];
    public assignedCommands = [];

    public orderPositions = [];
    public offers = [];
    public products = [];

    public selectedAvailableCommand;
    public selectedAssignedCommand;

    public pageData = {
        pagination: {
            page: 1,
            total: true
        }};

    public headers: string[] = ["ID","OrderID", "Offer", "Meal", "Side dish"];
    public attributeNames: string[] = ["id", "orderId", "offerName", "mealName", "sideDishName"];

    constructor(private kitchenService: KitchenService, private kitchenRestService: KitchenRestService){
        this.getLists();
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
