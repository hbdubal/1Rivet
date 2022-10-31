import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterContentChecked {
public isAuthenticate! : boolean;
  constructor() { }

  ngAfterContentChecked(): void {
  let isAuthValue =  localStorage.getItem('isAuth');
  if(isAuthValue){
    this.isAuthenticate = true;
  }
  else{
    this.isAuthenticate = false;
  }
  }

  ngOnInit(): void {
  }

}
