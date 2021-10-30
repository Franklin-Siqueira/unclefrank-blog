// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: index.js
 *
 */

const { isAdmin } = require('./validations/isAdmin');
const { isAuth } = require('./validations/isAuth');
const { isEmailUnique } = require('./validations/isEmailUnique');
const { isSigned } = require('./validations/isSigned');
const { signin } = require('./signin');
const { signout } = require('./signout');
const { signup } = require('./signup');
//
module.exports = {
  isAdmin,
  isAuth,
  isEmailUnique,
  isSigned,
  signin,
  signout,
  signup,
};
