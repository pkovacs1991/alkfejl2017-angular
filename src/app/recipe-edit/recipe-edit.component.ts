import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { Recipe } from "../models/recipe";
import { Category } from "../models/category";
import { RecipeService } from "../services/recipe.service";
import { CategoryService } from "../services/category.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
          if (id !== null) {
            this.recipeService.getRecipe(+id).subscribe(recipe => this.recipe = recipe);
          } else {
              this.recipe = new Recipe();
          }
        console.log(this.recipe);
      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(recipe: Recipe) {
    console.log(recipe);
    if (recipe.id > 0) {
      console.log('form', recipe);
      this.recipeService.updateRecipe(recipe.id, recipe).subscribe(next => this.router.navigate(['recipe/all']));
      console.log('update');
    } else {
      this.recipeService.addRecipe(recipe).subscribe(next => this.router.navigate(['recipe/all']) );
    }

  }

}
