import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public empUrl: string;
  private empList: Employee[] = [];

  constructor(private http: HttpClient) {
    this.empUrl = 'http://localhost:3000/employee/';
  }

  // Get Data From DataBase
  getData(): Observable<any> {
    return this.http.get(this.empUrl);
  }
  // GetAll Data From DataBase
  getDatabyId(id: number): Observable<any> {
    return this.http.get(this.empUrl + id)
  }

  // Create Data From DataBase
  createData(employee:Employee[])
  {
    return this.http.post<Employee[]>(this.empUrl, employee);
  }

  // Update Data From DataBase
  updateEmp(employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(this.empUrl + id, employee)
  }

  // Delete Data From DataBase
  deleteEmp(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.empUrl +  id)
  }  
}
