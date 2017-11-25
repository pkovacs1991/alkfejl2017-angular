import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Issue } from "../issue";
import { Recipe } from "../recipe";
import { IssueService } from "../recipe.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();
  recipe: Recipe = new Recipe();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.issue = this.issueService.getIssue(id);

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        this.recipe = this.issueService.getRecipe(id);
        return Observable.of({});
      })
      .subscribe();
  }

}
