// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * isAuth
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({ error: "Access denied!" });
  }
  next();
};
