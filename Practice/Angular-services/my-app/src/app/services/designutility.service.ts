import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }
  messageAlert() {
    alert("thanks for watching")
  }
  url = 'https://jsonplaceholder.typicode.com/users';
  product(): Observable<any> {
    return this.http.get(this.url)
  }
  // product = [
  //   {
  //     name: "Laptop",
  //     id: "001"
  //   },
  //   {
  //     name: "Mobile",
  //     id: "002"
  //   },
  //   {
  //     name: "Tv",
  //     id: "003"
  //   },
  //   {
  //     name: "Machine",
  //     id: "004"
  //   }
  // ]
}
