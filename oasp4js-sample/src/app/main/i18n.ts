
export var i18n = [{}];

export class I18n {

    i18n = {
        en : {
            LoginPage : {
                intro : "This is the login to the devonfw restaurant example application as technical showcase for an Angular2 client.",
                signIn : "Sign in",
                failes : "Authentication failed. Please try again!",
                form : {
                    usernamePlaceHolder : "Username",
                    usernameError : "Please enter your username",
                    passwordPlaceHolder : "Password",
                    passwordError : "Please enter your password"
                }
            },

            header: {
                title : "Restaurant Sample Application",
                logged : "Logged in as",
                tablesTab : "Tables",
                kitchenTab : "Kitchen"
            },

            footer: {
                title : "@OASP 2016"
            },

            buttons : {
                logOffBtn : "Log off",
                submitBtn : "Submit",
                clearBtn : "Clear",
                searchBtn : "Search",
                editBtn : "Edit",
                cancelBtn : "Cancel",
                doneBtn : "Done",
                addBtn : "Add",
                removeBtn : "Remove"
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

            details : {
                title: "Details of table #",
                status : "Status",
                offers : "Offers",
                number: "Number",
                description: "Description",
                state: "State",
                price : "Price",
                comment : "Comment"
            },

            kitchen : {
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
            LoginPage : {
                intro : "DEUTSCH",
                signIn : "DEUTSCH",
                failes : "DEUTSCH",
                form : {
                    usernamePlaceHolder : "DEUTSCH",
                    usernameError : "DEUTSCH",
                    passwordPlaceHolder : "DEUTSCH",
                    passwordError : "DEUTSCH"
                }
            },

            header: {
                title : "DEUTSCH",
                logged : "DEUTSCH",
                tablesTab : "DEUTSCH",
                kitchenTab : "DEUTSCH"
            },

            footer: {
                title : "DEUTSCH"
            },

            buttons : {
                logOffBtn : "DEUTSCH",
                submitBtn : "DEUTSCH",
                clearBtn : "DEUTSCH",
                searchBtn : "DEUTSCH",
                editBtn : "DEUTSCH",
                cancelBtn : "DEUTSCH",
                doneBtn : "DEUTSCH",
                addBtn : "DEUTSCH",
                removeBtn : "DEUTSCH"
            },

            searchPanel : {
                title : "DEUTSCH",
            },

            pagination : {
                next: "DEUTSCH",
                previous : "DEUTSCH"
            },

            tables : {
                title : "DEUTSCH",

                number : "DEUTSCH",
                state : "DEUTSCH",
                waiter : "DEUTSCH",
                btns : {
                    free : "DEUTSCH",
                    occupy : "DEUTSCH",
                    reserve : "DEUTSCH",
                    cancel : "DEUTSCH"
                }
            },

            details : {
                title: "DEUTSCH #",
                status : "DEUTSCH",
                offers : "DEUTSCH",
                number: "DEUTSCH",
                description: "DEUTSCH",
                state: "DEUTSCH",
                price : "DEUTSCH",
                comment : "DEUTSCH"
            },

            kitchen : {
                title: "DEUTSCH",
                id : "ID",
                orderID : "DEUTSCH",
                offerName : "DEUTSCH",
                mealName : "DEUTSCH",
                sideDishName : "DEUTSCH",
                available : "DEUTSCH",
                assigned : "DEUTSCH"
            }
        },
        es : {

        }
    }

  constructor(){}

  initI18n(){
      i18n[0] =  this.i18n.en;
  }

  changeLanguage(code){
      switch(code){
          case "en" :
          i18n[0] =  this.i18n.en;
          break;
          
          case "de" :
          i18n[0] = this.i18n.de;
          break;

          case "es" :
          i18n[0] =  this.i18n.es;
          break;
      }
  }

}
