import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  name:string="hiral dubal";
  

   val:boolean=false;
  clickme() {
    this.val= true;
    console.log("yes clicked");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
