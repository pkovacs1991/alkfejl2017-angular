import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  
    constructor(
      private userService: UserService
    ) { }
  
    async ngOnInit() {
      this.users = await this.userService.getUsers();
    }
  
    deleteUser(id: number) {
      console.log(id);
      this.userService.deleteUser(id);
    }

}
