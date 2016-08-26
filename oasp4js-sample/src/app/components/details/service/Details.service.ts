import {Injectable} from '@angular/core'
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

    c.setNumber(n+1);
    c.setTitle(c.getTitle())
    c.setStatus('ORDERED');//by default
    c.setPrice(c.getPrice());
    this.commands.push(c);
  }

  removeCommand(c:Command){
    let index = this.commands.indexOf(c);
    this.commands.splice(index,1);
  }

  resetCommands(){
    this.commands = [];
  }

}
