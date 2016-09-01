import {Component, Output, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core'
import {User} from '../../../models/user/User.model';
import {LoginService} from '../service/Login.service';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
declare let $:any;

@Component({
  selector:'login',
  templateUrl: 'app/components/login/view/Login.component.html',
  providers:[LoginService],
  outputs:['loginEvent', 'userEvent']
})

export class LoginComponent implements OnInit{

  loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  userEvent:EventEmitter<User> = new EventEmitter<User>();

  user:User;
  public n: number = 1;
  loginFailed:boolean = true;

  constructor(
    private loginService:LoginService
  ){ }

  private doctors = [];
  // constructor(http: Http, cd: ChangeDetectorRef, private loginService:LoginService) {
  //   http.get('http://jsonplaceholder.typicode.com/users/')
  //       .flatMap((data) => data.json())
  //       .subscribe((data) => {
  //         this.doctors.push(data);
  //         cd.detectChanges();
  //       });
  // }


  // SERVER CALL (TEST 1)
  ngOnInit(){
    this.load();
  }

  load(){
    // we capture with jQuery the keyup event
    $("#search").keyup((e) => {
        let text = e.target.value; //--> if you have the typescript package: this error is because Typescript can not detect the value property of target
        let result = $("#result");

        // To avoid calls when the name is not formed
        if (text.length < 3){
            result.text("");
            return;
        }

        //or with a simple call:
        let url = "https://api.spotify.com/v1/search?type=artist&q=" +  text;
        $.getJSON(url, (artists) => {
            result.text("");
            $.each(artists.artists.items, (i, artist) => {
                result.append(artist.name+"<br/>");
            });
        });
    });
  }

  // :SERVER CALL (TEST 1)

  private hideAlertLogin(){
    this.loginFailed = !this.loginFailed;
  }

  validateLogin(username, password){
      this.user = new User(null, username, password, null);
      if(this.loginService.loginCorrect(this.user)){
        this.loginEvent.emit(true);
        this.user.setId(this.loginService.getIdFromParams(this.user.username, this.user.password));
        this.loginService.funcionLogin(username,password);
        this.user.setPermission(this.loginService.getPermissionFromParams(this.user.username, this.user.password));
        this.userEvent.emit(this.user);
      }
      else{
        this.loginFailed = false;
      }
  }
}
