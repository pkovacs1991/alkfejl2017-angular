import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from "../main-page/main-page.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "../recipe-form/recipe-form.component";
import { RecipeEditComponent } from "../recipe-edit/recipe-edit.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {RecipeAllComponent} from "../recipe-all/recipe-all.component";
import {RecipeFavouriteComponent} from "../recipe-favourite/recipe-favourite.component";
import {RecipeMyComponent} from "../recipe-my/recipe-my.component";

import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../guards/AuthGuard";

import { CategoryListComponent } from "../category-list/category-list.component";
import { CategoryEditComponent } from "../category-edit/category-edit.component";
import {AdminGuard} from "../guards/AdminGuard";
import { UserListComponent } from "../user-list/user-list.component";


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
    component: RecipeAllComponent,
  },
  {
      path: 'recipe/favourite',
      component: RecipeFavouriteComponent,
      canActivate: [AuthGuard]
},
  {
      path: 'recipe/my',
      component: RecipeMyComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'recipe/new',
    component: RecipeEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe/:id/edit',
    component: RecipeEditComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'recipe/:id/delete',
      component: RecipeEditComponent,
      canActivate: [AuthGuard]
  },
  {
        path: 'register',
        component: UserEditComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'category/all',
    component: CategoryListComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'category/new',
    component: CategoryEditComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'category/:id/edit',
    component: CategoryEditComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'user/all',
    component: UserListComponent
  },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
