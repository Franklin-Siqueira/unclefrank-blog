// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const user = require("../../../models/people/user");

/**
 *
 * isEmailUnique
 *
 * Validate new e-mail address
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
exports.isEmailUnique = (req, res, next) => {
  //
  const { email } = req.body;
  user.findOne({ email }, (err, user) => {
    if (user) {
      // User e-amail found
      return res.status(400).json({
        error: "E-mail already in use! Please, try another one...",
      });
    } else if (err) {
      // Unknown error
      return res.status(400).json({
        error: "An error occurred! Please, try again later...",
      });
    }
    next();
  });
};
