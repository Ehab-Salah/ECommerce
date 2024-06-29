import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterForm } from '../Interfaces/register-form';
import { LoginForm } from '../Interfaces/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLogged:BehaviorSubject<boolean>;
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    this.isUserLogged=new BehaviorSubject<boolean>(false);

  }

 

  logOut(){
    this.isUserLogged.next(false);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/Login'])
  }

  register()
  {
    //console.log("register : ",userData);
    this.isUserLogged.next(true);
    //return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , userData)
  }

  logIn()
  {
    this.isUserLogged.next(true);
    //return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , userData)
  }

}

