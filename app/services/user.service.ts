import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Recipe} from '../models/recipe';

@Injectable()
export class UserService {

  users = [
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

  constructor() { }



    getUsers(): User[] {
        return this.users;
    }


    getUser(id): User {
        return this.users.find(user => user.id === id);
    }

    getFavouriteRecipes(): Recipe[] {
        const loggedInuser: User = this.users.find(user => user.id === 1);
        return loggedInuser.favoriteRecipes;
    }

    getMyRecipes(): Recipe[] {
        const loggedInuser: User = this.users.find(user => user.id === 1);
        return loggedInuser.recipes;
    }

    addUser(user: User): void {
        console.log(user);
        const usr: User = Object.assign(user, {
            id: this.users.length + 1,
            role: 'USER'
        });
        this.users.push(usr);
    }

    updateUser(id: number, user: User): void {
        console.log(user);
        const rec: User = this.getUser(id);
        rec.username = user.username;
        rec.email = user.email;
        rec.password = user.password;
        rec.role = user.role;
    }

    deleteUser(id: number ) {
        console.log(id);
        const delUser: User = this.users.find(user => user.id === id);
  
        const index = this.users.indexOf(delUser);
        if (index > -1) {
            this.users.splice(index, 1);
        }
  
    }

}
