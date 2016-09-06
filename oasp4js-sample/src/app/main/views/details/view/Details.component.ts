import {Component, Output, EventEmitter, OnChanges, OnInit} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {commandsList} from '../../../resources/commands/Commands.resource'
import {Command} from '../../../models/command/Command.model'
import {DetailsService} from '../service/Details.service'
import {PaginationComponent} from '../../../../oasp/oasp-ui/table-pagination/Pagination.component'
import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {DetailsRestService} from '../service/Details.service.rest'

@Component({
  selector:'tableDetails',
  templateUrl:'app/main/views/details/view/Details.component.html',
  inputs:['parentTable'],
  providers:[DetailsService],
  outputs:['resultEvent', 'closeWindowEvent'],
  directives:[PaginationComponent, GridTableComponent],
})

export class DetailsComponent implements OnInit{
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  closeWindowEvent = new EventEmitter();
  pageData;

  CommandsPath = "http://10.68.8.26:8081/oasp4j-sample-server/services/rest/offermanagement/v1/offer/search"

  public headers: string[] = ["number","description", "state", "price", "Comment"];
  public attributeNames: string[] = ["id", "name", "state", "price", "comment"];

  public parentTable:Table;
  public commands:Command[];
  public dirtyTable:Table = new Table(0,'','',null);
  public commandToAdd:Command = new Command(null, '', '', null, '');
  public selectedCommand:Command = new Command(null, '', '', null, '');
  public emptyTable = false;
  public viewMenu: boolean = true;
  public commandsPerPage = 4;
  public showCommands: Command[];

  constructor(private detailsRestService: DetailsRestService, private detailsService:DetailsService){}

  ngOnInit(){
      this.detailsRestService.getCommands().subscribe(data => this.commands = data);
      this.pageData = {
          state: "OPEN",
          tableId: this.parentTable.number
      };
  }

  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  addCommand(){
    this.viewMenu = !this.viewMenu;
    this.detailsRestService.addCommand(this.commandToAdd, this.commands[this.commands.length - 1].id +1);
    this.resetValues();
  }

  clickedRow(valor){
      this.selectedCommand = valor;
  }

  removeCommand(){

  }

  resetValues(){
    this.selectedCommand = new Command(null, '','',null,'');
    this.commandToAdd = new Command(null, '','',null,'');
  }

  pagination(value){
    this.showCommands = value;
  }

  cancel(){
    this.resultEvent.emit(this.parentTable);
    this.closeWindowEvent.emit(false);
  }

  submit(){
    this.parentTable.commands = this.detailsService.commands;
    this.resultEvent.emit(this.parentTable);
    this.detailsService.resetCommands();
    this.closeWindowEvent.emit(false);
  }

}
