// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //
  public postAddedObservable = new Subject();

	constructor(){}

	notifyPostAddition(){
		this.postAddedObservable.next();
	}

}
