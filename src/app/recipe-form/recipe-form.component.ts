import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Issue } from "../issue";
import { Recipe } from "../recipe";

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class IssueFormComponent implements OnChanges {

  // @Input() issue: Issue;
  // model: Issue = null;
  // @Output() onSubmit = new EventEmitter<Issue>();
  @Input() recipe: Recipe;
  model: Recipe = null;
  @Output() onSubmit = new EventEmitter<Recipe>();

  constructor() { }

  ngOnChanges() {
    this.model = Object.assign({}, this.recipe);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.recipe);
  }
}