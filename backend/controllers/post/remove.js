// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const { errorHandler } = require("../../helpers/dbErrorHandler");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.remove = (req, res) => {
  let post = req.post;
  post.remove((err, deletedPost) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    // Try with product name or id...
    //res.json({deletedProduct.name, message: "Product deleted..."});
    res.json({ message: "Post deleted..." });
  });
};
