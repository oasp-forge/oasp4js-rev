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

    if(this.login){
      this.timer = setInterval(() => {
        console.log('/// Interval ///');
        if(this.login === true){
          this.autoLog = true;
          this.login = null;
        }
      }, 10000);
    }
  }

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

  validateAutoLogin(username, password){
    this.usuario.setUsername(username);
    this.usuario.setPassword(password);
    if(this.loginService.loginCorrect(this.usuario)){
      this.autoLog = false;
      this.login = true;
      this.usuario.setId(this.loginService.getIdFromParams(this.usuario.getUsername(), this.usuario.getPassword()));
      this.enviar(true);
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        console.log('/// Interval ///');
        if(this.login === true){
          this.autoLog = true;
          this.login = null;
        }
      }, 10000);
    }
    else{
      this.enviar(false);
      this.autoLog = false;
    }
  }
}
