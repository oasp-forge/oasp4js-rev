System.register(['angular2/core', '../../../resources/tables/Tables.resource'], function(exports_1, context_1) {
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
    var core_1, Tables_resource_1;
    var CrudService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Tables_resource_1_1) {
                Tables_resource_1 = Tables_resource_1_1;
            }],
        execute: function() {
            CrudService = (function () {
                function CrudService() {
                    this.tables = Tables_resource_1.tablesList;
                }
                CrudService.prototype.getTables = function () {
                    return this.tables;
                };
                CrudService.prototype.getTableById = function (id) {
                    var res;
                    for (var i = 0; i < this.tables.length; i++) {
                        if (this.tables[i].number === id) {
                            res = this.tables[i];
                        }
                    }
                    return res;
                };
                CrudService.prototype.reserve = function (table) {
                    for (var i = 0; i < this.tables.length; i++) {
                        if (this.tables[i].getNumber() === table.getNumber()) {
                            this.tables[i].setState("RESERVED");
                        }
                    }
                };
                CrudService.prototype.cancelReservation = function (table) {
                    for (var i = 0; i < this.tables.length; i++) {
                        if (this.tables[i].getNumber() === table.getNumber()) {
                            this.tables[i].setState("FREE");
                        }
                    }
                };
                CrudService.prototype.occupy = function (table) {
                    for (var i = 0; i < this.tables.length; i++) {
                        if (this.tables[i].getNumber() === table.getNumber()) {
                            this.tables[i].setState("OCCUPIED");
                        }
                    }
                };
                CrudService.prototype.free = function (table) {
                    for (var i = 0; i < this.tables.length; i++) {
                        if (this.tables[i].getNumber() === table.getNumber()) {
                            this.tables[i].setState("FREE");
                        }
                    }
                };
                CrudService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CrudService);
                return CrudService;
            }());
            exports_1("CrudService", CrudService);
        }
    }
});
//# sourceMappingURL=Crud.service.js.map