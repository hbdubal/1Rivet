import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  template: `
    <h2>
      Inline template component
    </h2>
  `,
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
