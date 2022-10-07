import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public empUrl:string

  constructor(private http:HttpClient) {
    this.empUrl='http://localhost:3000/employee/';
   }
   getData():Observable<any>
   {
    return this.http.get(this.empUrl);
   }
  
   getDatabyId(id:number):Observable<any>
   {
    return this.http.get(this.empUrl+id)
   }
}
