import { Router } from "express";
import { check } from "express-validator";
import { contactEmail } from "../controllers/mail.controller";

const router = Router();

router.post(
  "/contact",
  [
    check("email").not().isEmpty().isEmail(),
    check("reason").not().isEmpty(),
    check("name").not().isEmpty(),
    check("message").not().isEmpty(),
  ],
  contactEmail
);

export default router;
