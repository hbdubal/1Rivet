import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
  title = "Strctural Directives in Angular !!!!!!";

  isspecial = true;
  country = ['India', 'England', 'Austrailia']
  constructor() { }

  people: any[] = [
    {
      "name": "Hiral Dubal",
      "age": 25,
      "country": 'India'
    },
    {
      "name": "Kiran Gandhi",
      "age": 27,
      "country": 'Pakistan'
    },
    {
      "name": "Sheetal Patel",
      "age": 24,
      "country": 'England'
    },
    {
      "name": "Hem Chudgar",
      "age": 27,
      "country": 'Singapur'
    },
    {
      "name": "Imesh Dubal",
      "age": 22,
      "country": 'UK'
    },
    {
      "name": "Yash Dubal",
      "age": 23,
      "country": 'UK'
    }
  ]

  ngOnInit(): void {
  }

}
