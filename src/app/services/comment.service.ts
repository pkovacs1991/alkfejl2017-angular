import { Injectable } from '@angular/core';
import {Comment} from "../models/comment";
import { Recipe } from "../models/recipe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommentService {

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
