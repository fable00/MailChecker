const template = () =>{
    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> Email Confirmado com Sucesso </title>
        </head>
        <body>
            <h1>Email Confirmado com Sucesso</h1>
        </body>
        </html>
    `
}

const subject = "Envio de Email"

module.exports = {template, subject}