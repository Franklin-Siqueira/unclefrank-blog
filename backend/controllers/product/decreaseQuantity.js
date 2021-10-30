// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../model/Post");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.decreaseQuantity = (req, res, next) => {
  let bulkOps = req.body.post.postLikes.map((item) => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });
  //
  Post.bulkWrite(bulkOps, {}, (error, postLikes) => {
    if (error) {
      return res.status(400).json({ error: "Couldn't Update Post..." });
    }
    next();
  });
};
