import { Component, OnInit } from '@angular/core';
import { Users } from './model/users';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'crud-operation';

  constructor(private rs: RestService) { }

  // columns = ["User Id", "First Name", "Last Name", "Emial", "Mobile", "Salary"];
  // index = ["id", "firstName",  "lastName", "email", "mobile", "salary"];
  // users: Users[] = [];

  // ngOnInit(): void {
  //   this.rs.getUsers().subscribe(
  //     (response) => {
  //       this.users = response;
  //     },
  //     (error) => {
  //       console.log("Error Occured : " + error);
  //     }
  //   )
  // }
}
