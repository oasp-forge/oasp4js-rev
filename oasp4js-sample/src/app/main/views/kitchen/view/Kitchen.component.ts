import {Component} from '@angular/core'
import {Command} from '../../../models/command/Command.model'
import {KitchenService} from '../service/Kitchen.service'
import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {SearchPanelComponent} from '../../../../oasp/oasp-ui/search-panel/Search-panel.component'
import {KitchenRestService} from '../service/Kitchen.service.rest'


@Component({
  selector:'kitchen',
  templateUrl:'app/main/views/kitchen/view/Kitchen.component.html',
  directives: [GridTableComponent, SearchPanelComponent],
  providers: [KitchenService]
})

export class KitchenComponent{

    public availableCommands: Command[] = [];
    public assignedCommands: Command[] = [];
    public selectedAvailableCommand;
    public selectedAssignedCommand;

    public headers: string[] = ["Number","Title", "Status", "Comment"];
    public attributeNames: string[] = ["id", "offerName", "state", "comment"];

    constructor(private kitchenService: KitchenService, private kitchenRestService: KitchenRestService){
        this.getAssignedCommands();
        this.getAvailableCommands();
    }

    availableSelected(value){
        this.selectedAvailableCommand = value;
    }

    searchFilters(filters){
    }

    assignedSelected(value){
        this.selectedAssignedCommand = value;
    }

    assign(){


        this.selectedAvailableCommand.state = "DELIVERED"
        this.kitchenRestService.assignCommand(this.selectedAvailableCommand);

        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;

        this.getAssignedCommands();
        this.getAvailableCommands();
    }

    changeState(op: number){
        switch(op){
            case 1:
                this.selectedAvailableCommand.state = "ORDERED";
                this.kitchenService.returnCommand(this.selectedAssignedCommand);
                break;
            case 2:
                this.kitchenService.cancelCommand(this.selectedAssignedCommand);
                break;
            case 3:
                this.kitchenService.doneCommand(this.selectedAssignedCommand);
                break;
        }
        this.getAssignedCommands();
        this.getAvailableCommands();

        this.selectedAvailableCommand = undefined;
        this.selectedAssignedCommand = undefined;
    }

    getAvailableCommands(){
        this.availableCommands = [];
        this.kitchenRestService.getOrders()
                                  .subscribe(commands => {
                                      let com = commands;
                                      for(let i = 0 ; i < com.result[0].positions.length ; i++){
                                          if(com.result[0].positions[i].state == "DELIVERED"){
                                              this.availableCommands.push(com.result[0].positions[i]);
                                          }
                                      }
                                  })
    }

    getAssignedCommands(){
        this.assignedCommands = [];
        this.kitchenRestService.getOrders()
                                  .subscribe(commands => {
                                      let com = commands;
                                      for(let i = 0 ; i < com.result[0].positions.length ; i++){
                                          if(com.result[0].positions[i].state == "COOKING"){
                                              this.assignedCommands.push(com.result[0].positions[i]);
                                          }
                                      }
                                  })
    }
}
