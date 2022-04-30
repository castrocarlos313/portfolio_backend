import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import errorMsg from "../constants/errorMsg";
import nodemailer from "nodemailer";
import type { Options } from "nodemailer/lib/mailer";
import { Mail } from "../interfaces/mail.interface";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import successMsg from "../constants/successMsg";

export const contactEmail = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errorMsg.ES.BAD_REQUEST,
    });
  }

  const mailRequest: Mail = req.body;
  try {
    const emailTemplateSource = fs.readFileSync(
      path.resolve("src/templates/contact.hbs"),
      "utf8"
    );

    const templates = handlebars.compile(emailTemplateSource);

    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const html = templates(mailRequest);

    const mailOptions: Options = {
      from: process.env.USER,
      to: process.env.RECEIVER,
      subject: mailRequest.reason,
      html,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      msg: successMsg.ES.MAIL_SEND,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: errorMsg.ES.SERVER_ERROR,
    });
  }
};
