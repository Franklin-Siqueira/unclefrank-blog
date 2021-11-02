// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/posts/post.service';
import { NotificationService } from '../../services/notifications/notification.service';
//
import { Post } from './../../interfaces/models/post.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  //
  newPostFromForm: Post = new Post;

  constructor( private newPostService: PostService, private notifyNewPost: NotificationService) {
  }

  ngOnInit(): void {
  }

  newPostFromUserForm(){
    // console.log(this.newPostFromForm.postTitle); // Testing...
    // this.newPostFromForm.id = { $oid: Date().toString() + 'qufoeufo-ewofhw-fr2' }
    // this.newPostFromForm.id = { $oid: this.generateGuid() }
    this.newPostFromForm.authorId = { $oid: this.generateGuid() + Date().toString()}
    this.newPostFromForm.postCategory = { $oid: this.generateGuid() + Date().toString() + Date().toString()}
    this.newPostFromForm.createdAt = { $date: Date().toString() }
    this.newPostFromForm.updatedAt = { $date: Date().toString() }
    this.newPostFromForm.postedAtOrScheduleTo = { $date: Date().toString() }
    return this.newPostService.postFromUser(this.newPostFromForm).subscribe((newPost: Post) => {
      this.newPostFromForm = newPost;
      this.notifyNewPost.notifyPostAddition();
      location.assign('/feed');
      // this.newPostFromForm.reset()
    });
  }

  generateGuid(): string {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
      var randomNumber = Math.random() * 16 | 0,
        returnedValue = character == 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
      return returnedValue.toString(16);
    });
  }

}
