import { template, subject } from "./template.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 

export const MailProvider = class {
    transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            debug: true,
            logger: true,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    async sendMail(email: string) {
        await this.transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: subject,
            html: template(),
        });

        console.log(`Email Value: ${email}`);
    }
}