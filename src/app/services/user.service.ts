import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Recipe} from '../models/recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('api/user');
    }


    getUser(id): Observable<User>  {
        return this.http.get<User>(`api/user/${id}`);
    }

    getFavouriteRecipes(): Observable<Recipe[]>   {
        return this.http.get<Recipe[]>(`api/recipes/favourites`);

    }

    getMyRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`api/recipes/my`);

    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`api/user/register`, user);
    }

    deleteUser(id: number ): Observable<any> {
        return this.http.delete<any>(`api/user/${id}`);
    }

}
