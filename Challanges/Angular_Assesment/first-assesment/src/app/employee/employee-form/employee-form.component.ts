import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public signUpForm: FormGroup;
  isSubmitted: boolean = false;

  public employee: any = [];
  // public employee:Employee[];

  constructor(private fb: FormBuilder) {
    this.signUpForm = new FormGroup('');
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(7), Validators.pattern('[a-zA-Z]*')]],
        gender: ['', [Validators.required, Validators.pattern('[ a-zA-Z]*')]],
        salary: ['', [Validators.required]],
        dob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }
    );

  }
  onSubmit() {
    this.isSubmitted = true;  
    this.employee.push(this.signUpForm.value);
      
    
    console.log(this.employee);
  }
  onSave(){
    this.isSubmitted=true;
    if(this.signUpForm.valid)
    {
      this.employee.push(this.signUpForm.value)
      this.isSubmitted=false;
    }
  }
  onReset() {
      this.signUpForm.reset();
  }
  /**
   * @event 
   * @desc for submitting data
   * @param employee 
   */
  editEmployee(employee:any)
  {
    console.log(employee);
    // console.log(this.employee(employee));
    this.signUpForm.patchValue(employee);
  }

}
