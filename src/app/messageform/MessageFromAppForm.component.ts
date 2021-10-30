// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';
import { MessageFromAppFormService } from '../services/messageform/MessageFromAppFormService.service';
import { MessageFromAppFormMD } from '../interfaces/models/MessageFromAppFormMD.model';

/**
 *
 * Contact component featuring presentation and sending e-mail to prospects
 *
 */

@Component({
  selector: 'app-contact',
  templateUrl: './MessageFromAppForm.component.html',
  styleUrls: ['./MessageFromAppForm.component.scss'],
})
export class MessageFromAppFormComponent implements OnInit {
  newMessageFromForm: MessageFromAppFormMD = new MessageFromAppFormMD();
  /*
  public id!: number; // OK
  public confirm_email!: number; // OK
  public confirm_reply!: number; // OK
  public sender_name!: string; // OK
  public sender_email!: string; // OK
  public sender_subject!: string; // OK
  public sender_message!: string; // OK
  public sender_referrer!: string; // OK
  public createdAt!: Date; // OK
  public updatedAt!: Date; // OK
*/

  constructor(private newMessageService: MessageFromAppFormService) {}

  ngOnInit(): void {}
  /*
  newPostFromUserForm(){
    this.newPostFromForm.id =  Date().toString() + 'qufoeufo-ewofhw-fr2';
    this.newPostFromForm.userId = 'qufoeufo-ewofhw-fr22t-322t42!-24t-24';
    this.newPostFromForm.postTimeStamp = new Date();
    return this.newPostService.postFromUser(this.newPostFromForm).subscribe((newPost: Post) => {
      this.newPostFromForm = newPost;
      location.assign('/feed');
    });
  }
*/

  newMessageFromUserForm() {
    // var dateToSeconds = new Date();
    // this.newMessageFromForm.createdAt = new Date();
    // this.newMessageFromForm.updatedAt = new Date();
    this.newMessageFromForm.sender_referrer = '';
    this.newMessageFromForm.sender_subject = this.newMessageFromForm.sender_name +
    "'s message from the UncleFrank's APP";
    this.newMessageFromForm.confirm_reply = 0; // 0 - false | 1 - true
    this.newMessageFromForm.confirm_email = 0; // 0 - false | 1 - true
    // this.newMessageFromForm.id = this.newMessageFromForm.createdAt.getTime();
    return this.newMessageService.messageFromUser(this.newMessageFromForm).subscribe((newContactMessage: MessageFromAppFormMD) => {
      this.newMessageFromForm = newContactMessage;
      location.assign('/');
    });
  }
}
