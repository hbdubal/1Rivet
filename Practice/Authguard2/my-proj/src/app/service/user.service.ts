import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/user/';
  }

  getData():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl);
  }
  postData(data:User):Observable<User>{
    return this.httpClient.post<User>(this.baseUrl, data);
  }
}
