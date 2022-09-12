import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  title = "hiral";

  public text: string;
  public textsize: number;

  constructor() {
    this.text = "angular basic";
    this.textsize = 60;
  }
  

  public btnlist(name:string):void
  {
    if(name=='increase')
    {
      this.textsize=this.textsize+10;
    }
    else
    {
      this.textsize=this.textsize-10;
    }
  }
  ngOnInit(): void {
  }

}
