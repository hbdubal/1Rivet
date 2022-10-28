import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthencticationService {

  public baseUrl: string;

  constructor(public httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/user'
  }

  registerData(registerForm:any):Observable<any>
  {
    return this.httpClient.post<any>(this.baseUrl,registerForm);
  }
}
