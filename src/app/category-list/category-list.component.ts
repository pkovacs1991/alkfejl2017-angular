import { Component, OnInit } from '@angular/core';
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  deleteCategory(id: number) {
    console.log(id);
    this.categoryService.deleteCategory(id).subscribe(next => {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    });
  }

}
