import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
  // public title = "Condition In Aungular";
  // If Condition
  show = true;
  public isLogedin: boolean = false;

  // SwitchCase
  color = "yellow";

  constructor() { }

  ngOnInit(): void {
  }
   // If Condition
  public login(): void {
    this.isLogedin = true;
  }
  public logout(): void {
    this.isLogedin = false;
  }
   // If Condition-End
}
