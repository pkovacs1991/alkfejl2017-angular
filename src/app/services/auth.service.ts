import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  @Output() loggedInUser: EventEmitter<any> = new EventEmitter();

  users: User[] = [
      {
          id: 1,
          username: 'alma',
          email: 'a@a.com',
          password: 'aaa',
          role: 'ADMIN'
      },
      {
          id: 2,
          username: 'barack',
          email: 'b@b.com',
          password: 'bbb',
          role: 'USER'
      },
      {
          id: 3,
          username: 'cseresznye',
          email: 'c@c.com',
          password: 'ccc',
          role: 'USER'
      },
      {
          id: 4,
          username: 'dio',
          email: 'd@d.com',
          password: 'ddd',
          role: 'USER'
      }
  ];

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {

    for ( let i = 0; i < this.users.length; i++) {
      if (user.username === this.users[i].username && user.password === this.users[i].password) {
          console.log('user matched');
          this.loggedInUser.emit(this.users[0]);
          localStorage.setItem('user', JSON.stringify(this.users[i]));
          break;
      }

    }



  }

  logout() {
      this.loggedInUser.emit(null);
      localStorage.removeItem('user');
  }

}
