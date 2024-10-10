import { template, subject } from "./template.js";
import nodemailer from "nodemailer";


export const MailProvider = class {
    transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            debug: true,
            logger: true,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: 'dafc38b01b0bc6',
                pass: '1a85ec0166a11f'
            },
        });
    }

    async sendMail(email: string) {
        await this.transporter.sendMail({
            from: 'saymonmcedo00@gmail.com',
            to: email,
            subject: subject,
            html: template(),
        });

        console.log(`Email Value: ${email}`)
    }
    
}

