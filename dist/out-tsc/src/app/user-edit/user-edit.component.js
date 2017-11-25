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
var user_1 = require("../models/user");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var UserEditComponent = (function () {
    function UserEditComponent(route, userService, location) {
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    UserEditComponent.prototype.onFormSubmit = function (user) {
        console.log(user);
        if (user.id > 0) {
            this.userService.updateUser(user.id, user);
        }
        else {
            this.userService.addUser(user);
        }
        this.location.back();
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    core_1.Component({
        selector: 'user-edit',
        templateUrl: './user-edit.component.html',
        styleUrls: ['./user-edit.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_service_1.UserService,
        common_1.Location])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map