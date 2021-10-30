// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: jobposition.js
 *
 * _id -> User who posted the job position
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const jobPositionSchema = new Schema(
  {
    _id: Number,
    user: {
      type: ObjectId,
      ref: "User",
    },
    job_title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
      index: true
    },
    job_description: {
      type: String,
      required: true,
    },
    job_salary: {
      type: Number,
      required: true,
    },
    job_address: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
  },
  { timestamps: true }
);
// Export Mongoose model 'jobposition' with 'jobPositionSchema' and 'jobposition' COLLECTION in Mongo Atlas
module.exports = mongoose.model("JobPosition", jobPositionSchema, "jobposition");
