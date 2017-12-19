import { Injectable } from '@angular/core';
import {Category} from '../models/category';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CategoryService {
    categories: Category[] = [
        {
            id: 1,
            name: 'PASTA'
        },
        {
            id: 2,
            name: 'PIZZA'
        },
        {
            id: 3,
            name: 'SOUP'
        }
    ];

    constructor(
        private http: HttpClient

    ) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`api/category`);
    }


    getCategory(id): Observable<Category> {
        return this.http.get<Category>(`api/category/${id}`);
    }

    addCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(`api/category`, category);
    }

    updateCategory(id: number, category: Category): Observable<Category> {
        return this.http.put<Category>(`api/category/${id}`, category);
    }

    deleteCategory(id: number ): Observable<any> {
        return this.http.delete<any>(`api/category/${id}`);
    }

}
