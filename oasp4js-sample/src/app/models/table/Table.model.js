System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Table;
    return {
        setters:[],
        execute: function() {
            Table = (function () {
                function Table(number, state, waiter, commands, dirtyCommands) {
                    this.number = number;
                    this.state = state;
                    this.waiter = waiter;
                    this.commands = commands;
                    this.dirtyCommands = dirtyCommands;
                }
                Table.prototype.getNumber = function () {
                    return this.number;
                };
                Table.prototype.setNumber = function (number) {
                    this.number = number;
                };
                Table.prototype.getState = function () {
                    return this.state;
                };
                Table.prototype.setState = function (state) {
                    this.state = state;
                };
                Table.prototype.getWaiter = function () {
                    return this.waiter;
                };
                Table.prototype.setWaiter = function (waiter) {
                    this.waiter = waiter;
                };
                Table.prototype.getCommand = function () {
                    return this.commands;
                };
                Table.prototype.setCommand = function (commands) {
                    this.commands = commands;
                };
                Table.prototype.getDirtyCommands = function () {
                    return this.dirtyCommands;
                };
                Table.prototype.setDirtyCommands = function (dirtyCommands) {
                    this.dirtyCommands = dirtyCommands;
                };
                Table.prototype.addCommand = function (command) {
                    this.commands.push(command);
                };
                Table.prototype.removeCommand = function (command) {
                    var index = this.commands.indexOf(command);
                    if (index > -1) {
                        this.commands.splice(index, 1);
                    }
                };
                Table.prototype.addDirtyCommand = function (dirtyCommand) {
                    this.dirtyCommands.push(dirtyCommand);
                };
                Table.prototype.removeDirtyCommand = function (dirtyCommand) {
                    var index = this.dirtyCommands.indexOf(dirtyCommand);
                    if (index > -1) {
                        this.dirtyCommands.splice(index, 1);
                    }
                };
                return Table;
            }());
            exports_1("Table", Table);
        }
    }
});
//# sourceMappingURL=Table.model.js.map