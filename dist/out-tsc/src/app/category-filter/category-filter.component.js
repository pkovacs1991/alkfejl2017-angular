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
var category_service_1 = require("../services/category.service");
var CategoryFilterComponent = (function () {
    function CategoryFilterComponent(categoryService) {
        this.categoryService = categoryService;
        this.onChange = new core_1.EventEmitter();
    }
    CategoryFilterComponent.prototype.ngOnInit = function () {
        this.categories = this.categoryService.getCategories();
    };
    // onFilterChange(status: string) {
    //   this.selectedStatus = status;
    //   this.onChange.emit(status);
    // }
    CategoryFilterComponent.prototype.onFilterChange = function (category) {
        this.selectedCategory = category;
        this.onChange.emit(category);
    };
    return CategoryFilterComponent;
}());
__decorate([
    core_1.Input('category'),
    __metadata("design:type", String)
], CategoryFilterComponent.prototype, "selectedCategory", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CategoryFilterComponent.prototype, "onChange", void 0);
CategoryFilterComponent = __decorate([
    core_1.Component({
        selector: 'category-filter',
        templateUrl: './category-filter.component.html',
        styleUrls: ['./category-filter.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryFilterComponent);
exports.CategoryFilterComponent = CategoryFilterComponent;
//# sourceMappingURL=category-filter.component.js.map