import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // data=5;
  // datalist='hiral';
 
  username:string=''
  userList:any=[];
  constructor() { }

  
  ngOnInit(): void {}
  // updateData(){
  //   this.data=Math.floor(Math.random()*10);
  // }
  // editData(list:string){
  //   console.warn(list);
  //   this.datalist=list;
  // }
  onUserAdd(){
    this.userList.push(this.username);
  }
}
