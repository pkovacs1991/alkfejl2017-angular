import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-favourite',
  templateUrl: './recipe-favourite.component.html',
  styleUrls: ['./recipe-favourite.component.css']
})
export class RecipeFavouriteComponent implements OnInit {

    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    async ngOnInit() {
        this.recipes = await this.recipeService.getFavourites();
    }
}
