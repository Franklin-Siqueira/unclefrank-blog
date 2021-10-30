// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * isAdmin
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
exports.isAdmin = (req, res, next) => {
  //let user = req.profile && req.auth && req.profile._id == req.auth._id;
  // Regular user -> role = 0
  // Administrator -> role = 1
  if (req.profile.role === 0) {
    return res
      .status(403)
      .json({ error: "Sorry! Access denied (Administrators' only area)." });
  }
  next();
};

