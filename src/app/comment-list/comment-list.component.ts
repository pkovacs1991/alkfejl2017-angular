import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Comment} from '../models/comment';
import {CommentService} from '../services/comment.service';
import {User} from '../models/user';


@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {

  @Input() comments: Comment[];
  @Input() recipeId: number;
  loggedInUser: User;

  constructor(private commentService: CommentService) {
     this.loggedInUser = JSON.parse(localStorage.getItem('user'));
  }

  ngOnChanges() {
      console.log(this.comments);
  }

    isMyComment(comment: Comment){
        return this.loggedInUser && ( this.loggedInUser.id === comment.user.id);
    }

    deleteComment(id: number) {
        this.commentService.deleteComment(id).subscribe(next =>
            this.commentService.getCommentsByRecipe(this.recipeId).subscribe(comments => this.comments = comments));
    }

}
