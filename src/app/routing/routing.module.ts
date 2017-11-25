import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { MainPageComponent } from "../main-page/main-page.component";
import { IssueListComponent } from "../recipe-list/recipe-list.component";
import { IssueDetailComponent } from "../recipe-detail/recipe-detail.component";
import { IssueFormComponent } from "../recipe-form/recipe-form.component";
import { IssueEditComponent } from "../recipe-edit/recipe-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },
  {
    path: 'recipe/all',
    component: IssueListComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: IssueDetailComponent    
    //   }
    // ]
  },
  {
    path: 'recipe/new',
    component: IssueEditComponent
  },
  {
    path: 'recipe/:id',
    component: IssueDetailComponent
  },
  {
    path: 'recipe/:id/edit',
    component: IssueEditComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
