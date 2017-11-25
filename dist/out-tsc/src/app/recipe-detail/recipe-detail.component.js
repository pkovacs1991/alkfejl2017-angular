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
var rxjs_1 = require("rxjs");
var recipe_1 = require("../models/recipe");
var recipe_service_1 = require("../services/recipe.service");
require("rxjs/add/operator/switchMap");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(route, recipeService) {
        this.route = route;
        this.recipeService = recipeService;
        this.recipe = new recipe_1.Recipe();
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        // const id = +this.route.snapshot.paramMap.get('id');
        // this.user = this.recipeService.getUser(id);
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var id = +params.get('id');
            _this.recipe = _this.recipeService.getRecipe(id);
            return rxjs_1.Observable.of({});
        })
            .subscribe();
    };
    return RecipeDetailComponent;
}());
RecipeDetailComponent = __decorate([
    core_1.Component({
        selector: 'recipe-detail',
        templateUrl: './recipe-detail.component.html',
        styleUrls: ['./recipe-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        recipe_service_1.RecipeService])
], RecipeDetailComponent);
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map