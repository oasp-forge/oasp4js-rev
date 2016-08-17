import {Component, Output, EventEmitter} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {Command} from '../../../models/command/Command.model'
import {DetailsService} from '../service/Details.service'


@Component({
  selector:'tableDetails',
  templateUrl:'app/components/details/view/Details.component.html',
  inputs:['parentTable'],
  outputs:['resultEvent']
})

export class DetailsComponent {
  resultEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  public parentTable:Table;
  public commands:Command[] = commandsList;
  public commandToAdd:Command = new Command(null, '', '', null, '');
  public selectedCommand:Command = new Command(null, '', '', null, '');
  public emptyTable = false;
  // constructor(private detailsService:DetailsService){
  //   // this.commands = this.parentTable.getCommand();
  // }

  addCommand(){
    let n = 0;
    for(let i = 0; i < this.parentTable.getDirtyCommands().length; i ++){
      if(this.parentTable.getDirtyCommands()[i].getNumber() > n){
        n = this.parentTable.getDirtyCommands()[i].getNumber();
      }
    }
    if(n === 0){
      n = 100000;
    }
    let c = new Command(
      n + 1,
      this.commandToAdd.getTitle(),
      'ORDERED',
      this.commandToAdd.getPrice(),
      '...'
    );
    this.parentTable.addDirtyCommand(c);
    this.emptyTable = false;
    this.commandToAdd = new Command(null, '', '', null, '');

    console.log("////////// ADD COMMAND //////////");
    console.log("Commands");
    console.log(this.parentTable.getCommand());
    console.log("DirtyCommands");
    console.log(this.parentTable.getDirtyCommands());
  }

  clickedRow(valor){
    if(this.selectedCommand === valor){
      this.selectedCommand = new Command(null,'','',null,'');
    } else {
      this.selectedCommand = valor;
    }
  }

  removeCommand(){
    this.parentTable.removeDirtyCommand(this.selectedCommand);
    this.selectedCommand = new Command(null,'','',null,'');
    if(this.parentTable.getDirtyCommands().length === 0){
      this.emptyTable = true;
    }

    console.log("////////// REMOVE COMMAND //////////");
    console.log("Commands");
    console.log(this.parentTable.getCommand());
    console.log("DirtyCommands");
    console.log(this.parentTable.getDirtyCommands());
  }

  resetSelectedCommand(){
    this.selectedCommand = new Command(null,'','',null,'');
  }

  cancel(){
    this.parentTable.setDirtyCommands(this.parentTable.getCommand());
  }

  submit(){
    this.parentTable.setCommand(this.parentTable.getDirtyCommands());
  }

}
