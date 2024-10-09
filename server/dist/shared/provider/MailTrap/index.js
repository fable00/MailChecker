"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nodemailer = require('nodemailer');
const mailData = require('../../../modules/mail/services/MailService');
class MailProvider {
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
    sendMail() {
        return __awaiter(this, void 0, void 0, function* () {
            const mail = mailData.sendProvider();
            yield this.transporter.sendMail({
                from: 'saymonmcedo00@gmail.com',
                to: mail,
                subject,
                html: template,
            });
        });
    }
}
module.exports = MailProvider;
