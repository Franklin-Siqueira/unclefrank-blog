// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const { errorHandler } = require("../helpers/dbErrorHandler");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.shoppingHistory = (req, res) => {
  //
  Order.find({ user: req.profile._id })
    .populate("user", "_id name")
    .sort("-createdAt")
    .exec((error, orders) => {
      if (error) {
        return res.status(400).json({ error: errorHandler(error) });
      }
      res.json(orders);
    });
};
