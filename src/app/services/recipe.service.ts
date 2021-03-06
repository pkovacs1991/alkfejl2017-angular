import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { User } from "../models/user";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class RecipeService {
    favourites: Recipe[] = [
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
            category: {
                id: 1,
                name: 'PASTA'
            }
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
            category: {
                id: 3,
                name: 'SOUP'
            }
        }
    ];

    recipes: Recipe[] = [
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

    
    myRecipes: Recipe[] = [
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
            category: {
                id: 1,
                name: 'PASTA'
            }
        }
    ];

  constructor(
    private http: HttpClient
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('api/recipes');
  }


  getFavourites(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>('api/recipes/favourites');
  }

  getMyRecipes(): Observable<Recipe[]> {
   return this.http.get<Recipe[]>('api/recipes/my');
 }


  getRecipe(id): Observable<Recipe> {
      return this.http.get<Recipe>(`api/recipes/${id}`);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
      return this.http.post<Recipe>(`api/recipes`, recipe);
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
      return this.http.put<Recipe>(`api/recipes/${id}`, recipe);
  }

  deleteRecipe(id: number ): Observable<any> {
      return this.http.delete<any>(`api/recipes/${id}`);
  }

  addToFavourite(id: number ): Observable<any> {
      return this.http.post<any>(`api/recipes/favourites/${id}`, {});
  }

    removeFromFavourite(id: number ): Observable<any> {
        return this.http.delete<any>(`api/recipes/favourites/${id}`, {});

  }
}
