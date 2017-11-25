"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_page_component_1 = require("../main-page/main-page.component");
var recipe_list_component_1 = require("../recipe-list/recipe-list.component");
var recipe_detail_component_1 = require("../recipe-detail/recipe-detail.component");
var recipe_edit_component_1 = require("../recipe-edit/recipe-edit.component");
var user_edit_component_1 = require("../user-edit/user-edit.component");
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: main_page_component_1.MainPageComponent
    },
    {
        path: 'recipe/all',
        component: recipe_list_component_1.RecipeListComponent,
    },
    {
        path: 'recipe/new',
        component: recipe_edit_component_1.RecipeEditComponent
    },
    {
        path: 'recipe/:id',
        component: recipe_detail_component_1.RecipeDetailComponent
    },
    {
        path: 'recipe/:id/edit',
        component: recipe_edit_component_1.RecipeEditComponent
    },
    {
        path: 'user/profile',
        component: user_edit_component_1.UserEditComponent
    },
    {
        path: 'register',
        component: user_edit_component_1.UserEditComponent
    },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        declarations: []
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=routing.module.js.map