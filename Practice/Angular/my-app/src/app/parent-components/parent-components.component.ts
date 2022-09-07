import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-components',
  templateUrl: './parent-components.component.html',
  styleUrls: ['./parent-components.component.scss']
})
export class ParentComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // value:string;
  // submitValue(val)
  // {
  //   this.value=val.value;
  // }
}
