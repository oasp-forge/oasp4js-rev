import {Table} from '../table/Table.model'
import {Command} from '../command/Command.model'

export class TableCommand {

  constructor(
    public table: Table,
    public commands: Command[]
  ) {  }

  getNumber():Table{
    return this.table;
  }

  setNumber(table:Table){
    this.table = table;
  }

  getCommands():Command[]{
    return this.commands;
  }

  setCommands(commands:Command[]){
    this.commands = commands;
  }
}
