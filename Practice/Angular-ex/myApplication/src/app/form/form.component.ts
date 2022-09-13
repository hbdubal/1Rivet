import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = 'Angular Events and Get Value';
  displayVal:string='';
  count=0;

  constructor() { }
  getValue(val:string)
  {
    console.log(val);
  }

  getData(val:string)
  {
    console.log(val);
    this.displayVal=val;
  }

  counter(type:string)
  {
    type==='add' ? this.count++: this.count--
  }
  ngOnInit(): void {
  }

}
