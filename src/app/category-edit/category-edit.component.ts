import { Component, OnInit } from '@angular/core';
import { Category } from "../models/category";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
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
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
          this.categoryService.getCategory(+id).subscribe(category => this.category = category);
      } else {
          this.category = new Category();

      }

      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(category: Category) {
    console.log(category);
    if (category.id > 0) {

      this.categoryService.updateCategory(category.id, category).subscribe(next => this.router.navigate(['category/all']));
    } else {
      this.categoryService.addCategory(category).subscribe(next => this.router.navigate(['category/all']));
    }
  }

}
