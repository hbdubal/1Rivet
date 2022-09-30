import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public postForm!: FormGroup;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.postForm=new FormGroup(  
      {
        name:new FormControl(['', [Validators.required]]),
        content:new FormControl(['', [Validators.required]])
  })
  }
  // onCreatePost()
  // {
  //   this.http.post('https://jsonplaceholder.typicode.com/users'); 
  //   // console.log(this.postForm.value);
  // }
}
