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
          password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
          role: 'ADMIN'
      },
      {
          id: 2,
          username: 'barack',
          email: 'b@b.com',
          password: '5cb138284d431abd6a053a56625ec088bfb88912',
          role: 'USER'
      },
      {
          id: 3,
          username: 'cseresznye',
          email: 'c@c.com',
          password: 'f36b4825e5db2cf7dd2d2593b3f5c24c0311d8b2',
          role: 'USER'
      },
      {
          id: 4,
          username: 'dio',
          email: 'd@d.com',
          password: '9c969ddf454079e3d439973bbab63ea6233e4087',
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

}
