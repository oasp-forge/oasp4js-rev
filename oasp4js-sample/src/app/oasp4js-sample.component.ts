import { Component } from '@angular/core';

import { HeaderComponent} from './components/header/view/Header.component';
import { LoginComponent} from './components/login/view/Login.component';
import { CrudComponent } from './components/crud/view/Crud.component'
import { KitchenComponent } from './components/kitchen/view/Kitchen.component'

import { User } from './models/user/User.model'

import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";

@Routes([
    { path: '', component: CrudComponent },
    { path: '/Tables', component: CrudComponent },
    { path: '/Kitchen', component: KitchenComponent }
])

@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['oasp4js-sample.component.css'],
  directives: [LoginComponent, HeaderComponent, CrudComponent, ROUTER_DIRECTIVES]
})


export class Oasp4jsSampleAppComponent{
  title = "oasp4js-sample works!";
  public login:boolean;
  public usuario: User = new User(0,"","",0);

  constructor(private router: Router){}

  setUser(value){
      this.usuario = value;
  }

  enviar(value){
    setTimeout( ()=>{
        this.login = value;
        if(this.usuario.id < 3){
            this.router.navigate(['/Tables']);
        } else{
            this.router.navigate(['/Kitchen']);
        }
    },1);
  }

  logOut(){
    this.login = false;
    this.router.navigate(['']);
  }
}
