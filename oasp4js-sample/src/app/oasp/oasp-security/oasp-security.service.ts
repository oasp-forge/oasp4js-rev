import { Injectable } from '@angular/core'
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from './http-client.service'
import { User } from '../../main/models/user/User.model';
import { BusinessOperations } from '../../main/BusinessOperations';

export var Headerlogged = false;
export var sessionExpired = false;
export var csrfToken;
export var errorLogin = true;
export var user;

@Injectable()
export class SecurityService{
    BO:BusinessOperations = new BusinessOperations();
    public autoLog: boolean;
    public mins = 60000;
    public timeout = 10000;
    public timer:number;

    constructor(private router: Router, private http:HttpClient) {
    }

    funcionLogin(username,password){
    let formData={
      j_username:username,
      j_password:password
    };

    this.http.post(this.BO.loginPOST,JSON.stringify(formData))
               .map(res => JSON.stringify(res))
               .subscribe(data => {

                 this.http.get(this.BO.csrfGET)
                    .map(res => res.json())
                    .subscribe(data => {
                        Headerlogged = true
                        csrfToken = data.token;
                        sessionExpired = false;
                        this.http.addDefaultHeader('X-CSRF-TOKEN', csrfToken)
                        Headerlogged = true
                        user = new User(0,"notUserYet", "notPasswordYet", 3);
                        if(user.permission == 1 || 3){
                            this.router.navigate(['/Tables'])
                        }
                        if(user.permission == 2){
                            this.router.navigate(["/Kitchen"])
                        }

                        this.http.get(this.BO.userGET)
                           .map(res => res.json())
                           .subscribe(data => {
                           })
                    })
                    //GET USER FROM BACKEND CURRENTUSER FUNCTION
    },
    err => {errorLogin = false})
    }

    getLogged(){
      return Headerlogged;
    }

    getcsrfToken() {
      return csrfToken;
    }

    geterrorLogin(){
     return errorLogin;
    }

    closeErrorLogin(){
      errorLogin = true;
    }

    getUser(){
      return user;
    }

    functionsesionExpired(){
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if(this.getLogged() === true){
          sessionExpired = true
          this.logOut();
        }
    }, this.mins*15);
    }

    getSessionExpired(){
      return sessionExpired;
    }

    logOut(){
    Headerlogged = false;
    this.http.post(this.BO.logOutPost, JSON.stringify({j_username: "", j_password: ""}))
             .map(res => JSON.stringify(res))
             .subscribe(data => {})
    this.router.navigate(["/"])
    }

}
