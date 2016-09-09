import { Injectable } from '@angular/core';

export var currentLang = ["en"];

@Injectable()
export class i18n {

    lang = currentLang;

    i18n = {
        en : {
                LoginPage : {
                    intro : "This is the login to the devonfw restaurant example application as technical showcase for an Angular2 client.",
                    signIn : "Sign in",
                    form : {
                        usernamePlaceHolder : "Username",
                        usernameError : "Please enter your username",
                        passwordPlaceHolder : "Password",
                        passwordError : "Please enter your password"
                    }
                },

                header: {
                    title : "Restaurant Sample Application",
                    logged : "Logged in as: ",
                    tablesTab : "Tables",
                    kitchenTab : "Kitchen"
                },

                buttons : {
                    logOffBtn : "Log off",
                    submitBtn : "Submit",
                    clearBtn : "Clear",
                    searchBtn : "Search",
                    editBtn : "Edit",
                    cancelBtn : "Cancel",
                    doneBtn : "Done"
                },

                searchPanel : {
                    title : "Search",
                },

                pagination : {
                    next: "Next",
                    previous : "Previous"
                },

                tables : {
                    title : "Tables",
                    
                    number : "Table number",
                    state : "State",
                    waiter : "Waiter",
                    btns : {
                        free : "Free",
                        occupy : "Occupy",
                        reserve : "Reserve",
                        cancel : "Cancel Reservation"
                    }
                },

                Details : {
                    title: "Details of table #",
                    status : "Status",
                    offers : "Offers",
                    number: "Number",
                    description: "Description",
                    state: "State",
                    price : "Price",
                    comment : "Comment"
                },

                Kitchen : {
                    title: "Kitchen",
                    id : "ID",
                    orderID : "OrderID",
                    offerName : "Offer name",
                    mealName : "Meal name",
                    sideDishName : "Side dish name",
                    available : "Available",
                    assigned : "Assigned"
                }
        },
        de : {

        },
        es : {

        }
    }

  constructor(){}

  geti18n(){
      let lang;
      switch(currentLang[0]){
          case "en" :
          lang =  this.i18n.en;
          break;
          case "de" :
          lang = this.i18n.de;
          break;
          case "es" :
          lang =  this.i18n.es;
          break;
      }
      return lang;
  }

}
