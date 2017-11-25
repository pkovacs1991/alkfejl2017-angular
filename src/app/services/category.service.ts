import { Injectable } from '@angular/core';
import {Category} from '../models/category';

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
        // private http: HttpClient
    ) { }

    getCategories(): Category[] {
        return this.categories;
    }


    getCategory(id) {
        return this.categories.find(category => category.id === id);
    }

    addCategory(category: Category) {
        console.log(category);
        const rec = Object.assign(category, {
            id: this.categories.length + 1,
        });
        this.categories.push(rec);
    }

    updateCategory(id: number, category: Category) {
        console.log(category);
        const rec: Category = this.getCategory(id);
        rec.name = category.name;
    }

}
