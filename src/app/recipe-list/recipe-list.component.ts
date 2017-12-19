import {AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Recipe } from "../models/recipe";
import { User } from "../models/user";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnChanges  {

  selectedCategory: string = '';
  favourites: Recipe[] = [];
  @Input() recipes: Recipe[];
  filteredRecipes: Recipe[];
  @Output() onRefresh = new EventEmitter<number>();

  loggedInUser: User;

  constructor(
    private recipeService: RecipeService,
  ) { this.loggedInUser = JSON.parse(localStorage.getItem('user')); }


    ngOnChanges() {
    this.recipeService.getFavourites().subscribe(favourites => this.favourites = favourites);
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
      this.recipeService.deleteRecipe(id).subscribe(
          next => this.onRefresh.emit(null));

  }

  addFavouriteRecipe(id: number) {

      this.recipeService.addToFavourite(id).subscribe(
          next => this.recipeService.getFavourites().subscribe(favourites => this.favourites = favourites));


  }

  removeFavouriteRecipe(id: number) {

      this.recipeService.removeFromFavourite(id).subscribe(
          next => {
            this.recipeService.getFavourites().subscribe(favourites => this.favourites = favourites);
            this.onRefresh.emit(null);
          });

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

  isMyRecipe(recipe: Recipe){
    return this.loggedInUser && (this.loggedInUser.id === recipe.owner.id);
  }

}
