System.register(['angular2/core', '../../../models/user/User.model', '../service/Login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, User_model_1, Login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_model_1_1) {
                User_model_1 = User_model_1_1;
            },
            function (Login_service_1_1) {
                Login_service_1 = Login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(loginService) {
                    this.loginService = loginService;
                    this.loginEvent = new core_1.EventEmitter();
                    this.userEvent = new core_1.EventEmitter();
                    this.user = new User_model_1.User(null, '', '');
                    this.n = 1;
                    setTimeout(function () {
                        swal({
                            title: 'Timeout exceeded',
                            text: 'Enter username/password to keep logged',
                        });
                    }, 300000);
                    //300000 for 5 minutes
                }
                LoginComponent.prototype.validateLogin = function () {
                    if (this.user.username === null || this.user.password === null ||
                        this.user.username.length === 0 || this.user.password.length === 0) {
                        this.loginEvent.emit(false);
                        swal('Error!', 'You must fill every field', 'error');
                        console.log("YOU MUST FILL EVERY FIELD!");
                    }
                    else {
                        if (this.loginService.loginCorrect(this.user)) {
                            this.loginEvent.emit(true);
                            this.user.setId(this.loginService.getIdFromParams(this.user.username, this.user.password));
                            this.userEvent.emit(this.user);
                            swal('Welcome back ' + this.user.getUsername().toUpperCase() + '!', '', 'success');
                            console.log("WELCOME BACK " + this.user.username.toUpperCase() + "!");
                        }
                        else {
                            this.loginEvent.emit(false);
                            swal('Error!', 'You are not logged yet', 'error');
                            console.log("YOU'RE NOT LOGGED YET!");
                        }
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/components/login/view/Login.component.html',
                        providers: [Login_service_1.LoginService],
                        outputs: ['loginEvent', 'userEvent']
                    }), 
                    __metadata('design:paramtypes', [Login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=Login.component.js.map