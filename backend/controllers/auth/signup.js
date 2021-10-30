// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const user = require("../../models/people/user");
const {isEmailUnique} = require("./validations/isEmailUnique");
const { errorHandler } = require("../../helpers/dbErrorHandler");

/**
 *
 * signup
 *
 * @param {*} req
 * @param {*} res
 */
exports.signup = (req, res) => {
  //
  isEmailUnique(req, res, next);
  const newUser = new user(req.body);
  //
  newUser.save((err, newUser) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    // Hide salt and hashed password
    newUser.salt = undefined;
    newUser.hashed_password = undefined;
    // Return newUser JSON data
    console.log(newUser);
    res.json({ newUser });
  });
};
