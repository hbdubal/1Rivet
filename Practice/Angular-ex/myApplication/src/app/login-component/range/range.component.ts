import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
public title='Amount Range';

public amountType:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
