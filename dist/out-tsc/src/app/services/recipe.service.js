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
//import { HttpClient, HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders(
//     {'Content-Type': 'application/json'})
// }
var RecipeService = (function () {
    function RecipeService() {
        this.recipes = [
            {
                id: 1,
                recipeName: 'almas pite',
                owner: {
                    id: 1,
                    username: 'alma',
                    email: 'a@a.com',
                    password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                    role: 'ADMIN'
                },
                ingredients: 'alma, liszt, cukor',
                description: 'Mindenbele aztan a tepsibe bele!',
                favouriteUsers: [],
                category: {
                    id: 1,
                    name: 'PASTA'
                },
                comments: [
                    {
                        id: 1,
                        user: {
                            id: 1,
                            username: 'alma',
                            email: 'a@a.com',
                            password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                            role: 'ADMIN'
                        },
                        recipe: {
                            id: 1,
                            recipeName: 'almas pite',
                            owner: {
                                id: 1,
                                username: 'alma',
                                email: 'a@a.com',
                                password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                                role: 'ADMIN'
                            },
                            ingredients: 'alma, liszt, cukor',
                            description: 'Mindenbele aztan a tepsibe bele!',
                            favouriteUsers: [],
                            category: {
                                id: 1,
                                name: 'PASTA'
                            }
                        },
                        comment: 'A legjobb almas pite valaha!'
                    },
                    {
                        id: 2,
                        user: {
                            id: 3,
                            username: 'cseresznye',
                            email: 'c@c.com',
                            password: 'f36b4825e5db2cf7dd2d2593b3f5c24c0311d8b2',
                            role: 'USER'
                        },
                        recipe: {
                            id: 1,
                            recipeName: 'almas pite',
                            owner: {
                                id: 1,
                                username: 'alma',
                                email: 'a@a.com',
                                password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                                role: 'ADMIN'
                            },
                            ingredients: 'alma, liszt, cukor',
                            description: 'Mindenbele aztan a tepsibe bele!',
                            favouriteUsers: [],
                            category: {
                                id: 1,
                                name: 'PASTA'
                            }
                        },
                        comment: 'Ettem mar jobbat is...'
                    }
                ]
            },
            {
                id: 2,
                recipeName: 'barackos pizza',
                owner: {
                    id: 2,
                    username: 'barack',
                    email: 'b@b.com',
                    password: '5cb138284d431abd6a053a56625ec088bfb88912',
                    role: 'USER'
                },
                ingredients: 'barack, liszt cukor',
                description: 'Mindenbele, megkeverjuk, aztan a tepsibe bele!',
                favouriteUsers: [],
                category: {
                    id: 2,
                    name: 'PIZZA'
                },
                comments: [
                    {
                        id: 3,
                        user: {
                            id: 4,
                            username: 'dio',
                            email: 'd@d.com',
                            password: '9c969ddf454079e3d439973bbab63ea6233e4087',
                            role: 'USER'
                        },
                        recipe: {
                            id: 2,
                            recipeName: 'barackos pizza',
                            owner: {
                                id: 2,
                                username: 'barack',
                                email: 'b@b.com',
                                password: '5cb138284d431abd6a053a56625ec088bfb88912',
                                role: 'USER'
                            },
                            ingredients: 'barack, liszt cukor',
                            description: 'Mindenbele, megkeverjuk, aztan a tepsibe bele!',
                            favouriteUsers: [],
                            category: {
                                id: 2,
                                name: 'PIZZA'
                            }
                        },
                        comment: '5*!!!'
                    },
                    {
                        id: 5,
                        user: {
                            id: 1,
                            username: 'alma',
                            email: 'a@a.com',
                            password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
                            role: 'ADMIN'
                        },
                        recipe: {
                            id: 2,
                            recipeName: 'barackos pizza',
                            owner: {
                                id: 2,
                                username: 'barack',
                                email: 'b@b.com',
                                password: '5cb138284d431abd6a053a56625ec088bfb88912',
                                role: 'USER'
                            },
                            ingredients: 'barack, liszt cukor',
                            description: 'Mindenbele, megkeverjuk, aztan a tepsibe bele!',
                            favouriteUsers: [],
                            category: {
                                id: 2,
                                name: 'PIZZA'
                            }
                        },
                        comment: 'Kolaval elment'
                    }
                ]
            },
            {
                id: 3,
                recipeName: 'cseresznyeleves',
                owner: {
                    id: 3,
                    username: 'cseresznye',
                    email: 'c@c.com',
                    password: 'f36b4825e5db2cf7dd2d2593b3f5c24c0311d8b2',
                    role: 'USER'
                },
                ingredients: 'cseresznye, 1 l viz, cukor, so',
                description: 'Egy labosba beletesszuk a vizet, hozzaadjuk a tobbi hozzavalot, aztan forralasig csinaljuk',
                favouriteUsers: [],
                category: {
                    id: 3,
                    name: 'SOUP'
                },
                comments: []
            },
            {
                id: 4,
                recipeName: 'dios lepeny',
                owner: {
                    id: 4,
                    username: 'dio',
                    email: 'd@d.com',
                    password: '9c969ddf454079e3d439973bbab63ea6233e4087',
                    role: 'USER'
                },
                ingredients: 'dio, liszt, cukor',
                description: 'Mindenbele aztan a tepsibe bele!',
                favouriteUsers: [],
                category: {
                    id: 1,
                    name: 'PASTA'
                },
                comments: [
                    {
                        id: 4,
                        user: {
                            id: 2,
                            username: 'barack',
                            email: 'b@b.com',
                            password: '5cb138284d431abd6a053a56625ec088bfb88912',
                            role: 'USER'
                        },
                        recipe: {
                            id: 4,
                            recipeName: 'dios lepeny',
                            owner: {
                                id: 4,
                                username: 'dio',
                                email: 'd@d.com',
                                password: '9c969ddf454079e3d439973bbab63ea6233e4087',
                                role: 'USER'
                            },
                            ingredients: 'dio, liszt, cukor',
                            description: 'Mindenbele aztan a tepsibe bele!',
                            favouriteUsers: [],
                            category: {
                                id: 1,
                                name: 'PASTA'
                            }
                        },
                        comment: 'Anyukam levesenel semmi se finomabb!'
                    }
                ]
            }
        ];
    }
    // getRecipes(): Promise<Recipe[]> {
    //   return this.http.get<Recipe[]>('api/user').toPromise();
    // }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes.find(function (recipe) { return recipe.id === id; });
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        console.log(recipe);
        var rec = Object.assign(recipe, {
            id: this.recipes.length + 1,
            user: 'Anonymus',
            category: 'PASTA'
        });
        this.recipes.push(rec);
    };
    RecipeService.prototype.updateRecipe = function (id, recipe) {
        console.log(recipe);
        var rec = this.getRecipe(id);
        rec.recipeName = recipe.recipeName;
        rec.ingredients = recipe.ingredients;
        rec.description = recipe.description;
    };
    return RecipeService;
}());
RecipeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map