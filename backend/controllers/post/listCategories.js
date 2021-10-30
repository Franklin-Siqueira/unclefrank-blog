// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");

/**
 *  listCategories
 *
 * @param {*} req
 * @param {*} res
 */
exports.listCategories = (req, res) => {
  // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  Post.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({ error: "Unavailable categories..." });
    }
    //
    res.json(categories);
  });
};
