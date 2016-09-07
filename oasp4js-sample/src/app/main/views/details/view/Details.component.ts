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

  CommandsPath = "http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order/search"

  public headers: string[] = ["number","description", "state", "price", "Comment"];
  public attributeNames: string[] = ["id", "offerName", "state", "price", "comment"];

  public parentTable:Table;
  public commands:Command[];
  public menus = [];
  public commandToAdd:Command = null;
  public selectedCommand:Command = null;
  public viewMenu: boolean = true;
  public showCommands: Command[];

  constructor(private detailsRestService: DetailsRestService, private detailsService:DetailsService){}

  ngOnInit(){
      this.pageData = {
          state: "OPEN",
          tableId: 100 + this.parentTable.number
      };
      this.detailsRestService.getCommands(this.pageData).subscribe(data => {this.commands = data.result[0].positions});
      this.detailsRestService.getMenus().subscribe(data => this.menus = data);
  }

  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  addCommand(){
    this.viewMenu = !this.viewMenu;
    this.resetValues();
  }

  clickedRow(valor){
      this.selectedCommand = valor;
  }

  removeCommand(){
  }

  resetValues(){
    this.selectedCommand = null;
    this.commandToAdd = null;
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
