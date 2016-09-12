import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from "@angular/router";
import { TimerWrapper } from '@angular/core/src/facade/async';
import { Http, Response, Headers } from '@angular/http'
import { HeaderComponent } from '../header/view/Header.component';
import { LoginComponent } from '../login/view/Login.component';
import { LoginService } from '../login/service/Login.service';
import { CrudComponent } from '../crud/view/Crud.component'
import { KitchenComponent } from '../kitchen/view/Kitchen.component'
import { User } from '../../models/user/User.model'
import { ModalDialogComponent } from '../../../oasp/oasp-ui/modal-dialog/modal-dialog.component';

@Routes([
    { path: '', component: CrudComponent },
    { path: '/Tables', component: CrudComponent },
    { path: '/Kitchen', component: KitchenComponent }
])

@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['../../css/oasp4js-sample.component.css'],
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

  constructor(
    private router: Router,
    private loginService: LoginService,
    private http: Http
  ){
    this.autoLog = false
    this.timer = setInterval(() => {
    }, this.mins*15)

    let params = {
      j_username: "chief",
      j_password: "chief"
    }
    let headers = new Headers()
    headers.append('Content-type', 'application/json')
    headers.append('Set-cookie', 'JSESSIONID=D05C7ED98EAB30676B8774E54995F77C')

    this.http.post("http://localhost:8081/oasp4j-sample-server/j_spring_security_login", JSON.stringify({username:"chief", password:"chief", submit:"Login"}), {headers:headers})
             .map(res => res.json())
             .subscribe(data => {debugger})
    // this.http.post("http://localhost:8081/oasp4j-sample-server/services/rest/login",JSON.stringify(params), {headers:headers})
    //          .toPromise()
    //          .then(data => {
    //   this.http.get("http://localhost:8081/oasp4j-sample-server/services/rest/security/v1/csrftoken/")
    //            .map(res => res.json())
    //            .subscribe(data => {debugger})
    // })

  }

  setUser(value){
      this.usuario = value;
  }

  enviar(value){
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if(this.login === true){
        this.autoLog = true
        this.router.navigate(['']);
        this.login = false
      }
  }, this.mins*15);
    setTimeout( ()=>{
        this.login = value
        if(this.usuario.id < 3){
            this.router.navigate(['/Tables'])
        } else{
            this.router.navigate(['/Kitchen'])
        }
    },1);
  }

  logOut(){
    this.login = false;
    this.router.navigate(['']);
    this.http.post('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/logout', JSON.stringify({j_username: "", j_password: ""}), null)
             .map(res => JSON.stringify(res))
             .subscribe(data => {})
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
