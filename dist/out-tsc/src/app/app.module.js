"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var routing_module_1 = require("./routing/routing.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var recipe_service_1 = require("./services/recipe.service");
var auth_service_1 = require("./services/auth.service");
var app_component_1 = require("./app.component");
var main_page_component_1 = require("./main-page/main-page.component");
var recipe_list_component_1 = require("./recipe-list/recipe-list.component");
var recipe_form_component_1 = require("./recipe-form/recipe-form.component");
var recipe_detail_component_1 = require("./recipe-detail/recipe-detail.component");
var category_filter_component_1 = require("./category-filter/category-filter.component");
var recipe_edit_component_1 = require("./recipe-edit/recipe-edit.component");
var user_form_component_1 = require("./user-form/user-form.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            main_page_component_1.MainPageComponent,
            recipe_list_component_1.RecipeListComponent,
            recipe_form_component_1.RecipeFormComponent,
            recipe_detail_component_1.RecipeDetailComponent,
            category_filter_component_1.CategoryFilterComponent,
            recipe_edit_component_1.RecipeEditComponent,
            user_form_component_1.UserFormComponent,
            user_edit_component_1.UserEditComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MatToolbarModule, material_1.MatButtonModule,
            material_1.MatIconModule, material_1.MatMenuModule,
            material_1.MatButtonToggleModule,
            routing_module_1.RoutingModule,
            forms_1.FormsModule,
            http_1.HttpClientModule
        ],
        providers: [recipe_service_1.RecipeService, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map