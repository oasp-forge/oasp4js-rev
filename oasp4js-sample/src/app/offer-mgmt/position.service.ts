import { Injectable } from '@angular/core'; 
import { Position, Offer } from './offer'; 
import { POSITIONS } from './mock-offers';  
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock OFFERS. In the future we need to use OfferManagementRestService
*/
@Injectable()
export class PositionService { 

  getPosition(id:number){  
    return Promise.resolve(POSITIONS).then(
      tables => tables.filter(position => position.id === id)[0]
    ); 
  }

  getPositions(){
    return Promise.resolve(POSITIONS);
  }

  getPaginatedPosition(pagenumber:number, pagesize:number){
    return Promise.resolve(POSITIONS); //There are not pages in this mock
  }

  createPosition(offer:Offer){ 
    var position = new Position(POSITIONS.length, offer,null,"ORDERED",""); 
    POSITIONS.push(position);  
  }

  deletePosition(position:Position){ 
    var index = POSITIONS.indexOf(position);
    if (index != -1) {
        POSITIONS.splice(index, 1);
    }
  }

  savePosition(position:Position){
    var index = POSITIONS.indexOf(position);
    if (index != -1) {
        POSITIONS.splice(index, 1, position);
    }else{
      POSITIONS.push(position);
    }
  }  
}
