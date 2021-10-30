// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");

/**
 * List Related Products Based on Category
 *
 * @param {*} req
 * @param {*} res
 */
exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  // _id: {$ne: req.product} in MongoDB: NOT EQUAL TO req.product _id
  Post.find({ _id: { $ne: req.post }, category: req.post.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({ error: "Product unavailable..." });
      }
      //
      res.json(posts);
    });
};
