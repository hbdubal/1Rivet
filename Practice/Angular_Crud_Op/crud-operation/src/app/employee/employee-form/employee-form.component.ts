import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router,  } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public empForm: FormGroup;
  public employee: Employee[];
  isSubmitted: boolean = false;
   public id: any;
  // emp: any;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private route: ActivatedRoute, private router:Router) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // console.log(this.id);

    })
    this.employee = [];
    this.empForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      }
    );

  }
  ngOnInit(): void {
  }

  // Add data on button click
  onSave() {
    this.isSubmitted = true;
    this.employeeService.createData(this.empForm.value).subscribe(resp=>
      {
        this.router.navigate(['employee']);
        console.log(resp);
      })
    if (this.empForm.valid) {
      if (this.id) {
        this.updateData();
      }
      else {
	  
      }
    }
  }

   // Update data on button click
  listData(employee: any) {
    this.empForm.patchValue(employee);
  }

  updateData() {
    this.employeeService.updateEmp(this.empForm.value,this.id).subscribe((res) => {
      // this.getData();
    });
  }
  // getData() {
  //   this.employeeService.getData().subscribe(() => {
  //   })
  // }
}
