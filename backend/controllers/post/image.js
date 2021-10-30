// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.image = (req, res, next) => {
  if (req.post.image.data) {
    res.set("Content-Type", req.post.image.contentType);
    return res.send(req.post.image.data);
  }
  next();
};
