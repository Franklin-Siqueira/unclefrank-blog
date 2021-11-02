// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // private API_URL = `${config.apiUrl}/expense-categories`; // EXAMPLE
  private API = 'http://localhost:3001/postsFour';
  // Params
  allPosts?: Post[];
  PageNo!: number;
  SortOn!: string;
  // params = new HttpParams().set('page', this.PageNo).set('sort', this.SortOn);
  // private params = new HttpParams().set('page', '1').set('sort', 'postTitle');

  constructor(private httpService: HttpClient) {}

  // v.1
  getPosts(pageNumber: string, sortOn: string, postsPerPage: string): Observable<Post[]> {
    //
    let params = new HttpParams()
        .set('page', pageNumber)
        .set('sort', sortOn)
        .set('limit', postsPerPage);
    return this.httpService.get<Post[]>(this.API, { params });
  }

  // v.2
  getAllPosts() {
    const allPosts = () => {
      return this.httpService.get<Post[]>(this.API);
    };
    return allPosts;
  }

  postFromUser(newPost: Post) {
    return this.httpService.post<Post>(this.API, newPost);
  }
}
