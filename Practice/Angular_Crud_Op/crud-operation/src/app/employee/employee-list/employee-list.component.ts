import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  emp: any;
  constructor(private employeeService: EmployeeService, private router:Router) {
    this.emp = [];
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getData().subscribe((data) => {
      this.emp = data;
      // console.log(this.emp);
    }
    )
  }
  onDetails(id:any)
  {
    this.router.navigate(['employee/details',id])
  }
}
