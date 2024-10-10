import { MailProvider } from "../../../shared/provider/MailTrap/index.js";

export class MailService {
    email: string;

    constructor(email: string) {
        this.email = email;
        
        //console.log(`Email Value ${this.email}`)
    }

    async sendEmail() {
        const mailProvider = new MailProvider();
        await mailProvider.sendMail(this.email);
        
        //console.log(`Email Value ${this.email}`)
        //console.log(`Provider Value ${mailProvider}`)
    }
}
