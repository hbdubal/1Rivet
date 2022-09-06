import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-components',
  templateUrl: './child-components.component.html',
  styleUrls: ['./child-components.component.scss']
})
export class ChildComponentsComponent implements OnInit {

  constructor() { }
  @Input() Myvalue="Hiral"
  ngOnInit(): void {
  }

}
