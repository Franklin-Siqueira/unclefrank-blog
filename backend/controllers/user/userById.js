// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const User = require("../models/user");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} id
 */
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User not found..." });
    }
    //
    req.profile = user;
    next();
  });
};
