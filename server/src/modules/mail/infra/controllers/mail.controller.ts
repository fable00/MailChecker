import { Request, Response } from "express";
import { MailService } from "../../services/mail.services.js";

export const getEmail = async(req: Request, res: Response) =>{
    try {
        const email = req.params.email    
        const mailService = new MailService(email)
        await mailService.sendEmail()    
        res.status(200).send("Email checado com sucesso")
    } catch (error) {
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        res.status(500).send(message)
    }

}