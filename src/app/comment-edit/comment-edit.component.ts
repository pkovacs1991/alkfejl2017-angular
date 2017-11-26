import { Component, OnInit } from '@angular/core';
import { Comment } from "../models/comment";
import { Recipe } from "../models/recipe";
import { ActivatedRoute, ParamMap } from "@angular/router";
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
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      this.comment = id !== null
        ? this.commentService.getComment(+id)
        : new Comment();
      return Observable.of({});
    })
    .subscribe();

    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('recipeid');
      this.recipe = id !== null
        ? this.recipeService.getRecipe(+id)
        : new Recipe();
      return Observable.of({});
    })
    .subscribe();
  }

  onFormSubmit(comment: Comment) {
    if (comment.id > 0) {
      this.commentService.updateComment(comment.id, comment);
    } else {
      this.commentService.addComment(comment, this.recipe);
    }
    this.location.back();
  }

}
