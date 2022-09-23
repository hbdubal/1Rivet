import { Component } from '@angular/core';
import { MasterService } from './services/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  userlist:any;

  constructor(private service:MasterService) {
    this.userlist=this.service.getUserData();
    console.log(this.userlist);
   }
}
