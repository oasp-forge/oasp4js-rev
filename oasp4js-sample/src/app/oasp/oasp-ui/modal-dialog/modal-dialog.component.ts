import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-dialog.component.html'
})
export class ModalDialogComponent {

  @Input('title') title: string;

  constructor() {};

}
