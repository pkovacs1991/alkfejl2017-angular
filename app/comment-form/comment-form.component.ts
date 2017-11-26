import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Comment } from "../models/comment";

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnChanges {

  @Input() comment: Comment;
  model: Comment = null;
  @Output() onSubmit = new EventEmitter<Comment>();

  constructor() { }

  ngOnChanges() {
    this.model = Object.assign({}, this.comment);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    console.log(this.model);
    this.onSubmit.emit(this.model);
  }
}
