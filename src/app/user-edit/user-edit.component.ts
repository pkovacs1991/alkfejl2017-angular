import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
       this.user = new User();
    }

    onFormSubmit(user: User) {
        console.log(user);
        this.userService.addUser(user).subscribe();
        this.router.navigate(['login']);
    }

}
