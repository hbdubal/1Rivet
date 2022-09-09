import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  template: `
    <h1 class="heading1">
     Inline style Template
    </h1>
  `,
  styles: [
    '.heading1{color:pink;}'
  ]
})
export class AssociateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
