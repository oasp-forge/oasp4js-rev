import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-dialog.component.html'
})
export class ModalDialogComponent {

  @Input('header') header: Object;
  @Input('title') title: string;
  @Input('modal') modal: boolean;

  defaultHeader: Object = '';
  defaultBody: Object = 'OASP dialog body';

  defaultButtonDefs: Object;
  defaultTitle: String = 'OASP dialog title';

  constructor() {};

  getHeader() {
      if (this.header != null) {
        return this.header;
      } else {
        return this.defaultHeader;
      }
  }

  getTitle() {
      if (this.title != null) {
        return this.title;
      } else {
        return this.defaultTitle;
      }
  }
}
