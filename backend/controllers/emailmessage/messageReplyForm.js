// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const nodemailer = require("nodemailer");
const MessageReply = require("../../models");
const { errorHandler } = require("../../helpers/dbErrorHandler");

/** ************************
 *
 * MESSAGE REPLY FORM LOGIC
 *
 * *************************
 */
exports.messageReplyForm = (req, res) => {
  // Swagger
  /**
   * @swagger
   * tags:
   *   name: Messages Reply API
   *   description: API to handle received messages from app admin resources.
   */

  /**
   * @swagger
   *  /api/message-reply"/:
   *    post:
   *      summary: Send a message constructed in frontend method - MessageFromAppForm() -> MessageFromAppFormService().
   *      tags: [Message Reply APIs]
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
  //
  const DEFAULT_FROM_EMAIL = process.env.DEFAULT_FROM_EMAIL;
  const EMAIL_USE_TLS = process.env.EMAIL_USE_TLS;
  //
  const EMAIL_HOST_USER = process.env.EMAIL_HOST_USER;
  const EMAIL_HOST_PASSWORD = process.env.EMAIL_HOST_PASSWORD;
  const EMAIL_HOST = process.env.EMAIL_HOST;
  const EMAIL_PORT = process.env.EMAIL_PORT; // TLS is 465

  // create reusable transporter object using the default SMTP transport
  //
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_USE_TLS,
    auth: {
      user: EMAIL_HOST_USER,
      pass: EMAIL_HOST_PASSWORD, // generated ethereal password
    },
  });
  //
  // Grab Contact Reply for data
  //
  const newMessageReplyToSave = new MessageReply(req.body);
  // E-mail data -> MUST REPLY TO THE CONTACT PREVIOUSLY MADE
  const outputEmailData = `
          <h3>Hello, ...</h3>
          <p>We hope you're doing well!</p>
          <h3>Details:</h3>
          <ul>
            <li>Name: ${newMessageReplyToSave.sender_name}</li>
            <li>Referrer: ${newMessageReplyToSave.sender_referrer}</li>
            <li>E-mail: ${newMessageReplyToSave.sender_email}</li>
          </ul>
          <h4>Subject:</h4>
          <p>${newMessageReplyToSave.sender_subject}</p>
          <h4>Message:</h4>
          <p>${newMessageReplyToSave.sender_message}</p>`;
  //
  transporter.sendMail(
    // TODO: get original sender e-mail address and add BCC to recipients
    {
      from: DEFAULT_FROM_EMAIL,
      to: "franklin.cs.design@gmail.com, franklin.carrilho@hotmail.com",
      subject: `RE: ${newMessageReplyToSave.sender_subject}`,
      text: outputEmailData,
      html: outputEmailData, // html body
    },
    (error, newContact) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ err: errorHandler(err) });
      }
      console.log(
        "\nMessage from %s sent!\n",
        newMessageReplyToSave.sender_email
      );
      //
      // Message sent
      // Change confirm_mail to 1 (true)
      // Save contact form data
      //
      newMessageReplyToSave.confirm_reply = 1;
      console.log(newMessageReplyToSave || undefined);
      //
      newMessageReplyToSave.save((err, newMessageReplyToSave) => {
        if (err) {
          return res.status(400).json({ err: errorHandler(err) });
        }
        //
        // Test object newContactToSave
        // Return new contact JSON data
        //
        // console.log(newContactToSave);
        res.json({ newMessageReplyToSave });
      });
      //
      // res.status(200).json({ newContact });
    }
  );
  //
};
