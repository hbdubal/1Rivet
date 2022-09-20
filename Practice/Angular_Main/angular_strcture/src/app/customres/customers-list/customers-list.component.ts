import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customerDetails:any[]=[];
  constructor() { 
    this.customerDetails=[
      {id:1,name:"hiral", age:25, city:"valsad"},
      {id:2,name:"sheetal", age:24, city:"vapi"},
      {id:3,name:"kiran", age:25, city:"bilimora"},
      {id:4,name:"yesha", age:22, city:"surat"}
    ]
  }

  ngOnInit(): void {
  }
  
  // public edit(val:any){
  //   this.customerDetails.push(val)
  // }

 public add(){

  }
}
