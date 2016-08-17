import {Component, Output, EventEmitter} from '@angular/core'
import {User} from '../../../models/user/User.model';
import {LoginService} from '../service/Login.service'

@Component({
  selector:'login',
  templateUrl: 'app/components/login/view/Login.component.html',
  providers:[LoginService],
  outputs:['loginEvent', 'userEvent']
})

export class LoginComponent{

  loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  userEvent:EventEmitter<User> = new EventEmitter<User>();

  user:User = new User(null, '', '');
  public n: number = 1;

  constructor(
    private loginService:LoginService
  ){ }

  private validateLogin(){

    if(this.user.username === null || this.user.password === null ||
      this.user.username.length === 0 || this.user.password.length === 0){

      this.loginEvent.emit(false);
      console.log("YOU MUST FILL EVERY FIELD!")
      // alert("YOU MUST FILL EVERY FIELD!")
    }
    else{
      if(this.loginService.loginCorrect(this.user)){
        this.loginEvent.emit(true);
        this.user.setId(this.loginService.getIdFromParams(this.user.username, this.user.password));
        this.userEvent.emit(this.user);
        console.log("WELCOME BACK "+ this.user.username.toUpperCase() +"!")
        // alert("WELCOME BACK "+ this.user.username.toUpperCase() +"!")
      }
      else{
        this.loginEvent.emit(false);
        console.log("YOU'RE NOT LOGGED YET!")
        // alert("YOU'RE NOT LOGGED YET!")
      }
    }
  }
}
