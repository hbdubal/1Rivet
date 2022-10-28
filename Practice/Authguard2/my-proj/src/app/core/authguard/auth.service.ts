import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

public getauthData():boolean{
    const isAuth = localStorage.getItem('isAuth');
    if(isAuth){
    return true
    }
    else{
      return false
    }
  }
}
