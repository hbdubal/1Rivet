import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  genders=['male','female'];
  // signUpForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    // this.signUpForm=new FormGroup(
    //   {
    //     'username':new FormControl(null),
    //     'email':new FormControl(null)
    //   }
    // )
  }

}
