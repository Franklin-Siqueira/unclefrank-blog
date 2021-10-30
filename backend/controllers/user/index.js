// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File: index.js
 *
 * Exports API's user related controllers
 *
 */
const { addOrderToUserHistory } = require('./addOrderToUserHistory');
const { list } = require('./list');
const { read } = require('./read');
const { shoppingHistory } = require('./shoppingHistory');
const { update } = require('./update');
const { userById } = require('./userById');
//
module.exports = {
  addOrderToUserHistory,
  list,
  read,
  shoppingHistory,
  update,
  userById
}
