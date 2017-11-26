import { Component, OnInit } from '@angular/core';
import { Category } from "../models/category";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { CategoryService } from "../services/category.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      this.category = id !== null
        ? this.categoryService.getCategory(+id)
        : new Category();
        console.log(this.category);
      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(category: Category) {
    console.log(category);
    if (category.id > 0) {
      console.log('form', category);
      this.categoryService.updateCategory(category.id, category);
      console.log('update');
    } else {
      this.categoryService.addCategory(category);
    }
    this.location.back();
  }

}
