import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  title = "Angular Pipes";
  today = Date();

  user={
    name:"hiral",
    age:25,
  };
  constructor() { }
  ngOnInit(): void {
  }

}
