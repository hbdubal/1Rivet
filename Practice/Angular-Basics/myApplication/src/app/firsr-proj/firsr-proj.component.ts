import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firsr-proj',
  templateUrl: './firsr-proj.component.html',
  styleUrls: ['./firsr-proj.component.scss']
})
export class FirsrProjComponent implements OnInit {

  name= 'clean code';
  author = 'robert jeson';
  src = 'https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/ica017.jpg';

  name2= 'clean code';
  author2 = 'robert jeson';
  src2 = 'https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books/ica017.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
