// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * Api.js
 *
 *
 *
 */

const express = require("express");
const router = express.Router();
//
// Swagger ->
var cssOptions = {
  customCss: `
  .topbar-wrapper img {
    content:url(https://img.icons8.com/doodle/2x/-freelancefirm.png);
    width:50px;
    height:auto;
  }
  .swagger-ui .topbar {
    background-color: #000000;
    border-bottom: 10px solid #5dc6d1;
  }`,
  customSiteTitle: "UncleFrank-Blog | APIs",
};
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = swaggerJsdoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "UncleFrank-Blog | Swagger API Documentation Sample",
      version: "1.0.0",
      description:
        "A sample project to understand how it is to document an Express API. \n Use Node | Express | MongoDB | Mongoose",
    },
  },
  swagger: "2.0",
  apis: [
    "api.js",
    "./controllers/emailmessage/messageFromAppForm.js",
    "./controllers/emailmessage/messageReply.js",
  ],
});
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, cssOptions));
// Swagger <-
/*
const User = require("../models/user");
const Post = require("../models/events");
*/
// Retrieve controllers
const {
  signin,
  signup,
  signout,
  isAuth,
  isAdmin,
  requireSignin,
  isEmailUnique,
  isSigned,
} = require("../controllers/auth");
const {
  messageFromAppForm,
  messageReplyForm,
  updateContact,
  mailContacts,
} = require("../controllers/emailmessage");
/*
// const { updateContact } = require("../controllers/contacts/updateContact");
// const { mailContacts } = require("../controllers/contacts/mailContacts");
//
*/
const mongoose = require("mongoose");
//
mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.error("An error occurred...", err);
    } else {
      console.log("Wow!!! Connected to Mongo Atlas...");
    }
  }
);
//
router.get("/", (req, res) => {
  res.send("Response from API route...");
});

// Signin, signup and signout endpoints"
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

// From "../controllers/emailmessage/messageFromAppForm" and "../controllers/emailmessage/messageReplyForm"

/**
 * @swagger
 * /message":
 *   post:
 *     description: Send message from admin Dashboard
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/message", messageFromAppForm);

/**
 * @swagger
 * /message-reply":
 *   post:
 *     description: Send message from admin Dashboard
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/message-reply", messageReplyForm);

// From "../controllers/mailcontacts"
// router.put("/admin/contactupdate", updateContact);
// router.get("/admin/mailcontacts", mailContacts);

// Admin (GET)
// router.get("/users", list);
// router.get("/users/:userId", userById);

// Admin (POST)
// router.post("/admin/import", importCsv);

// From "../controllers/event"
// router.post("/event/new/:userId", requireSignin, isAuth, isAdmin, create);

// router.post('/event', (req, res) => {
//   let eventData = req.body;
//   let newEvent = new Event(eventData);
//   //
//   newEvent.save((error, registeredEvent) => {
//     if (error){
//       console.log(error);
//     } else {
//       res.status(200).send(registeredEvent);
//     }
//   });
// });
//
/*
router.get("/event", (req, res) => {
  let eventData = req.body;
  let newEvent = new Event(eventData);
  //
  newEvent.save((error, registeredEvent) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredEvent);
    }
  });
});
*/
//
module.exports = router;
