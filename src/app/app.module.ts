import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
          MatFormFieldModule, MatInputModule, MatSelectModule,
          MatButtonToggleModule
} from '@angular/material';

import { RecipeService } from './services/recipe.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {CategoryService} from "./services/category.service";
import { RecipeFavouriteComponent } from './recipe-favourite/recipe-favourite.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { RecipeMyComponent } from './recipe-my/recipe-my.component';
import {UserService} from "./services/user.service";
import {CommentService} from "./services/comment.service";

import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guards/AuthGuard";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';

import {AdminGuard} from "./guards/AdminGuard";


import { UserListComponent } from './user-list/user-list.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    CategoryFilterComponent,
    RecipeEditComponent,
    UserFormComponent,
    UserEditComponent,
    RecipeFavouriteComponent,
    RecipeAllComponent,
    RecipeMyComponent,
    LoginComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryFormComponent,
    UserListComponent,
    CommentEditComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonToggleModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecipeService, AuthService, CategoryService, UserService, CommentService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
