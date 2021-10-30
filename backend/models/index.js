// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0
/**
 *
 * MongoDB Models required
 *
 */
const MessageFromAppForm = require('./messages/messageFromAppFormMD');
const MessageReply = require('./messages/messageReply');
const JobPosition = require('./posts/jobposition');
const Event = require('./agenda/events');
const Post = require('./posts/post');
const Category = require('./posts/postcategory');
const Prospect = require('./people/prospects');
const Schedule = require('./agenda/schedule');
const User = require('./people/user');
//
module.exports = {
  MessageFromAppForm,
  MessageReply,
  JobPosition,
  Event,
  Post,
  Category,
  Prospect,
  Schedule,
  User,
};
