import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeelist: any;
  @Output() editDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.employeelist)
  }
  editEmployee(employee:any) {
    this.editDetails.emit(employee);
  }
  onDeleteTask(employee:any)
  {
    if (employee !== -1) {
      this.employeelist.splice(employee, 1);
}
  }
}
