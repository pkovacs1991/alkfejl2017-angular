import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login() {
    const user = {
      "username": "admin",
      "password": "a"
    };
    return this.http.post(
      // 'http://localhost:4200/api/user/login', 
      'api/user/login', 
      user,
      httpOptions
    ).toPromise();
  }

}
