import { Component } from '@angular/core';
import { HeaderComponent} from './components/header/view/Header.component';
import { LoginComponent} from './components/login/view/Login.component';
import { LoginService} from './components/login/service/Login.service';
import { ModalDialogComponent } from './oasp/oasp-ui/modal-dialog/modal-dialog.component';
import { CrudComponent } from './components/crud/view/Crud.component'
import { KitchenComponent } from './components/kitchen/view/Kitchen.component'
import { User } from './models/user/User.model'
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";
import {TimerWrapper} from '@angular/core/src/facade/async';

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
  providers:[LoginService],
  directives: [
    LoginComponent,
    HeaderComponent,
    CrudComponent,
    ROUTER_DIRECTIVES,
    ModalDialogComponent]
})


export class Oasp4jsSampleAppComponent {
  title = "oasp4js-sample works!";
  public login:boolean;
  public usuario: User = new User(0,"","",0);
  public autoLog:boolean;

  public mins = 60000;
  public timeout = 10000;

  public timer:number;

  public autoLogTitle = "Ooops...";
  public autoLogInfo = "Session time expired!";

  constructor(private router: Router, private loginService: LoginService){
    this.autoLog = false;
    this.timer = setInterval(() => {
    }, this.mins*15);
  }

  setUser(value){
      this.usuario = value;
  }

  enviar(value){
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if(this.login === true){
        this.autoLog = true;
        this.router.navigate(['']);
        this.login = false;
      }
    }, this.mins*15);
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

  validateAutoLogin(username, password){
    this.usuario = new User(null, username, password, null);
    if(this.loginService.loginCorrect(this.usuario)){
      this.autoLog = false;
      this.login = true;
      this.usuario.setId(this.loginService.getIdFromParams(this.usuario.username, this.usuario.password));
      this.usuario.setPermission(this.loginService.getPermissionFromParams(this.usuario.username, this.usuario.password));
      this.setUser(this.usuario);
      this.enviar(true);
    }
    else{
      this.login = false;
      this.autoLog = false;
    }
  }
}
