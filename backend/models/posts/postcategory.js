// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/*jshint esversion: 6 */
// MongoDB Category of Products Schema
const mongoose = require("mongoose");
//
const categorySchema = new mongoose.Schema({
  	name: {
  		type: String,
  		trim: true,
  		required: true,
  		maxlength: 32,
      unique: true
  	},
	},
	{ timestamps: true }
);
//
module.exports = mongoose.model("Category", categorySchema);
