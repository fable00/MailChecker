import { Router } from "express";
import { getEmail } from "../controllers/mail.controller.js";
import { verifyEmailData } from "../../middlewares/mail.middlewares.js";

export const emailRouter = Router()

emailRouter.use('/:email', verifyEmailData(), getEmail)

console.log(`Email Router Info: ${emailRouter}`)
console.log(`Email Info: ${getEmail}`)