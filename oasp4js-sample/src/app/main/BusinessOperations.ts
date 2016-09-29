import { Injectable } from '@angular/core';

@Injectable()
export class BusinessOperations {

  private serverPath = 'http://10.68.8.26:8081/oasp4j-sample-server/';
  public tablemgn = this.serverPath + 'services/rest/tablemanagement/v1/';
  public offermgn = this.serverPath + 'services/rest/offermanagement/v1/';
  public salesmgn = this.serverPath + 'services/rest/salesmanagement/v1/';
  public securitymgn = this.serverPath + 'services/rest/security/v1/';
  public loginmgn = this.serverPath + 'services/rest/';

  /*
  * GET operations
  */
  public tablesGET = this.tablemgn + 'table/';
  public offersGET = this.offermgn + 'offer';
  public orderPositionGET = this.salesmgn + 'orderposition';
  public orderPositionParamsGET = this.salesmgn + 'orderposition?mealOrSideDish=true&state=ORDERED';
  public csrfGET = this.securitymgn + 'csrftoken';
  public userGET = this.securitymgn + 'currentuser';

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
  public loginPOST = this.loginmgn + 'login';
  public logOutPost = this.loginmgn + 'logout';

  constructor(){}

}
