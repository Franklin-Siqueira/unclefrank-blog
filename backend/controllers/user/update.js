// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const User = require("../models/user");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({ error: "Authorization required..." });
      }
      //
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};
