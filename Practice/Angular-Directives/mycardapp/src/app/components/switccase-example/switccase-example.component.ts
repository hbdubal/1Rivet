import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switccase-example',
  templateUrl: './switccase-example.component.html',
  styleUrls: ['./switccase-example.component.scss']
})
export class SwitccaseExampleComponent implements OnInit {
title='Switch Case';
color="yellow";
  constructor() { }

  ngOnInit(): void {
  }

}
