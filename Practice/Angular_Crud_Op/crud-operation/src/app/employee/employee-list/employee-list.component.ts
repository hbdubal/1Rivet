import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Output() empListPatch: EventEmitter<string>
  emp: any;


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.empListPatch = new EventEmitter();
    this.emp = [];
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  // Get EmployeeData
  getEmployeeData() {
    this.employeeService.getData().subscribe((data) => {
      this.emp = data;

    }
    )
  }
  // Get EmployeeDetails on Button Click
  onDetails(id: any) {
    this.router.navigate(['employee/details', id])
  }

  // Update Data on Button Click
  onEditClicked(employee: any) {
    this.router.navigate(['employee/edit', employee.id])
    this.empListPatch.emit(employee)
  }

  onDelete(id:any) {
    this.employeeService.deleteEmp(id).subscribe(resp => {
      this.getEmployeeData();
    })
  }
}




