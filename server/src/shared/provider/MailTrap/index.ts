const nodemailer = require('nodemailer');
const mailData = require('../../../modules/mail/services/MailService')
class MailProvider {
    transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            debug: true,
            logger: true,
            secure: process.env.MAIL_SECURITY, 
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
        });
    }

    async sendMail() {
        const mail = mailData.sendProvider();
        await this.transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: mail,
            subject,
            html: template,
        });
    }
}

module.exports = MailProvider;
