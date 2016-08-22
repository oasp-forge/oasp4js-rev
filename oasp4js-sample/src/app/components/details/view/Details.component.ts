import {Component, Output, EventEmitter, OnInit} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {Command} from '../../../models/command/Command.model'
import {DetailsService} from '../service/Details.service'


@Component({
  selector:'tableDetails',
  templateUrl:'app/components/details/view/Details.component.html',
  inputs:['parentTable'],
  outputs:['resultEvent', 'parentTableEvent']
})

export class DetailsComponent{
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  // parentTableEvent:EventEmitter<Table> = new EventEmitter<Table>();
  parentTableEvent = new EventEmitter<Table>();

  public parentTable:Table;

  public tableForOperations:Table;

  public commands:Command[] = commandsList;
  public commandToAdd:Command = new Command(null, '', '', null, '');
  public selectedCommand:Command = new Command(null, '', '', null, '');
  public emptyTable = false;
  public viewMenu: boolean = true;
  constructor(private detailsService:DetailsService){
    this.tableForOperations = this.parentTable;
  }


  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  addCommand(){
    this.emptyTable = false;
    this.viewMenu = !this.viewMenu;
    let n = 0;
    for(let i = 0; i < this.tableForOperations.getDirtyCommands().length; i ++){
      if(this.tableForOperations.getDirtyCommands()[i].getNumber() > n){
        n = this.tableForOperations.getDirtyCommands()[i].getNumber();
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
    this.tableForOperations.addDirtyCommand(c);
    this.commandToAdd = new Command(null, '', '', null, '');
  }

  clickedRow(valor){
    if(this.selectedCommand === valor){
      this.selectedCommand = new Command(null,'','',null,'');
    } else {
      this.selectedCommand = valor;
    }
  }

  removeCommand(){
    this.tableForOperations.removeDirtyCommand(this.selectedCommand);
    this.selectedCommand = new Command(null,'','',null,'');
    if(this.tableForOperations.getDirtyCommands().length === 0){
      this.emptyTable = true;
    }
  }

  resetSelectedCommand(){
    this.selectedCommand = new Command(null,'','',null,'');
  }

  cancel(){
    this.tableForOperations.setDirtyCommands(this.tableForOperations.getCommand());
  }

  submit(){
    this.tableForOperations.setCommand(this.tableForOperations.getDirtyCommands());
    this.parentTable = this.tableForOperations;
    // this.parentTableEvent.emit(this.parentTable);
    this.resultEvent.emit(this.parentTable);
  }

}
