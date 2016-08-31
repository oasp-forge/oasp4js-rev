import {Component} from '@angular/core'
import {GridTableComponent} from '../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {Command} from '../../../models/command/Command.model'
import {KitchenService} from '../service/Kitchen.service'
import {SearchPanelComponent} from '../../../oasp/oasp-ui/search-panel/Search-panel.component'

@Component({
  selector:'kitchen',
  templateUrl:'app/components/kitchen/view/Kitchen.component.html',
  directives: [GridTableComponent, SearchPanelComponent],
  providers: [KitchenService]
})

export class KitchenComponent{

    public availableCommands: Command[];
    public assignedCommands: Command[];
    public selectedAvailableCommand: Command;
    public selectedAssignedCommand: Command;

    public headers: string[] = ["Number","Title", "Status", "Comment"];
    public attributeNames: string[] = ["number", "title", "status", "comment"];

    constructor(private kitchenService: KitchenService){
        this.assignedCommands = this.kitchenService.getAssignedCommands()
        this.availableCommands = this.kitchenService.getAvaliableCommands();
    }

    availableSelected(value){
        if(!value){
            this.selectedAvailableCommand = undefined;
        } else{
            this.selectedAvailableCommand = value;
        }
    }

    assignedSelected(value){
        if(!value){
            this.selectedAssignedCommand = undefined;
        } else{
            this.selectedAssignedCommand = value;
        }
    }

    assign(){
        this.kitchenService.assignCommand(this.selectedAvailableCommand);
        this.assignedCommands = this.kitchenService.getAssignedCommands()
        this.availableCommands = this.kitchenService.getAvaliableCommands();

        this.selectedAssignedCommand = undefined;
        this.selectedAvailableCommand = undefined;
    }

    changeState(op: number){

        switch(op){
            case 1:
                this.kitchenService.returnCommand(this.selectedAssignedCommand);
                break;
            case 2:
                this.kitchenService.cancelCommand(this.selectedAssignedCommand);
                break;
            case 3:
                this.kitchenService.doneCommand(this.selectedAssignedCommand);
                break;
        }
        this.assignedCommands = this.kitchenService.getAssignedCommands();
        this.availableCommands = this.kitchenService.getAvaliableCommands();

        this.selectedAvailableCommand = undefined;
        this.selectedAssignedCommand = undefined;

    }
}
