"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var recipe_1 = require("../models/recipe");
var recipe_service_1 = require("../services/recipe.service");
require("rxjs/add/operator/switchMap");
var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeService, location) {
        this.route = route;
        this.recipeService = recipeService;
        this.location = location;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var id = params.get('id');
            _this.recipe = id !== null
                ? _this.recipeService.getRecipe(+id)
                : new recipe_1.Recipe();
            console.log(_this.recipe);
            return rxjs_1.Observable.of({});
        })
            .subscribe();
    };
    RecipeEditComponent.prototype.onFormSubmit = function (recipe) {
        console.log(recipe);
        if (recipe.id > 0) {
            console.log('form', recipe);
            this.recipeService.updateRecipe(recipe.id, recipe);
            console.log('update');
        }
        else {
            this.recipeService.addRecipe(recipe);
        }
        this.location.back();
    };
    return RecipeEditComponent;
}());
RecipeEditComponent = __decorate([
    core_1.Component({
        selector: 'recipe-edit',
        templateUrl: './recipe-edit.component.html',
        styleUrls: ['./recipe-edit.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        recipe_service_1.RecipeService,
        common_1.Location])
], RecipeEditComponent);
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map