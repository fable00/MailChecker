import { Router } from "express";
import { emailRouter } from "../../../modules/mail/infra/routes/mail.routes.js";

export const appRoute = Router()

appRoute.use('/data', emailRouter)
