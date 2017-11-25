import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.recipe = this.recipeService.getRecipe(id);

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        this.recipe = this.recipeService.getRecipe(id);
        return Observable.of({});
      })
      .subscribe();
  }

}
