// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/posts/post.service';
import { Post } from './../../interfaces/models/post.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  //
  newPostFromForm: Post = new Post;

  constructor( private newPostService: PostService) {
  }
  ngOnInit(): void {
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
