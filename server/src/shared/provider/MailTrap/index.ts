const nodemailer = require('nodemailer');
const mailData = require('../../../modules/mail/services/MailService')
class MailProvider {
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

    async sendMail() {
        const mail = mailData.sendProvider();
        await this.transporter.sendMail({
            from: 'saymonmcedo00@gmail.com',
            to: mail,
            subject,
            html: template,
        });
    }
}

module.exports = MailProvider;
