import { Injectable } from '@angular/core';
import { Comment } from "../models/comment";
import { Recipe } from "../models/recipe";

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

  constructor() {}

  getCommentsByRecipe(id: number){
    return this.comments.filter(comment => comment.recipe.id === id);
  }

  getComment(id) {
    return this.comments.find(comment => comment.id === id);
  }

  addComment(comment: Comment, rec: Recipe) {
    const com = Object.assign(comment, {
      id: this.comments.length+1,
      user: JSON.parse(localStorage.getItem('user')),
      recipe: rec
    });
    this.comments.push(com);
  }

  updateComment(id: number, comment: Comment) {
    const com: Comment = this.getComment(id);
    com.comment = comment.comment;
  }

  deleteComment(id: number ) {
    console.log(id);
    const delComment: Comment = this.comments.find(comment => comment.id === id);
    console.log(delComment);
    const index = this.comments.indexOf(delComment);
    if (index > -1) {
        this.comments.splice(index, 1);
    }

}

}
