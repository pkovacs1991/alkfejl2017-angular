import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories: string[] = ['PASTA', 'PIZZA', 'LEVES'];
  //@Input('status') selectedStatus: string = '';
  @Input('category') selectedCategory: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // onFilterChange(status: string) {
  //   this.selectedStatus = status;
  //   this.onChange.emit(status);
  // }
  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.onChange.emit(category);
  }

}
