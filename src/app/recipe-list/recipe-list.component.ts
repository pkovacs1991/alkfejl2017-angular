import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { Recipe } from "../recipe";
import { IssueService } from "../recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class IssueListComponent implements OnInit {

  // selectedStatus: string = '';
  // issues: Issue[] = [];
  // filteredIssues: Issue[];
  selectedCategory: string = '';
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[];

  constructor(
    private issueService: IssueService
  ) { }

  // async ngOnInit() {
  //   this.issues = await this.issueService.getIssues();
  //   this.filterIssues();
  // }
  async ngOnInit() {
    this.recipes = await this.issueService.getRecipes();
    this.filterRecipes();
  }

  // onFilterChange(status: string) {
  //   this.selectedStatus = status;
  //   this.filterIssues();
  // }
  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.filterRecipes();
  }

  // filterIssues() {
  //   this.filteredIssues = this.selectedStatus === '' 
  //     ? this.issues  
  //     : this.issues.filter(
  //         issue => issue.status === this.selectedStatus)
  // }
  filterRecipes() {
    this.filteredRecipes = this.selectedCategory === '' 
      ? this.recipes  
      : this.recipes.filter(
          recipe => recipe.category === this.selectedCategory)
  }

}
