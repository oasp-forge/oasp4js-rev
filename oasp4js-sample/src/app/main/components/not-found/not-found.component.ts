import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html'
})

export class NotFoundComponent implements OnInit {

  public i18n;

  constructor(public oaspI18n: OaspI18n, private router: Router) {
  }

  ngOnInit() {
    this.i18n = this.oaspI18n.getI18n();
  }

  redirectToLogin() {
    this.router.navigate(['Login']);
  }

}
