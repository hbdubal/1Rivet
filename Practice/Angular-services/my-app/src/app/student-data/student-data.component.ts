import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {

  students: any=[];
  constructor(private _studentService:StudentService) {
      this.students = this._studentService.getStudents();
  }
  ngOnInit(): void {
  }

}
