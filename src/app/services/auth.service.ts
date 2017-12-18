import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  @Output() loggedInUser: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient

  ) { }

  login(user: User): Observable<User> {
      return this.http.post<User>('api/user/login', {'username': user.username, 'password': user.password});
  }

  logout(): Observable<any> {
      return this.http.get('api/user/logout');
  }

}
