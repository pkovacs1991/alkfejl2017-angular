import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class UserService {

  users = [];

  constructor() { }



    getUsers(): User[] {
        return this.users;
    }


    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    addUser(user: User) {
        console.log(user);
        const usr: User = Object.assign(user, {
            id: this.users.length + 1,
            role: 'USER'
        });
        this.users.push(usr);
    }

    updateUser(id: number, user: User) {
        console.log(user);
        const rec: User = this.getUser(id);
        rec.username = user.username;
        rec.email = user.email;
        rec.password = user.password;
        rec.role = user.role;
    }

}
