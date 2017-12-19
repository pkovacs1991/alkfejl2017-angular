import { Injectable } from '@angular/core';
import {Comment} from "../models/comment";
import { Recipe } from "../models/recipe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommentService {

  comments: Comment[] = [
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
        recipeName: "almas pite",
        owner: {
          id: 1,
          username: "alma",
          email: "a@a.com",
          password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
          role: "ADMIN"
        },
        ingredients: "alma, liszt, cukor",
        description: "Mindenbele aztan a tepsibe bele!",
        category: {
          id: 1,
          name: "PASTA"
        }
      },
      comment: 'A legjobb almas pite valaha!',
    },

    {
      id: 2,
      user: {
        id: 3,
        username: "cseresznye",
        email: "c@c.com",
        password: 'f36b4825e5db2cf7dd2d2593b3f5c24c0311d8b2',
        role: "USER"
      },
      recipe: {
        id: 1,
        recipeName: "almas pite",
        owner: {
          id: 1,
          username: "alma",
          email: "a@a.com",
          password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
          role: "ADMIN"
        },
        ingredients: "alma, liszt, cukor",
        description: "Mindenbele aztan a tepsibe bele!",
        category: {
          id: 1,
          name: "PASTA"
        }
      },
      comment: "Ettem mar jobbat is..."
    },

    {
      id: 3,
      user: {
        id: 4,
        username: "dio",
        email: "d@d.com",
        password: '9c969ddf454079e3d439973bbab63ea6233e4087',
        role: "USER"
      },
      recipe: {
        id: 2,
        recipeName: "barackos pizza",
        owner: {
          id: 2,
          username: "barack",
          email: "b@b.com",
          password: '5cb138284d431abd6a053a56625ec088bfb88912',
          role: "USER"
        },
        ingredients: "barack, liszt cukor",
        description: "Mindenbele, megkeverjuk, aztan a tepsibe bele!",
        category: {
          id: 2,
          name: "PIZZA"
        }
      },
      comment: "5*!!!"
    },

    {
      id: 4,
      user: {
        id: 2,
        username: "barack",
        email: "b@b.com",
        password: '5cb138284d431abd6a053a56625ec088bfb88912',
        role: "USER"
      },
      recipe: {
        id: 4,
        recipeName: "dios lepeny",
        owner: {
          id: 4,
          username: "dio",
          email: "d@d.com",
          password: '9c969ddf454079e3d439973bbab63ea6233e4087',
          role: "USER"
        },
        ingredients: "dio, liszt, cukor",
        description: "Mindenbele aztan a tepsibe bele!",
        category: {
          id: 1,
          name: "PASTA"
        }
        },
      comment: "Anyukam levesenel semmi se finomabb!"
    },

    {
      id: 5,
      user: {
        id: 1,
        username: "alma",
        email: "a@a.com",
        password: '7e240de74fb1ed08fa08d38063f6a6a91462a815',
        role: "ADMIN"
      },
      recipe: {
        id: 2,
        recipeName: "barackos pizza",
        owner: {
          id: 2,
          username: "barack",
          email: "b@b.com",
          password: '5cb138284d431abd6a053a56625ec088bfb88912',
          role: "USER"
        },
        ingredients: "barack, liszt cukor",
        description: "Mindenbele, megkeverjuk, aztan a tepsibe bele!",
        category: {
          id: 2,
          name: "PIZZA"
        }
      },
      comment: "Kolaval elment"
    }
  ];

  constructor(
      private http: HttpClient

  ) { }

  getCommentsByRecipe(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/comments/recipe/${id}`);
  }

  getComment(id): Observable<Comment> {
    return this.http.get<Comment>(`api/comments/${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
      return this.http.post<Comment>(`api/comments`, comment);
  }

  updateComment(id: number, comment: Comment): Observable<any> {
      return this.http.put<any>(`api/comments/${id}`, comment);

  }

  deleteComment(id: number ): Observable<any>  {
      return this.http.delete<any>(`api/comments/${id}`);

}

}
