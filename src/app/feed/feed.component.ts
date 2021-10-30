// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/posts/post.service';
import { Post } from './../interfaces/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  //
  postList?: Post[];
  newPostFromForm: Post = new Post;

  constructor(private listPostService: PostService, private newPostService: PostService) {

   }

  ngOnInit(): void {
    this.getPostsFromUser();
  }

  getPostsFromUser(){
    this.listPostService.getPosts().subscribe((postsData: Post[]) => {
      this.postList = postsData.sort();
    });
  }

  newPostFromUserForm(){
    this.newPostFromForm.id =  Date().toString() + 'qufoeufo-ewofhw-fr2';
    this.newPostFromForm.authorId = 'qufoeufo-ewofhw-fr22t-322t42!-24t-24';
    this.newPostFromForm.createdAt = new Date();
    return this.newPostService.postFromUser(this.newPostFromForm).subscribe((newPost: Post) => {
      this.newPostFromForm = newPost;
      location.assign('/feed');
    });
  }

}
