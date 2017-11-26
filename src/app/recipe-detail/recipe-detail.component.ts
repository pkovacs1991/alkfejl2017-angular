import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../models/recipe";
import { Comment } from "../models/comment";
import { User } from "../models/user";
import { RecipeService } from "../services/recipe.service";
import { CommentService } from "../services/comment.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = new Recipe();
  comments: Comment[];
  loggedInUser: User;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.user = this.recipeService.getUser(id);

    this.loggedInUser = JSON.parse(localStorage.getItem('user'));

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        this.recipe = this.recipeService.getRecipe(id);
        return Observable.of({});
      })
      .subscribe();

      console.log(this.recipe.id);
      this.comments = this.commentService.getCommentsByRecipe(this.recipe.id);
      console.log(this.comments);
  }



}
