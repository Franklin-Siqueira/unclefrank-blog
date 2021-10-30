// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");

/**
 *
 * Query Parameters:
 *
 * If no parameters, all products are returned.
 * 1) by sell = /products?sortBy=sold&order=desc&limit=4
 * 2) by arrival = /products?sortBy=createdAt&order=desc&limit=4
 *
 * @param {*} req
 * @param {*} res
 */
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  //
  Post.find()
    .select("-image")
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({ error: "Post unavailable..." });
      }
      //
      res.json(posts);
    });
};
