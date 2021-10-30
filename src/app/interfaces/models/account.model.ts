// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Id } from './types.model';
import { User } from './user.model';

export class Account {
  constructor(
    public id: Id,
    users: User[] = []) { }
}
