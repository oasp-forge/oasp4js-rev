System.register(['angular2/core', '../service/Crud.service', '../../../models/table/Table.model', '../../details/view/Details.component', './Pagination.component'], function(exports_1, context_1) {
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
    var core_1, Crud_service_1, Table_model_1, Details_component_1, Pagination_component_1;
    var CrudComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Crud_service_1_1) {
                Crud_service_1 = Crud_service_1_1;
            },
            function (Table_model_1_1) {
                Table_model_1 = Table_model_1_1;
            },
            function (Details_component_1_1) {
                Details_component_1 = Details_component_1_1;
            },
            function (Pagination_component_1_1) {
                Pagination_component_1 = Pagination_component_1_1;
            }],
        execute: function() {
            CrudComponent = (function () {
                function CrudComponent(crudService) {
                    this.crudService = crudService;
                    this.tablesPerPage = 4;
                    //public table:Table = new Table(0,'','');
                    this.selectedTable = new Table_model_1.Table(0, '', '', this.arr, this.arr);
                    this.tables = crudService.getTables();
                    this.myState = 0;
                }
                CrudComponent.prototype.pagination = function (value) {
                    this.selectedTable = new Table_model_1.Table(0, '', '', this.arr, this.arr);
                    this.myState = 0;
                    this.showTables = value;
                };
                CrudComponent.prototype.reserve = function () {
                    // this.crudService.reserve(this.table);
                    this.crudService.reserve(this.selectedTable);
                    this.myState = 3;
                };
                CrudComponent.prototype.cancelReservation = function () {
                    // this.crudService.cancelReservation(this.table);
                    this.crudService.cancelReservation(this.selectedTable);
                    this.myState = 1;
                };
                CrudComponent.prototype.occupy = function () {
                    //this.crudService.occupy(this.table);
                    this.crudService.occupy(this.selectedTable);
                    this.myState = 2;
                };
                CrudComponent.prototype.free = function () {
                    //this.crudService.free(this.table);
                    this.crudService.free(this.selectedTable);
                    this.myState = 1;
                };
                CrudComponent.prototype.clickedRow = function (valor) {
                    if (this.selectedTable === valor) {
                        this.selectedTable = new Table_model_1.Table(0, '', '', this.arr, this.arr);
                        this.myState = 0;
                    }
                    else {
                        this.selectedTable = valor;
                        if (this.selectedTable.state === "FREE") {
                            this.myState = 1;
                        }
                        else if (this.selectedTable.state === "OCCUPIED") {
                            this.myState = 2;
                        }
                        else if (this.selectedTable.state === "RESERVED") {
                            this.myState = 3;
                        }
                    }
                };
                CrudComponent = __decorate([
                    core_1.Component({
                        selector: 'crud',
                        templateUrl: 'app/components/crud/view/Crud.component.html',
                        providers: [Crud_service_1.CrudService],
                        directives: [Details_component_1.DetailsComponent, Pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [Crud_service_1.CrudService])
                ], CrudComponent);
                return CrudComponent;
            }());
            exports_1("CrudComponent", CrudComponent);
        }
    }
});
//# sourceMappingURL=Crud.component.js.map