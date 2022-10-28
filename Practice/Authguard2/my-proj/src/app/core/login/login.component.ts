import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup;
  // public newData!:string;
  public isaccessable:any;

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
  }

  onLogin(){
    this.userService.getData().subscribe((data) => {
       let newData=data.find((user)=> user.email === this.loginForm.controls['email'].value && user.password === this.loginForm.controls['password'].value)
    if(newData){
      localStorage.setItem('isAuth','true')
      this.router.navigate(['home'])
    }
    else{
      console.error("please enter a valid details");
      
    }
  })
    }
    
}
