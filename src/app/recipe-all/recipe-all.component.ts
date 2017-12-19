import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

    deleteRecipe(id: number) {
      this.recipeService.deleteRecipe(id).subscribe(next => this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes));
    }
}
