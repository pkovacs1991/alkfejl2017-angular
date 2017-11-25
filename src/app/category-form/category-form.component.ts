import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Category } from "../models/category";

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnChanges {

  @Input() category: Category;
  model: Category = null;
  @Output() onSubmit = new EventEmitter<Category>();

  constructor() { }

  ngOnChanges() {
    this.model = Object.assign({}, this.category);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    console.log(this.model);
    this.onSubmit.emit(this.model);
  }

}
