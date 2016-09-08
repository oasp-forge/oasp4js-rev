import {Injectable} from '@angular/core'
// import {tablesList} from '../../../resources/tables/Tables.resource'
import {Command} from '../../../models/command/Command.model'
// import {commandsList} from '../../../resources/commands/Commands.resource'
import {KitchenRestService} from './Kitchen.service.rest'
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KitchenService{
  availableCommands: Command[] = [];
  assignedCommands: Command[] = [];

  constructor(private http: Http, private kitchenRestService: KitchenRestService)
  {}

  returnCommand(command){
      command.state = "ORDERED";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].id === command.id){
              this.assignedCommands.splice(i,1);
          }
      }
  }

  cancelCommand(command){
      command.state = "CANCELED";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].id === command.id){
              this.assignedCommands.splice(i,1);
          }
      }
  }

  doneCommand(command){
      command.state = "DONE";
      for(let i = 0; i < this.assignedCommands.length ; i ++){
          if(this.assignedCommands[i].id === command.id){
              this.assignedCommands.splice(i,1);
          }
      }
  }
}
