import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { Recipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      this.recipe = id !== null
        ? this.recipeService.getRecipe(+id)
        : new Recipe();
        console.log(this.recipe);
      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(recipe: Recipe) {
    console.log(recipe);
    if (recipe.id > 0) {
      this.recipeService.updateRecipe(recipe.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.location.back();
  }

}
