import { Component,Input, EventEmitter } from '@angular/core'
import { ButtonBarComponent } from '../button-bar/button-bar.component'
import { Table } from '../../../main/models/table/Table.model'

@Component({
  selector: 'modal-dialog',
  templateUrl: './app/oasp/oasp-ui/modal-dialog/modal-dialog.component.html',
  directives: [ButtonBarComponent]
})
export class ModalDialogComponent {

  @Input('HEADER') header:Object;
  @Input('BODY') body:Object;
  @Input('BUTTONS') buttonDefs:Object;
  @Input('TITLE') title:string;
  @Input('modal') modal:boolean;
  @Input('parentTable') parentTable:Table;

  defaultHeader:Object = "";
  defaultBody:Object = "OASP dialog body";
  defaultButtonDefs:Object;
  defaultTitle:String = "OASP dialog title";

  public info:string = "info";
  public container:string = "container";


  public nameLogin = "login";
  public nameDetails = "tableDetails"

  getHeader(){
      if(this.header != null)
          return this.header;
      else
          return this.defaultHeader;
  }

  getBody(){
      if(this.body != null)
          return this.body;
      else
          return this.defaultBody;
  }

  getButtons(){
      if(this.buttonDefs != null)
          return this.buttonDefs;
      else
          return this.defaultButtonDefs;
  }

  getTitle(){
      if(this.title != null)
          return this.title;
      else
          return this.defaultTitle;
  }
}
