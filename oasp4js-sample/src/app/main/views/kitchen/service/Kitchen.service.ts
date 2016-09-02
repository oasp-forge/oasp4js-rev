import {Injectable} from '@angular/core'
import {tablesList} from '../../../resources/tables/Tables.resource'
import {Command} from '../../../models/command/Command.model'
import {commandsList} from '../../../resources/commands/Commands.resource'

@Injectable()
export class KitchenService{
  availableCommands: Command[] = [];
  assignedCommands: Command[] = [];

  getAvaliableCommands():Command[]{
      let available = [];
      for(let i = 0 ; i < tablesList.length ; i++){
          for(let j = 0 ; j < tablesList[i].commands.length ; j ++){
              if(tablesList[i].commands[j].status === "ORDERED"){
                  available.push(tablesList[i].commands[j]);
              }
          }
      }
      return available;
  }

  getAssignedCommands():Command[]{
      let assigned = [];
      for(let i = 0 ; i < tablesList.length ; i++){
          for(let j = 0 ; j < tablesList[i].commands.length ; j ++){
              if(tablesList[i].commands[j].status === "COOKING"){
                  assigned.push(tablesList[i].commands[j]);
              }
          }
      }
      return assigned;
  }

  assignCommand(command){

      command.status = "COOKING"
      for(let i = 0; i < this.availableCommands.length ; i ++){
          if(this.availableCommands[i].number === command.number){
              this.availableCommands.splice(i,1);
          }
      }
  }

  returnCommand(command){
      command.status = "ORDERED";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].number === command.number){
              this.assignedCommands.splice(i,1);
          }
      }
  }

  cancelCommand(command){
      command.status = "CANCELED";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].number === command.number){
              this.assignedCommands.splice(i,1);
          }
      }
  }

  doneCommand(command){
      command.status = "DONE";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].number === command.number){
              this.assignedCommands.splice(i,1);
          }
      }
  }
}
