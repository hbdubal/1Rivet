import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
public inputName:any;
public markName:any;
public inputobj={"name":"","mark":""};



  constructor() { }

  ngOnInit(): void {
  }
  transferData(name:any,mark:any)
  {
    this.inputName=name;
    this.markName=mark;
    this.inputobj={"name":"name","mark":"mark"};
  }
}
