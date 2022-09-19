import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-communication',
  templateUrl: './parent-communication.component.html',
  styleUrls: ['./parent-communication.component.scss']
})
export class ParentCommunicationComponent implements OnInit {
  title="parent-component";
  public userName:string[];

  constructor() {
    this.userName=["Hiral"]
   }

  ngOnInit(): void {
  }
  public addData(val:string){
    this.userName.push(val);
  }

  public addChildData(val:string){
    console.log('Parent', val);
  }
}
