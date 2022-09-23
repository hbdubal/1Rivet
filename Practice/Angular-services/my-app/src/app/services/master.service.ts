import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  userinfo = [
    {
      "name":"Hiral",
      "mark":200
    },
    {
      "name":"Kiran",
      "mark":210
    },
    {
      "name":"Sheetal",
      "mark":220
    }
  ]
  getUserData()
  {
    return this.userinfo;
  }
  // messageAlert()
  // {
  //   alert("thanks for watching")
  // }
}
