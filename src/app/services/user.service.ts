import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Recipe} from "../models/recipe";

@Injectable()
export class UserService {

  users = [];

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
