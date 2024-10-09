class MailService {
    
    mailData: object

    constructor(mailData: object) {
        this.mailData = mailData
    }
    
    async sendProvider(){
        const data = this.mailData
        return data
    }
}

module.exports ={ MailService }