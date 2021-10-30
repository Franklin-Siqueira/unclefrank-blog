// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} id
 */
exports.productById = (req, res, next, id) => {
  Post.findById(id)
    .populate("category")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({ error: "Post unavailable..." });
      }
      //
      req.post = post;
      next(0);
    });
};
