import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public empData:any;
  public id!:number;
  constructor(private empservice:EmployeeService,private activatedroute:ActivatedRoute) { 
    this.activatedroute.params.subscribe((params)=>
    {
      this.id=params['id'];
    }
    )
  }

  ngOnInit(): void {
    this.getEmpbyId();
  }

  getEmpbyId()
  {
    this.empservice.getDatabyId(this.id).subscribe((data)=>
    {
      this.empData=data;
    })
  }
}
