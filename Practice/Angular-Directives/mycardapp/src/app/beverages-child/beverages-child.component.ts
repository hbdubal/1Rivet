import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages-child',
  templateUrl: './beverages-child.component.html',
  styleUrls: ['./beverages-child.component.scss']
})
export class BeveragesChildComponent implements OnInit {
  @Input() beverage = "tea";
  // @Output() newBeverageEvent= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
