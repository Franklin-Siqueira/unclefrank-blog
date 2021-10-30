// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  // private API_URL = `${config.apiUrl}/expense-categories`; // EXAMPLE
  private API = 'http://localhost:3001/postsThree';
  allPosts?: Post[];

  constructor(private httpService: HttpClient) {}

  // v.1
  getPosts(): Observable<Post[]> {
    return this.httpService.get<Post[]>(this.API);
  }

  // v.2
  getAllPosts() {
    const allPosts = () => {
       return this.httpService.get<Post[]>(this.API);
      // return allPosts;
    }
    return allPosts;
  }

  postFromUser(newPost: Post) {
    return this.httpService.post<Post>(this.API, newPost);
  }
}
