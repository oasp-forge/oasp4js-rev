import { Component, Input, OnInit, Injectable,ElementRef } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common'; 
import { TableService } from '../table.service'; 
import { OfferService } from '../../offer-mgmt/offer.service';  
import { PositionService } from '../../offer-mgmt/position.service';  
import { TABLES } from '../mock-tables';
import { Table } from '../table';
import { Offer, Position } from '../../offer-mgmt/offer';
import { OFFERS, POSITIONS } from '../../offer-mgmt/mock-offers';
import { ButtonBarComponent } from '../../oasp/oasp-ui/button-bar/button-bar.component'

/**
  1) THIS IS A TEST!!! THE DATA OF THIS TEST DOESN'T HAVE SENSE, I need to change it. 
  2) I need to fix the problems with the service classes because dont work.
  3) This component is a way to test the functionality of the Angular2 and define a structure for the future WebComponents 
**/

@Component({
  selector: 'table-mgmt-details',
  templateUrl: './app/table-mgmt/table-details/table-details.component.html',
  styleUrls: ['./app/oasp4js-sample.component.css'],
  directives: [ButtonBarComponent]
}) 
export class TableDetailsComponent implements OnInit { 
	@Input() id:number; 
  
  position:Position;
  TABLE:Table;

  OFFERS = OFFERS; //Store Offers
  POSITIONS = POSITIONS; //Store Positions

  selectedPosition:Position;
  selectedOption:Offer;

  /*
  //TODO -> Pagination
  totalItems:number = 64;
  currentPage:number = 4;

  maxSize:number = 5;
  bigTotalItems:number = 175;
  bigCurrentPage:number = 1;

  setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
  */

  onChange($event){ 
    var e:any = event; 
    this.selectedOption = OFFERS[e.target.selectedIndex - 1]; 
  }
 
  noOrderAssigned:boolean;
  orderAssigned:boolean;

 
  constructor(private _tableService: TableService, private _positionService: PositionService) { 
    this.checkOrderAsigned();   
    //this._tableService.getTable(this.id).then(table => this.TABLE = table);
  }  
  
	ngOnInit() {    
   this.TABLE = this.getTable(this.id);
	 //this._tableService.getTable(this.id).then(table => this.TABLE = table);
  }
 
  addPosition(){  
    this._positionService.createPosition(this.selectedOption);
  }
  
  checkOrderAsigned(){
    this.noOrderAssigned = OFFERS.length > 0;
    this.orderAssigned = !this.noOrderAssigned;
  }

  onItemClick(position,$event){  
    this.selectedPosition = position;
    
    var e:any = event;
    var table:any = e.target.parentElement.parentElement;
    //debugger

    for(var i = 2; i < table.rows.length; i++){
      table.rows[i].style.color = "";
      table.rows[i].style.backgroundColor  = "";
    }

    e.target.parentElement.style.backgroundColor  = "#5BC0DE";
    e.target.parentElement.style.color = "#FFF";  
  }

  isSelectedOption(){
    return this.selectedOption != null;
  }

	buttonDefs:Object = [ 
      {
          label: 'Remove',
          onClick: function (context) {   
            this.deletePosition(this.selectedPosition); 
            this.selectedPosition = null;
          },
          isActive: function (context) {
              return this.selectedPosition != null;
          }
      }
  ]; 
 
  getTable(id:number){  
    var result;
    for(var i = 0; i < TABLES.length; i++){
      if(i == id)
        result = TABLES[i];
    }
    return result;
  }

  //TEST OF POSITIONS

 /* getPosition(id:number){  
    var result;
    for(var i = 0; i < this.POSITIONS.length; i++){
      if(i == id)
        result = this.POSITIONS[i];
    }
    return result;
  }

  createPosition(offer:Offer){  
    var position:any = new Position(this.POSITIONS.length, offer,null,"ORDERED","");

    this.POSITIONS.push(position);  
  }

  deletePosition(position:Position){ 
    for(var i = 0; i < this.POSITIONS.length; i++){
      if(this.POSITIONS[i].id == position.id){
          this.POSITIONS.splice(i, 1);
          break;
      }
    }
  }

  savePosition(position:Position){
  debugger
    for(var i = 0; i < this.POSITIONS.length; i++){
      if(i != position.id)
        this.POSITIONS.splice(i, i+1, position);
    } 
  } 
*/

  //BUTTON
  onButtonClick(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.onClick)) {
            buttonDef.onClick.apply(this);
        }
    }

    isButtonDisabled(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.isActive)) {
            return !buttonDef.isActive.apply(this);
        } 
        if (buttonDef && this.isFunction(buttonDef.isNotActive)) {
            return buttonDef.isNotActive.apply(this);
        }
        return true;
    }

    isFunction(functionToCheck) {
   var getType = {};
   return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

} 