import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss']
})
export class AuthCardComponent implements OnInit {
  public title = "Condition In Aungular";
  show=true;

  public isLogedin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public login(): void {
    this.isLogedin = true;
  }
  public logout(): void {
    this.isLogedin = false;
  }

}
