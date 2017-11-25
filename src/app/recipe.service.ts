import { Injectable } from '@angular/core';
import { Issue } from "./issue";
import { Recipe } from "./recipe";
//import { HttpClient, HttpHeaders } from "@angular/common/http";

// const httpOptions = {
//   headers: new HttpHeaders(
//     {'Content-Type': 'application/json'})
// }

@Injectable()
export class IssueService {

  issues: Issue[] = [
    {
      id: 1,
      location: 'PC5',
      description: 'Bad',
      status: 'ADDED',
    },
    {
      id: 2,
      location: 'PC3',
      description: 'Very bad',
      status: 'DONE'
    },
  ];

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

  // getIssues(): Promise<Issue[]> {
  //   return this.http.get<Issue[]>('api/issue').toPromise();
  // }

  // getIssuesSlowly(): Promise<Issue[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.issues);
  //     }, 4000)
  //   });
  // }

  // getIssues(): Issue[] {
  //   return this.issues;
  // }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  // getIssue(id) {
  //   return this.issues.find(issue => issue.id === id);
  // }

  getRecipe(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  // addIssue(issue: Issue) {
  //   const iss = Object.assign(issue, {
  //     id: this.issues.length+1,
  //     status: 'ADDED'
  //   });
  //   this.issues.push(iss);
  // }

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    const rec = Object.assign(recipe, {
      id: this.recipes.length+1,
      user: 'Anonymus',
      category: 'PASTA'
    });
    this.recipes.push(rec);
  }

  // updateIssue(id: number, issue: Issue) {
  //   const iss = this.getIssue(id);
  //   iss.location = issue.location;
  //   iss.description = issue.description;
  // }

  updateRecipe(id: number, recipe: Recipe) {
    console.log(recipe);
    const rec = this.getRecipe(id);
    rec.recipeName = recipe.recipeName;
    rec.ingredients = recipe.ingredients;
    rec.description = recipe.description;
  }
}
