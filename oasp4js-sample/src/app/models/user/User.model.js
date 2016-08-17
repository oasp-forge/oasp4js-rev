System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, username, password) {
                    this.id = id;
                    this.username = username;
                    this.password = password;
                }
                User.prototype.getId = function () {
                    return this.id;
                };
                User.prototype.setId = function (id) {
                    this.id = id;
                };
                User.prototype.getUsername = function () {
                    return this.username;
                };
                User.prototype.setUsername = function (username) {
                    this.username = username;
                };
                User.prototype.getPassword = function () {
                    return this.password;
                };
                User.prototype.setPassword = function (password) {
                    this.password = password;
                };
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.model.js.map