import { Component } from '@angular/core';

import { HeaderComponent} from './components/header/view/Header.component';
import { LoginComponent} from './components/login/view/Login.component';
import { CrudComponent } from './components/crud/view/Crud.component'

import { User } from './models/user/User.model'

@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['oasp4js-sample.component.css'],
  directives: [LoginComponent, HeaderComponent, CrudComponent]
})
export class Oasp4jsSampleAppComponent{
  title = "oasp4js-sample works!";
  public login:boolean;
  public usuario: User = new User(0,"","");

  enviar(value){
    setTimeout( ()=>{this.login = value;},1);
  }

  logOut(){
    this.login = false;
  }
}
