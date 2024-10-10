import { Request, Response } from "express";
import { MailService } from "../../services/mail.services.js";

export const getEmail = async(req: Request, res: Response) =>{
    const email = req.params.email    
    const mailService = new MailService(email)
    await mailService.sendEmail()
    res.send({email: mailService.email})
}




