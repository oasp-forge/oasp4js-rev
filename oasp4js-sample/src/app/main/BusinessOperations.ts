import { Injectable } from '@angular/core';

@Injectable()
export class BusinessOperations {

  private serverPath = 'http://localhost:8081/oasp4j-sample-server/';
  public tablemgn = this.serverPath + 'services/rest/tablemanagement/v1/';
  public offermgn = this.serverPath + 'services/rest/offermanagement/v1/';
  public salesmgn = this.serverPath + 'services/rest/salesmanagement/v1/';

  /*
  * GET operations
  */
  public tablesGET = this.tablemgn + 'table/';
  public offersGET = this.offermgn + 'offer';
  public orderPositionParamsGET = this.salesmgn + 'orderposition?mealOrSideDish=true&state=ORDERED';
  // http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/orderposition?mealOrSideDish=true&state=ORDERED
  /*
  * POST operations
  */
  public tablesPOST = this.tablemgn + 'table/';
  public tableSearchPOST = this.tablemgn + 'table/search'
  public orderSearchPOST = this.salesmgn + 'order/search';
  public orderPOST = this.salesmgn + 'order/';
  public productSearchPOST = this.offermgn + 'product/search';
  public offerSearchPOST = this.offermgn + 'offer/search';
  public orderPositionPOST = this.salesmgn + 'orderposition/';

  constructor(){}

}
