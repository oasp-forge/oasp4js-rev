import {Component, Output, EventEmitter} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {Command} from '../../../models/command/Command.model'
import {DetailsService} from '../service/Details.service'
import {PaginationComponent} from '../../../oasp/oasp-ui/table-pagination/Pagination.component'
import { GridTableComponent } from '../../../oasp/oasp-ui/grid-table/view/Grid-table.component'

@Component({
  selector:'tableDetails',
  templateUrl:'app/components/details/view/Details.component.html',
  inputs:['parentTable', '_commands'],
  outputs:['resultEvent', 'parentTableEvent'],
  directives:[PaginationComponent, GridTableComponent],
})

export class DetailsComponent {
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  parentTableEvent = new EventEmitter<Table>();

  public _commands;
  public headers: string[] = ["Number","Title", "Status", "Price", "Comment"];
  public attributeNames: string[] = ["number", "title", "status", "price", "comment"];

  public parentTable:Table;
  public commands:Command[] = commandsList;
  public dirtyTable:Table = new Table(0,'','',null);
  public commandToAdd:Command = new Command(null, '', '', null, '');
  public selectedCommand:Command = new Command(null, '', '', null, '');
  public emptyTable = false;
  public viewMenu: boolean = true;
  public commandsPerPage = 4;


  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  addCommand(){
    if(this._commands.length === 0){
      this.emptyTable = false;
    }
    this.viewMenu = !this.viewMenu;
    let n = 0;
    for(let i = 0; i < this._commands.length; i ++){
      if(this._commands[i].number > n){
        n = this._commands[i].number;
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

    this._commands.push(c);

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
    let index = this._commands.indexOf(this.selectedCommand);
    this._commands.splice(index,1);
    this.selectedCommand = new Command(null,'','',null,'');

    if(this._commands.length === 0){
      this.emptyTable = true;
    }
  }

  resetSelectedCommand(){
    this.selectedCommand = new Command(null,'','',null,'');
  }

  cancel(){
    this._commands = this.parentTable.commands;
    this.resultEvent.emit(this.parentTable);
    document.getElementById("modal").hidden = !document.getElementById("modal").hidden;
  }

  submit(){
    this.parentTable.commands = this._commands;
    this.resultEvent.emit(this.parentTable);
    document.getElementById("modal").hidden = !document.getElementById("modal").hidden;
  }

}
