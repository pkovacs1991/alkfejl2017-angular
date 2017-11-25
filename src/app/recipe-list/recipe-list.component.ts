import { Component, OnInit } from '@angular/core';
import { Recipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  selectedCategory: string = '';
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }


  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes();
    this.filterRecipes();
  }


  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.selectedCategory === ''
      ? this.recipes
      : this.recipes.filter(
          recipe => recipe.category.name === this.selectedCategory);
  }

}
