const mail = require("../../services/MailService")

const mailCatcher = async(req: Request, res: Response) =>{
    const mailData: object = {mail: "testemail@mail.com"}
    const mailService = new mail.sendProvider(mailData)
    console.log(mailService)
}

module.exports = { mailCatcher }