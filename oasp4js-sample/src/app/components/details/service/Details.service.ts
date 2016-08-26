import {Injectable, OnInit} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'
import {Command} from '../../../models/command/Command.model'
import {commandsList} from '../../../resources/commands/Commands.resource'

@Injectable()
export class DetailsService{
  commands : Command[] = [];
  commandList : Command[] = commandsList;

  addCommand(c:Command){

    let n = 0;
    for(let i = 0; i < this.commands.length; i ++){
      if(this.commands[i].number > n){
        n = this.commands[i].number;
      }
    }

    if(n === 0){n = 100000}
    let d = new Command(n+1, c.getTitle(),'ORDERED', c.getPrice(), "...");
    this.commands.push(d);
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
