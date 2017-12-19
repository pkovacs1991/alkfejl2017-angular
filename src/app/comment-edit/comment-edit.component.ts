import { Component, OnInit } from '@angular/core';
import { Comment } from "../models/comment";
import { Recipe } from "../models/recipe";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { CommentService } from "../services/comment.service";
import { RecipeService } from "../services/recipe.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  comment: Comment;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
          this.commentService.getComment(+id).subscribe(
              comment => this.comment = comment
          );
      } else {
          this.comment = new Comment();
      }
      return Observable.of({});
    })
    .subscribe();

    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('recipeid');
        if (id !== null) {
            this.recipeService.getRecipe(+id).subscribe(recipe => this.recipe = recipe);
        } else {
            this.recipe = new Recipe();
        }
      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(comment: Comment) {
    if (comment.id > 0) {
      this.commentService.updateComment(comment.id, comment).subscribe(next => this.router.navigate(['recipe', this.recipe.id]));

    } else {
      comment.recipe = this.recipe;
      this.commentService.addComment(comment).subscribe(next => this.router.navigate(['recipe', this.recipe.id]));
    }

  }

}
