import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'notFound',
  templateUrl: 'not-found.component.html'
})

export class NotFoundComponent{

  public i18n;
  
  constructor(private oaspI18n: OaspI18n, private router: Router){
    this.i18n = oaspI18n.getI18n();
  }

  redirectToLogin(){
    this.router.navigate(['Login'])
  }

}
