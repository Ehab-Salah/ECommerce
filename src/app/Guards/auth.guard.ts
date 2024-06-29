import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const rout=inject(Router);
  const authServ=inject(AuthService);
  let logged:boolean=false;
  authServ.isUserLogged.subscribe(data=>{
    logged=data;
    return logged;
  })
  if (logged ) {
    return true;
  }else{
    rout.navigate(['/login'])
    return false;
  }
};
