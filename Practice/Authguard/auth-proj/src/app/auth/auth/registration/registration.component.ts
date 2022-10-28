import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthencticationService } from '../authenctication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
public registerForm!:FormGroup;
public loading = false;
public issubmitted = false;

  constructor(private fb:FormBuilder,private authenticationService:AuthencticationService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group(
      {
        firstname:['',[Validators.required]],
        lastname:['',[Validators.required]],
        gender:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        confirmpassword:['',[Validators.required]],
      }
    )
  }

  onSubmit(){
    if(this.registerForm.valid)
    {
      console.log('form is valid');
    }
    else
    {
      console.log('form is not valid');
    }
  }

}
