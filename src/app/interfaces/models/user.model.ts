// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Account } from './account.model';
import { Role } from './types.model';

export class User {
  public id?: string;
  public accountId?: string;
  public account?: Account;
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public password?: string;
  public role?: Role;
  public confirmed?: boolean;
  public tfa?: boolean;

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
