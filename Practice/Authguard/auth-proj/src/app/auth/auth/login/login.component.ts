import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      console.log('form is valid');
    }
    else
    {
      console.log('form is not valid');
    }
  }

}

