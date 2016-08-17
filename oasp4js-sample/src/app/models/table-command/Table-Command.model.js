System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableCommand;
    return {
        setters:[],
        execute: function() {
            TableCommand = (function () {
                function TableCommand(table, commands) {
                    this.table = table;
                    this.commands = commands;
                }
                TableCommand.prototype.getNumber = function () {
                    return this.table;
                };
                TableCommand.prototype.setNumber = function (table) {
                    this.table = table;
                };
                TableCommand.prototype.getCommands = function () {
                    return this.commands;
                };
                TableCommand.prototype.setCommands = function (commands) {
                    this.commands = commands;
                };
                return TableCommand;
            }());
            exports_1("TableCommand", TableCommand);
        }
    }
});
//# sourceMappingURL=Table-Command.model.js.map