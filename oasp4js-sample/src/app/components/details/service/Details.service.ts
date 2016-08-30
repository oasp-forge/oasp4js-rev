import {Injectable, OnInit} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'
import {Command} from '../../../models/command/Command.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {commandId} from '../../../resources/commands/Commands.resource'

@Injectable()
export class DetailsService{
  commands : Command[] = [];
  commandList : Command[] = commandsList;
  commandIndex: number = commandId[0];

  addCommand(c:Command){
    this.commandIndex++;

    if(this.commandIndex === 9999999){
        this.commandIndex = 1000000;
    }

    let d = new Command(this.commandIndex, c.getTitle(),'ORDERED', c.getPrice(), "...");
    this.commands.push(d);
    commandId[0] = this.commandIndex;
  }

  removeCommand(c:Command){
    for(let i = 0; i < this.commands.length ; i ++){
      if(this.commands[i].number === c.number){
        this.commands.splice(i,1);
        break;
      }
    }
  }

  resetCommands(){
    this.commands = [];
  }

  copyCommands():Command[]{
    return JSON.parse(JSON.stringify(this.commands));
  }

}
