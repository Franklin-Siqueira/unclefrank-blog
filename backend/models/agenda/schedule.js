// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: schedule.js
 *
 * TODO: develop the idea, check standard patterns for customization
 *
 * visibilityLevel - Display level, based on user system's role
 *                Levels:
 *                        1 -> everyone can see;
 *                        2 -> employee's
 *                        3 -> manager's
 *
 */
// const User = require('../index');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const scheduleSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    visibilityLevel: Number,
    date: Date,
  },
  { timestamps: true }
);
// Export Mongoose model 'schedule' with 'scheduleSchema' and 'schedule' COLLECTION in Mongo Atlas
module.exports = mongoose.model("Schedule", scheduleSchema, "schedule");
