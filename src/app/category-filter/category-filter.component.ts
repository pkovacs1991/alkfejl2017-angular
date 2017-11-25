import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../models/category";

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories: Category[];
  //@Input('status') selectedStatus: string = '';
  @Input('category') selectedCategory: string;
  @Output() onChange = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  // onFilterChange(status: string) {
  //   this.selectedStatus = status;
  //   this.onChange.emit(status);
  // }
  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.onChange.emit(category);
  }

}
