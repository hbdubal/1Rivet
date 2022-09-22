import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  public title="Sms-App";

  public myTextarea:string='';
  public maxChar:number=200;

  public time: string = new Date().toLocaleTimeString();

  public count: number = 30;

  public message:string='Hello';

  userData:any={};
  // public display:false;
  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data
  }
  
  // toggle()
  // {

  //   this.display=!this.display;
  // }
  constructor() { }

  ngOnInit(): void {
  }
  public getDate(): string {
    return new Date().toLocaleDateString();
  }
  public getTime(): string {
    return new Date().toLocaleTimeString();
  }
  public increment(): void {
    this.count = this.count + 1;
  }
  public decrement(): void {
    this.count = this.count - 1 > 0 ? this.count -1: 0;
  }
  public updateMsg(msg:string):void
  {
    this.message=msg;
  }
}
