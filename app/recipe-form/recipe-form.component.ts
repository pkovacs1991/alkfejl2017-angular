import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Recipe } from "../models/recipe";
import { Category } from "../models/category";

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnChanges {

  @Input() recipe: Recipe;
  @Input() categories: Category[];
  model: Recipe = null;
  @Output() onSubmit = new EventEmitter<Recipe>();

  constructor() {}

  ngOnChanges() {
    this.model = Object.assign({}, this.recipe);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    console.log(this.model);
    this.onSubmit.emit(this.model);
  }
}