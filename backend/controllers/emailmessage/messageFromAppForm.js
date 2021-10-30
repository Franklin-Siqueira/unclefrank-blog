// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: contact.js
 *
 * Remarks: Send e-mail to a destination using Nodemailer,
 *          then save data to DB
 */
// NODEMAILER
const nodemailer = require("nodemailer");
//
const MessageFromAppForm = require("../../models/messages/messageFromAppFormMD");
const { errorHandler } = require("../../helpers/dbErrorHandler");
// ******************
// CONTACT FORM LOGIC
// ******************
/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.messageFromAppForm = (req, res) => {
  // Swagger
  /**
   * @swagger
   * tags:
   *   name: Messages API
   *   description: API to handle Messages from app frontend resources.
   */

  /**
   * @swagger
   *  /api/message/:
   *    post:
   *      summary: Send a message constructed in frontend method - MessageFromAppForm() -> MessageFromAppFormService().
   *      tags: [Message APIs]
   *      parameters:
   *      - in: body
   *        name: sender_name
   *        schema:
   *          type: String
   *        required: true
   *        description: Sender name
   *      - in: body
   *        name: sender_email
   *        schema:
   *          type: String
   *        required: true
   *        description: Sender e-mail
   *      responses:
   *        "200":
   *          description: Message sent to admin and saved into Mongo Atlas document.
   */

  /**
   * Credentials from .env
   */
  // const DEFAULT_FROM_EMAIL = process.env.DEFAULT_FROM_EMAIL;
  // const EMAIL_USE_TLS = process.env.EMAIL_USE_TLS;
  // //
  // const EMAIL_HOST_USER = process.env.EMAIL_HOST_USER;
  // const EMAIL_HOST_PASSWORD = process.env.EMAIL_HOST_PASSWORD;
  // const EMAIL_HOST = process.env.EMAIL_HOST;
  // const EMAIL_PORT = process.env.EMAIL_PORT; // TLS is 465
  //
  // Grab MessageFromAppForm from body's form data
  //
  /**
   *
   */
  const newMessageToSend = new MessageFromAppForm(req.body);
  const newMessageToSave = new MessageFromAppForm(req.body);
  //
  // Testing values
  // console.log(newMessageToSend);
  const outputEmailData = `
    <p>New contact Request</p>
    <h3>Details:</h3>
    <ul>
      <li>Name: ${newMessageToSend.sender_name}</li>
      <li>Referrer: ${newMessageToSend.sender_referrer}</li>
      <li>E-mail: ${newMessageToSend.sender_email}</li>
    </ul>
    <h4>Subject:</h4>
    <p>${newMessageToSend.sender_subject}</p>
    <h4>Message:</h4>
    <p>${newMessageToSend.sender_message}</p>`;
  /**
   *
   * NODEMAILER
   *
   * transporter = nodemailer.createTransport()
   *
   * create reusable transporter object using the default SMTP transport
   */
  // let transporter = nodemailer.createTransport({
  //   host: EMAIL_HOST,
  //   port: EMAIL_PORT,
  //   secure: EMAIL_USE_TLS, // true for 465, false for other ports
  //   auth: {
  //     user: EMAIL_HOST_USER, // generated ethereal user
  //     pass: EMAIL_HOST_PASSWORD, // generated ethereal password
  //   },
  // });
  /**
   *
   * NODEMAILER
   *
   * transporter.sendMail(PARAMS, CALLBACK)
   *
   * send mail with defined transport object
   */
  // transporter.sendMail(
  //   {
  //     from: DEFAULT_FROM_EMAIL, // sender address
  //     to: "franklin.carrilho@hotmail.com", // list of receivers
  //     subject: `New Request: ${newMessageToSend.sender_subject}`, // Subject line
  //     text: outputEmailData, // plain text body
  //     html: outputEmailData, // html body
  //   },
  //   (error, newMessageToSend) => {
  //     if (error) {
  //       console.log(error);
  //       return res.status(400).json({ err: errorHandler(err) });
  //     }
  //     console.log("Message sent: %s", newContact.messageId);
  //     //
  //     // Message sent
  //     // Save contact form data
  //     //
  //     newMessageToSend.confirm_email_read = 0;
  //     newMessageToSend.confirm_email_reply = 0;
  //     console.log(newMessageToSend || undefined);
  //     //
  //     newMessageToSend.save((err, newMessageToSend) => {
  //       if (err) {
  //         return res.status(400).json({ err: errorHandler(err) });
  //       }
  //       //
  //       // Test object newMessageToSend
  //       // Return new contact JSON data
  //       //
  //       // console.log(newMessageToSend);
  //       res.json({ newMessageToSend });
  //     });
  //     //
  //     // res.status(200).json({ newContact });
  //   }
  // );
  /**
   *
   * MAILJET
   *
   *
   */
  const mailJet = require("node-mailjet").connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_PWD
  );
  const request = mailJet
    .post("send", { version: process.env.MAILJET_API_VER })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_API_FROM,
            Name: process.env.MAILJET_API_NAME,
          },
          To: [
            {
              Email: "franklin.cs@outlook.com",
              Name: "Franklin",
            },
          ],
          Subject: `New Request: ${newMessageToSend.sender_subject}`, // "Greetings from Mailjet.",
          TextPart: outputEmailData, // "My first Mailjet email",
          HTMLPart: outputEmailData,
          // "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          CustomID: "AppGettingStartedTest",
        },
      ],
    })
    .then((newMessageToSend) => {
      // if (err) {
      //   console.log(err.statusCode);
      //   return res.status(400).json({ err: errorHandler(err) });
      // }
      newMessageToSave.confirm_email_read = 0;
      newMessageToSave.confirm_email_reply = 0;
      console.log("PRINT: Message instance goes next...");
      console.log(newMessageToSave || undefined);
      //
      newMessageToSave.save((err, newMessageToSave) => {
        if (err) {
          console.log("PRINT: Message instance have not been saved...");
          console.log(err);
          return res.status(400).json({ err: errorHandler(err) });
        }
        //
        // Test object newMessageToSend
        // Return new contact JSON data
        //
        // console.log(newMessageToSend);
        console.log("PRINT: Message instance should have been saved...");
        return res.json({ newMessageToSave });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // request
  //   .then((result) => {
  //     console.log(result.body);
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode);
  //   });
};

// me.request(function(error, response, body) {
//   console.log (response.statusCode, error || body);
// });
