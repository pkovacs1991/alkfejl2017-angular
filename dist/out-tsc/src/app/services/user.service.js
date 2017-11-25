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
var UserService = (function () {
    function UserService() {
        this.users = [
            {
                id: 1,
                username: 'alma',
                email: 'a@a.com',
                password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                role: 'ADMIN'
            },
            {
                id: 2,
                username: 'barack',
                email: 'b@b.com',
                password: '5cb138284d431abd6a053a56625ec088bfb88912',
                role: 'USER'
            },
            {
                id: 3,
                username: 'cseresznye',
                email: 'c@c.com',
                password: 'f36b4825e5db2cf7dd2d2593b3f5c24c0311d8b2',
                role: 'USER'
            },
            {
                id: 4,
                username: 'dio',
                email: 'd@d.com',
                password: '9c969ddf454079e3d439973bbab63ea6233e4087',
                role: 'USER'
            }
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getUser = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    UserService.prototype.getFavouriteRecipes = function () {
        var loggedInuser = this.users.find(function (user) { return user.id === 1; });
        return loggedInuser.favoriteRecipes;
    };
    UserService.prototype.getMyRecipes = function () {
        var loggedInuser = this.users.find(function (user) { return user.id === 1; });
        return loggedInuser.recipes;
    };
    UserService.prototype.addUser = function (user) {
        console.log(user);
        var usr = Object.assign(user, {
            id: this.users.length + 1,
            role: 'USER'
        });
        this.users.push(usr);
    };
    UserService.prototype.updateUser = function (id, user) {
        console.log(user);
        var rec = this.getUser(id);
        rec.username = user.username;
        rec.email = user.email;
        rec.password = user.password;
        rec.role = user.role;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map