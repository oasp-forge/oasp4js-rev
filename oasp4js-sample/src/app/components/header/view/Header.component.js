System.register(['angular2/core', 'angular2/router', '../../../resources/languages/Languages.resource'], function(exports_1, context_1) {
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
    var core_1, core_2, router_1, Languages_resource_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Languages_resource_1_1) {
                Languages_resource_1 = Languages_resource_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.logged = false;
                    this.currentIcon = Languages_resource_1.languages[0].iconUrl;
                    this.currentLanguage = Languages_resource_1.languages[0].name;
                    this.optionIcon = Languages_resource_1.languages[1].iconUrl;
                    this.optionLanguage = Languages_resource_1.languages[1].name;
                    this.logOffEvent = new core_2.EventEmitter();
                }
                HeaderComponent.prototype.changeLanguage = function () {
                    var aux = this.currentLanguage;
                    this.currentLanguage = this.optionLanguage;
                    this.optionLanguage = aux;
                    aux = this.currentIcon;
                    this.currentIcon = this.optionIcon;
                    this.optionIcon = aux;
                };
                HeaderComponent.prototype.logOff = function () {
                    this.logOffEvent.emit(false);
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: 'app/components/header/view/Header.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        inputs: ["logged", "username"],
                        outputs: ["logOffEvent"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=Header.component.js.map