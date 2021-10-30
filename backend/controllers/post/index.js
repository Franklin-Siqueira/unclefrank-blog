// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File: post.js
 *
 * Exports API's post related controllers
 *
 */

const { image } = require('./image');
const { listBySearch } = require('./listBySearch');
const { listCategories } = require('./listCategories');
const { listSearch } = require('./listSearch');
const { read } = require('./read');
const { remove } = require('./remove');
const { postPaginator } = require('./postPaginator');
//
module.exports = {
  image,
  listBySearch,
  listCategories,
  listSearch,
  read,
  remove,
  postPaginator
}
