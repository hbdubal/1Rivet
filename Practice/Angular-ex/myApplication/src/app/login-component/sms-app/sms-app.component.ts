import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.scss']
})
export class SmsAppComponent implements OnInit {
  public title="Sms-App";

  public myTextarea:string='';
  public maxChar:number=200;
  constructor() { }

  ngOnInit(): void {
  }

}
