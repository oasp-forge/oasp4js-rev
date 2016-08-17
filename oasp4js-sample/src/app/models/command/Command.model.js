System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Command;
    return {
        setters:[],
        execute: function() {
            Command = (function () {
                function Command(number, title, status, price, comment) {
                    this.number = number;
                    this.title = title;
                    this.status = status;
                    this.price = price;
                    this.comment = comment;
                }
                Command.prototype.getNumber = function () {
                    return this.number;
                };
                Command.prototype.setNumber = function (number) {
                    this.number = number;
                };
                Command.prototype.getTitle = function () {
                    return this.title;
                };
                Command.prototype.setTitle = function (title) {
                    this.title = title;
                };
                Command.prototype.getStatus = function () {
                    return this.status;
                };
                Command.prototype.setStatus = function (status) {
                    this.status = status;
                };
                Command.prototype.getPrice = function () {
                    return this.price;
                };
                Command.prototype.setPrice = function (price) {
                    this.price = price;
                };
                Command.prototype.getComment = function () {
                    return this.comment;
                };
                Command.prototype.setComment = function (comment) {
                    this.comment = comment;
                };
                return Command;
            }());
            exports_1("Command", Command);
        }
    }
});
//# sourceMappingURL=Command.model.js.map