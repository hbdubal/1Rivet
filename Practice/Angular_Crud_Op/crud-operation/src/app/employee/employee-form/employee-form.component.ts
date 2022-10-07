import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
    this.employee = [];
    this.empForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z]*')]],
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z]*')]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      }
    );

  }
  ngOnInit(): void {
    // Form validation

    
  }
  // Add Data in Form
  // onSubmit() {
  //   this.isSubmitted = true;
  //   this.employee.push(this.empForm.value);

  //   console.log(this.employee);  
  // }
  // Add data on button click
  onSave() {
    this.isSubmitted = true;
    if (this.empForm.valid) {
      this.employee.push(this.empForm.value)
      this.isSubmitted = false;
    }

  }

}
