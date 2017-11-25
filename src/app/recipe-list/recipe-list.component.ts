import {AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import { Recipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnChanges  {

  selectedCategory: string = '';
  favourites: Recipe[];
  @Input() recipes: Recipe[];
  filteredRecipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }


    ngOnChanges() {
    this.favourites = this.recipeService.getFavourites();
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

  deleteRecipe(id: number) {
    console.log(id);
    this.recipeService.deleteRecipe(id);

  }

  addFavouriteRecipe(id: number) {

      this.recipeService.addToFavourite(id);
      this.favourites = this.recipeService.getFavourites();

  }

  removeFavouriteRecipe(id: number) {

      this.recipeService.removeFromFavourite(id);
      this.favourites = this.recipeService.getFavourites();

  }

  isFavourite(id: number): boolean {
    let ret = false;
    for (let i = 0; i < this.favourites.length; i++) {
        if (this.favourites[i].id === id) {
            ret = true;
        }
    }

    return ret;
  }

}
