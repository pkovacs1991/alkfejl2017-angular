import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/recipe";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-recipe-my',
  templateUrl: './recipe-my.component.html',
  styleUrls: ['./recipe-my.component.css']
})
export class RecipeMyComponent implements OnInit {


  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
      this.recipes = await this.recipeService.getMyRecipes();
  }
}
