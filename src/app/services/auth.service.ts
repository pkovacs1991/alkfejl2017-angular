import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import {UserService} from "./user.service";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  @Output() loggedInUser: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  async login(user: User) {
    const users = await this.userService.getUsers();
    console.log(users);
    for ( let i = 0; i < users.length; i++) {
      if (user.username === users[i].username && user.password === users[i].password) {
          console.log('user matched');
          this.loggedInUser.emit(users[i]);
          localStorage.setItem('user', JSON.stringify(users[i]));
          break;
      }

    }



  }

  logout() {
      this.loggedInUser.emit(null);
      localStorage.removeItem('user');
  }

}
