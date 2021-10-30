// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 */
exports.read = (req, res) => {
  req.post.image = undefined;
  return res.json(req.post);
};
