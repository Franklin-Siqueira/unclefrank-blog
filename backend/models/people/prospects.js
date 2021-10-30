// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: prospect.js
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const prospectSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 64,
      index: true
    },
    first_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      index: true
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      index: true
    },
    creation_date: {
      type: Date,
      required: false,
      index: true,
    },
    ip_referrer: {
      type: String,
      trim: true,
    },
    user_agent: {
      type: String,
      trim: true
    },
    role: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);
// Export Mongoose model 'prospect' with 'prospectSchema' and 'prospect' COLLECTION in Mongo Atlas
module.exports = mongoose.model("Prospect", prospectSchema, "prospect");
