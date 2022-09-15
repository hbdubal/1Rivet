import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pass',
  templateUrl: './show-pass.component.html',
  styleUrls: ['./show-pass.component.scss']
})
export class ShowPassComponent implements OnInit {
  public title="Show Password";

  public inputType:string='password';
  constructor() { }

  ngOnInit(): void {
  }
public showPass(event:any):void
{
  event.target.checked ? this.inputType='text' : this.inputType='password';
}
}
