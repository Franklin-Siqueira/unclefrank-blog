// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//
// import { Post } from '../../../interfaces/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class GetPostTestService {
  // private API_URL = `${config.apiUrl}/expense-categories`; // EXAMPLE
  private API = 'http://localhost:3001/postsThree';
  // httpClient: HttpClient;
  posts: any;
  //

  constructor(private httpClient: HttpClient) {}

  getAllPosts(pageSize: number, currentPage: number) {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;
    return this.httpClient
      .get<{ message: string; posts: any; maxCount: number }>(
        'API' + queryParams
      )
      .pipe(
        map((postData) => {
          return { post: postData.posts, maxCount: postData.maxCount };
        })
      )
      .subscribe((res) => {
        this.posts = res.post;
      });
  }
}
