// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { MessageFromAppFormMD } from 'src/app/interfaces/models/MessageFromAppFormMD.model';

@Injectable({
  providedIn: 'root'
})
export class MessageFromAppFormService {
  // private API_URL = `${config.apiUrl}/expense-categories`; // EXAMPLE
  private API = 'http://localhost:3000/api/message';

  constructor(private httpService: HttpClient) {}

  messageFromUser(newMessage: MessageFromAppFormMD) {
    return this.httpService.post<MessageFromAppFormMD>(this.API, newMessage);
  }
}
