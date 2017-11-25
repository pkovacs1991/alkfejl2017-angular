import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
//import { HttpClient, HttpHeaders } from "@angular/common/http";

// const httpOptions = {
//   headers: new HttpHeaders(
//     {'Content-Type': 'application/json'})
// }

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
    {
      id: 1,
      recipeName: 'szalámis pizza',
      user: 'GuseppeJose',
      ingredients: 'pizza alap, paradicsomszósz, szalámi, meg ízlésre bármimás',
      description: 'A pizza alapra rápakolunk és kennünk mindent, sütőbe betesszük, aztán pár percig sütni hagyuk.',
      category: 'PIZZA'
    },
    {
      id: 2,
      recipeName: 'Nagyi levese',
      user: 'TothneAharmadikrol',
      ingredients: 'leveskocka, zöldségek(répa, krumpli), 1l víz, egy csipetnyi só',
      description: 'A vízet forrni tesszük, beletesszük a zöldségeket, kevergessük jól meg, majd egy óra után kész is.',
      category: 'LEVES'
    },
    {
      id: 3,
      recipeName: 'Bolognai',
      user: 'NemGuseppeJose',
      ingredients: 'spagetti, paradicsomszósz, 0.5 kg darálthús, hagyma',
      description: 'A tésztát kifőzzük, a hagymát felaprítjuk, egy serpenyőben megsütjük az összetevőket, utána resszelt sajttal tálalva máris fogyaszthatjuk.',
      category: 'PASTA'
    }
  ];

  constructor(
   // private http: HttpClient
  ) { }

  // getRecipes(): Promise<Recipe[]> {
  //   return this.http.get<Recipe[]>('api/recipe').toPromise();
  // }


  getRecipes(): Recipe[] {
    return this.recipes;
  }


  getRecipe(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    const rec = Object.assign(recipe, {
      id: this.recipes.length+1,
      user: 'Anonymus',
      category: 'PASTA'
    });
    this.recipes.push(rec);
  }

  updateRecipe(id: number, recipe: Recipe) {
    console.log(recipe);
    const rec = this.getRecipe(id);
    rec.recipeName = recipe.recipeName;
    rec.ingredients = recipe.ingredients;
    rec.description = recipe.description;
  }
}
