import {Injectable} from '@angular/core'
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Command} from '../../../models/command/Command.model'

import {KitchenRestService} from './Kitchen.service.rest'

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
