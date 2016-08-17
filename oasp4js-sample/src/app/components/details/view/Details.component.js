System.register(['angular2/core', '../../../resources/commands/Commands.resource', '../../../models/command/Command.model'], function(exports_1, context_1) {
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
    var core_1, Commands_resource_1, Command_model_1;
    var DetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Commands_resource_1_1) {
                Commands_resource_1 = Commands_resource_1_1;
            },
            function (Command_model_1_1) {
                Command_model_1 = Command_model_1_1;
            }],
        execute: function() {
            DetailsComponent = (function () {
                function DetailsComponent() {
                    this.resultEvent = new core_1.EventEmitter();
                    this.commands = Commands_resource_1.commandsList;
                    this.commandToAdd = new Command_model_1.Command(null, '', '', null, '');
                    this.selectedCommand = new Command_model_1.Command(null, '', '', null, '');
                    this.emptyTable = false;
                }
                // constructor(private detailsService:DetailsService){
                //   // this.commands = this.parentTable.getCommand();
                // }
                DetailsComponent.prototype.addCommand = function () {
                    var n = 0;
                    for (var i = 0; i < this.parentTable.getDirtyCommands().length; i++) {
                        if (this.parentTable.getDirtyCommands()[i].getNumber() > n) {
                            n = this.parentTable.getDirtyCommands()[i].getNumber();
                        }
                    }
                    if (n === 0) {
                        n = 100000;
                    }
                    var c = new Command_model_1.Command(n + 1, this.commandToAdd.getTitle(), 'ORDERED', this.commandToAdd.getPrice(), '...');
                    this.parentTable.addDirtyCommand(c);
                    this.emptyTable = false;
                    this.commandToAdd = new Command_model_1.Command(null, '', '', null, '');
                    console.log("////////// ADD COMMAND //////////");
                    console.log("Commands");
                    console.log(this.parentTable.getCommand());
                    console.log("DirtyCommands");
                    console.log(this.parentTable.getDirtyCommands());
                };
                DetailsComponent.prototype.clickedRow = function (valor) {
                    if (this.selectedCommand === valor) {
                        this.selectedCommand = new Command_model_1.Command(null, '', '', null, '');
                    }
                    else {
                        this.selectedCommand = valor;
                    }
                };
                DetailsComponent.prototype.removeCommand = function () {
                    this.parentTable.removeDirtyCommand(this.selectedCommand);
                    this.selectedCommand = new Command_model_1.Command(null, '', '', null, '');
                    if (this.parentTable.getDirtyCommands().length === 0) {
                        this.emptyTable = true;
                    }
                    console.log("////////// REMOVE COMMAND //////////");
                    console.log("Commands");
                    console.log(this.parentTable.getCommand());
                    console.log("DirtyCommands");
                    console.log(this.parentTable.getDirtyCommands());
                };
                DetailsComponent.prototype.resetSelectedCommand = function () {
                    this.selectedCommand = new Command_model_1.Command(null, '', '', null, '');
                };
                DetailsComponent.prototype.cancel = function () {
                    this.parentTable.setDirtyCommands(this.parentTable.getCommand());
                };
                DetailsComponent.prototype.submit = function () {
                    this.parentTable.setCommand(this.parentTable.getDirtyCommands());
                };
                DetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'tableDetails',
                        templateUrl: 'app/components/details/view/Details.component.html',
                        inputs: ['parentTable'],
                        outputs: ['resultEvent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], DetailsComponent);
                return DetailsComponent;
            }());
            exports_1("DetailsComponent", DetailsComponent);
        }
    }
});
//# sourceMappingURL=Details.component.js.map