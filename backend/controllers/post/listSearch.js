// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");
const { errorHandler } = require("../../helpers/dbErrorHandler");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.listSearch = (req, res) => {
  // Creates query object in order to hold "seach and category values"
  // required in Search.js
  const query = {};
  // Assign search value to query.name
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };
    // Assigns category value to query.Category
    if (req.query.category && req.query.category != "all") {
      query.category = req.query.category;
    }
    // Find the product based on query object with matching properties
    // (search and category)
    Post.find(query, (err, posts) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      //
      res.json(posts);
    }).select("-image");
  }
};
