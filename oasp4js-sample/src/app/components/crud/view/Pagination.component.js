System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.currentPage = 1;
                    this.pageView = 1;
                    this.listEmitter = new core_2.EventEmitter();
                }
                PaginationComponent.prototype.ngOnInit = function () {
                    if (this.rowsPerPage > this.list.length) {
                        this.rowsPerPage = this.list.length;
                    }
                    this.showList = this.list.slice(0, this.rowsPerPage);
                    this.numberPages = Math.ceil(this.list.length / this.rowsPerPage);
                    this.listEmitter.emit(this.showList);
                };
                PaginationComponent.prototype.changePage = function (page, view) {
                    if (page > 0) {
                        this.currentPage = page;
                        if (page < this.pageView) {
                            this.pageView -= 4;
                        }
                        if (page > this.pageView + 3) {
                            this.pageView += 4;
                        }
                    }
                    if (view > 0) {
                        this.pageView = view;
                    }
                    if (this.rowsPerPage * (this.currentPage - 1) < this.rowsPerPage) {
                        this.showList = this.list.slice(0, this.rowsPerPage);
                    }
                    else {
                        this.showList = this.list.slice(this.rowsPerPage * (this.currentPage - 1), this.rowsPerPage * (this.currentPage - 1) + this.rowsPerPage);
                    }
                    this.listEmitter.emit(this.showList);
                };
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        templateUrl: 'app/components/crud/view/Pagination.component.html',
                        inputs: ['list', 'rowsPerPage'],
                        outputs: ['listEmitter']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=Pagination.component.js.map