import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;


  constructor(private authService: AuthService, private router: Router) {
      if (localStorage.getItem('user')) {
          router.navigate(['dashboard']);
      }

      this.model = new User();
  }

  ngOnInit() {
  }

  login(form) {
    if (!form.valid) {
        return;
    }
    this.authService.login(this.model);
    this.router.navigate(['dashboard']);

  }

}
