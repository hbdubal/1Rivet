import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public signUpForm: FormGroup;
  // isSubmitted: boolean = false;
  // public employee: any = [];
  
  constructor(private fb: FormBuilder) {
    this.signUpForm = new FormGroup('');
  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z]*')]],
        lastname: ['', [Validators.required, Validators.minLength(7), Validators.pattern('[a-zA-Z]*')]],
        email: ['', [Validators.required,Validators.email]],
        gender: ['female', [Validators.required]],
        dob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        salary: ['', [Validators.required]],
      })
     }
     onSave()
     {
      console.log(this.signUpForm.value);
      
     }
     onReset() {
      this.signUpForm.reset();
  }
}
