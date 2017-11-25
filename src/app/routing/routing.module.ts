import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from "../main-page/main-page.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "../recipe-form/recipe-form.component";
import { RecipeEditComponent } from "../recipe-edit/recipe-edit.component";
import {UserEditComponent} from "../user-edit/user-edit.component";

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
    component: RecipeListComponent,
  },
  {
    path: 'recipe/new',
    component: RecipeEditComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'recipe/:id/edit',
    component: RecipeEditComponent
  },
  {
    path: 'user/profile',
    component: UserEditComponent
  },
  {
    path: 'register',
    component: UserEditComponent
  },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
