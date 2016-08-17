System.register(['angular2/core', '../../../models/user/User.model'], function(exports_1, context_1) {
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
    var core_1, User_model_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_model_1_1) {
                User_model_1 = User_model_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService() {
                    this.user1 = new User_model_1.User(1, 'chief', 'chief');
                    this.users = [this.user1];
                }
                LoginService.prototype.loginCorrect = function (user) {
                    var ok = false;
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].username === user.username && this.users[i].password === user.password) {
                            ok = true;
                        }
                    }
                    return ok;
                };
                LoginService.prototype.getIdFromParams = function (username, password) {
                    var res;
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].getUsername() === username && this.users[i].getPassword() === password) {
                            res = this.users[i].getId();
                        }
                    }
                    return res;
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=Login.service.js.map