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
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.model = null;
        this.onSubmit = new core_1.EventEmitter();
        this.model = Object.assign({}, this.user);
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.submit = function (form) {
        if (!form.valid) {
            return;
        }
        this.onSubmit.emit(this.model);
    };
    return UserFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserFormComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "onSubmit", void 0);
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.css']
    }),
    __metadata("design:paramtypes", [])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map