import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/Users";
}
