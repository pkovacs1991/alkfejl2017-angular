import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
          MatFormFieldModule, MatInputModule,
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
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    MatButtonToggleModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecipeService, AuthService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
