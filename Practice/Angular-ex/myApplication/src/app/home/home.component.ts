import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
fontsize:string='';

  constructor() { }
  clickEvent() {
    this.fontsize='btn is clicked'
  }
  ngOnInit(): void {
  }

}