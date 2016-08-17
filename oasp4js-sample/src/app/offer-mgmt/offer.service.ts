import { Injectable } from '@angular/core'; 
import { Offer } from './offer'; 
import { OFFERS } from './mock-offers';  
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock OFFERS. In the future we need to use OfferManagementRestService
*/
@Injectable()
export class OfferService { 

  getOffer(id:number){  
    return Promise.resolve(OFFERS).then(
      tables => tables.filter(offer => offer.id === id)[0]
    ); 
  }

  getOffers(){
    return Promise.resolve(OFFERS);
  }

  getPaginatedOffer(pagenumber:number, pagesize:number){
    return Promise.resolve(OFFERS); //There are not pages in this mock
  }

  createOffer(id:number, offer:Offer){
    offer.id = id;
    OFFERS.push(offer); 
  }

  deleteOffer(offer:Offer){ 
    var index = OFFERS.indexOf(offer);
    if (index != -1) {
        OFFERS.splice(index, 1);
    }
  }

  saveOffer(offer:Offer){
    var index = OFFERS.indexOf(offer);
    if (index != -1) {
        OFFERS.splice(index, 1, offer);
    }else{
      OFFERS.push(offer);
    }
  }  
}
