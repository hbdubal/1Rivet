import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  name:string='';
  gender:string='';
  dob:string='';
  salary:string='';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.queryParams['name'];
    this.gender=this.activatedRoute.snapshot.queryParams['gender'];
    this.dob=this.activatedRoute.snapshot.queryParams['dob'];
    this.salary=this.activatedRoute.snapshot.queryParams['salary'];
  }

}
