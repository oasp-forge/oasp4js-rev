System.register(['../../models/command/Command.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Command_model_1;
    var command1, command2, command3, command4, command5, command6, commandsList;
    return {
        setters:[
            function (Command_model_1_1) {
                Command_model_1 = Command_model_1_1;
            }],
        execute: function() {
            //All the available commands on the system/menu
            command1 = new Command_model_1.Command(100001, 'Schnitzel-Menü', 'CANCELLED', 6.99, '...');
            command2 = new Command_model_1.Command(100002, 'test {{ 1+2 }}', 'CANCELLED', 0.00, '...');
            command3 = new Command_model_1.Command(100003, 'Pfifferlinge-Menü', 'CANCELLED', 8.99, '...');
            command4 = new Command_model_1.Command(100004, 'Goulasch-Menü', 'ORDERED', 7.99, '...');
            command5 = new Command_model_1.Command(100005, 'Cola', 'ORDERED', 1.20, '...');
            command6 = new Command_model_1.Command(100006, 'Salat-Menü', 'PREPARED', 5.99, '...');
            exports_1("commandsList", commandsList = [
                command1,
                command2,
                command3,
                command4,
                command5,
                command6
            ]);
        }
    }
});
//# sourceMappingURL=Commands.resource.js.map