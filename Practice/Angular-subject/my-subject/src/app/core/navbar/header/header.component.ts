import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 <a class="text-decoration-none listdata">
        <ul class="list-group mt-3 d-flex" *ngIf="companyList | searchFilter:searchText as filterList">
            <li class="list-group-item my-2" *ngFor="let companyList of company">
                <div class="d-flex align-items-center justify-content-space-between"
                    (click)="onEditList(companyList.id)">
                    <span class="p-2 rounded-circle" style="background-color: #85b1c7;"> {{companyList.companyName |
                        nameInitials}}</span>
                    <span> {{companyList.companyName | titlecase}} </span>
                    <button class="delete-icon bi bi-x-square border-0 bg-transparent"
                        (click)="onDelete(companyList.id)"></button>
                </div>
            </li>
        </ul>
    </a>