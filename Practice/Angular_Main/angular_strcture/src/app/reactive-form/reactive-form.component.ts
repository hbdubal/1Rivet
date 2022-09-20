import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  signUpForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      hobbies: this.fb.array([])
    }
  );
get hobbiesControl()
{
  return this.signUpForm.get('hobbies') as FormArray;
}
  // signUpForm: FormGroup = new FormGroup(
  //   {
  //     name:new FormControl('', [Validators.required]),
  //     email:new FormControl('', [Validators.required, Validators.email]),
  //     hobbies: new FormArray([]),
  //   }
  // );

  // get emailError()
  // {
  //   let emailMessage='';
  //   let emailControl=this.signUpForm.get('email');

  //   if(emailControl?.touched)
  //   {
  //     if(emailControl?.errors?.['required'])
  //     {
  //       emailMessage="please enter a email";
  //     }else if(emailControl?.errors?.['email']) 
  //     {
  //       emailMessage="please enter a valid email";
  //     }
  //   }
  //   return emailMessage;
  // }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signUpForm)
  }
  onAddHobby(){
    (this.signUpForm.get('hobbies') as FormArray).push(this.fb.control(''));
  }
}
