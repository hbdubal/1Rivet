import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
public registerForm!:FormGroup;
public loading = false;
public issubmitted = false;

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group(
      {
        firstname:['',[Validators.required]],
        lastname:['',[Validators.required]],
        gender:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
  }

  onSubmit(){
this.userService.postData(this.registerForm.value).subscribe((data)=>{
  console.log(data);
  
})
  }

}
