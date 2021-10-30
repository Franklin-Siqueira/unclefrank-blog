// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const User = require("../models/user");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addOrderToUserHistory = (req, res, next) => {
  let history = [];
  // Push each order's items to user's history
  history.push({
    transaction_id: req.body.order.transaction_id,
    amount: req.body.order.amount,
    address: req.body.order.address,
  });
  // req.body.order.products.forEach((item) => {
  // 	history.push({
  // 					_id: item._id,
  // 					name: item.name,
  // 					description: item.description,
  // 					category: item.category,
  // 					quantity: item.count,
  // 					transaction_id: item.transaction_id,
  // 					// transaction_id: item.body.order.transaction_id,
  // 					amount: item.amount
  // 					// amount: req.body.order.amount
  // 	});
  // });
  //
  // Update User's purchase history
  /**
   *
   */
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { history: history } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "Couldn't Update User Purchase History...",
        });
      }
      next();
    }
  );
};
