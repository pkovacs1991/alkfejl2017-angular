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
var recipe_service_1 = require("../services/recipe.service");
var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
        this.selectedCategory = '';
    }
    RecipeListComponent.prototype.ngOnChanges = function () {
        this.favourites = this.recipeService.getFavourites();
        this.filterRecipes();
    };
    RecipeListComponent.prototype.onFilterChange = function (category) {
        this.selectedCategory = category;
        this.filterRecipes();
    };
    RecipeListComponent.prototype.filterRecipes = function () {
        var _this = this;
        this.filteredRecipes = this.selectedCategory === ''
            ? this.recipes
            : this.recipes.filter(function (recipe) { return recipe.category.name === _this.selectedCategory; });
    };
    RecipeListComponent.prototype.deleteRecipe = function (id) {
        console.log(id);
        this.recipeService.deleteRecipe(id);
    };
    RecipeListComponent.prototype.addFavouriteRecipe = function (id) {
        this.recipeService.addToFavourite(id);
        this.favourites = this.recipeService.getFavourites();
    };
    RecipeListComponent.prototype.removeFavouriteRecipe = function (id) {
        this.recipeService.removeFromFavourite(id);
        this.favourites = this.recipeService.getFavourites();
    };
    RecipeListComponent.prototype.isFavourite = function (id) {
        var ret = false;
        for (var i = 0; i < this.favourites.length; i++) {
            if (this.favourites[i].id === id) {
                ret = true;
            }
        }
        return ret;
    };
    return RecipeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RecipeListComponent.prototype, "recipes", void 0);
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    }),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map