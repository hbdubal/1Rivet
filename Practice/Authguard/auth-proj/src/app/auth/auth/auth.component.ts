import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isloginMode=true;

  onSignup()
  {
    this.isloginMode = !this.isloginMode;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
