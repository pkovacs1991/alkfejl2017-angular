import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { AuthService } from "./services/auth.service";
import {User} from "./models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
      authService.loggedInUser.subscribe(user => this.user = user);
      console.log(this.user);

  }

  ngOnInit() {
      const userJSON = localStorage.getItem('user');
      this.user = JSON.parse(userJSON);
      console.log(this.user);

  }

  logout() {
    this.authService.logout();

    localStorage.removeItem('user');
    this.router.navigate(['dashboard']);
  }
}
