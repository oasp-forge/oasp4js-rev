System.register(['../../models/table/Table.model', '../commands/Commands.resource'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Table_model_1, Commands_resource_1;
    var t1c, t1dc, t2c, t2dc, t3c, t3dc, t4c, t4dc, table1, table2, table3, table4, table5, tablesList;
    return {
        setters:[
            function (Table_model_1_1) {
                Table_model_1 = Table_model_1_1;
            },
            function (Commands_resource_1_1) {
                Commands_resource_1 = Commands_resource_1_1;
            }],
        execute: function() {
            t1c = [
                Commands_resource_1.commandsList[0],
                Commands_resource_1.commandsList[2],
                Commands_resource_1.commandsList[3]
            ];
            t1dc = [
                Commands_resource_1.commandsList[0],
                Commands_resource_1.commandsList[2],
                Commands_resource_1.commandsList[3]
            ];
            t2c = [
                Commands_resource_1.commandsList[1],
                Commands_resource_1.commandsList[4]
            ];
            t2dc = [
                Commands_resource_1.commandsList[1],
                Commands_resource_1.commandsList[4]
            ];
            t3c = [
                Commands_resource_1.commandsList[2],
                Commands_resource_1.commandsList[4],
                Commands_resource_1.commandsList[5]
            ];
            t3dc = [
                Commands_resource_1.commandsList[2],
                Commands_resource_1.commandsList[4],
                Commands_resource_1.commandsList[5]
            ];
            t4c = [
                Commands_resource_1.commandsList[3],
                Commands_resource_1.commandsList[4],
                Commands_resource_1.commandsList[5]
            ];
            t4dc = [
                Commands_resource_1.commandsList[3],
                Commands_resource_1.commandsList[4],
                Commands_resource_1.commandsList[5]
            ];
            table1 = new Table_model_1.Table(1, 'FREE', 'Jackie Brown', t1c, t1dc);
            table2 = new Table_model_1.Table(2, 'OCCUPIED', 'Vince Vega', t2c, t2dc);
            table3 = new Table_model_1.Table(3, 'RESERVED', 'Hans Landa', t3c, t3dc);
            table4 = new Table_model_1.Table(4, 'FREE', 'O-Ren Ishii', t4c, t4dc);
            table5 = new Table_model_1.Table(5, 'FREE', 'Gwen Mushii', t4c, t4dc);
            exports_1("tablesList", tablesList = [
                table1,
                table2,
                table3,
                table4,
                table5
            ]);
        }
    }
});
//# sourceMappingURL=Tables.resource.js.map