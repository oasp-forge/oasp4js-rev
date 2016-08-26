import {Component, Output, EventEmitter, OnChanges} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {Command} from '../../../models/command/Command.model'
import {DetailsService} from '../service/Details.service'
import {PaginationComponent} from '../../../oasp/oasp-ui/table-pagination/Pagination.component'
import {GridTableComponent} from '../../../oasp/oasp-ui/grid-table/view/Grid-table.component'

@Component({
  selector:'tableDetails',
  templateUrl:'app/components/details/view/Details.component.html',
  inputs:['parentTable', '_commands'],
  outputs:['resultEvent', 'parentTableEvent'],
  providers:[DetailsService],
  directives:[PaginationComponent, GridTableComponent],
})

export class DetailsComponent implements OnChanges{
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  parentTableEvent = new EventEmitter<Table>();

  constructor(private detailsService:DetailsService){}

  ngOnChanges(){
    if(this.parentTable.commands !== undefined){
      this.detailsService.commands = JSON.parse(JSON.stringify(this.parentTable.commands));
    }
  }

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
  public showCommands: Command[];


  openMenu(){
    this.viewMenu = !this.viewMenu;
    console.log("openMenu() --> viewMenu = " + this.viewMenu);
  }

  addCommand(){
    this.viewMenu = !this.viewMenu;
    console.log("addCommand() --> viewMenu = " + this.viewMenu);
    this.detailsService.addCommand(this.commandToAdd);
    this.resetValues();
  }

  clickedRow(valor){
    if(this.selectedCommand === valor){
      this.resetValues();
    } else {
      this.selectedCommand = valor;
    }
  }

  removeCommand(){
    this.detailsService.removeCommand(this.selectedCommand);
    this.resetValues();
    if(this.detailsService.commands.length === 0){
      this.emptyTable = true;
    }
  }

  resetValues(){
    this.selectedCommand = new Command(null,'','',null,'');
    this.commandToAdd = new Command(null,'','',null,'');
  }

  pagination(value){
    this.showCommands = value;
  }

  cancel(){
    this.resultEvent.emit(this.parentTable);
    document.getElementById("modal").hidden = !document.getElementById("modal").hidden;
  }

  submit(){
    this.parentTable.commands = this.detailsService.commands;
    this.resultEvent.emit(this.parentTable);
    this.detailsService.resetCommands();
    document.getElementById("modal").hidden = !document.getElementById("modal").hidden;
  }

}
