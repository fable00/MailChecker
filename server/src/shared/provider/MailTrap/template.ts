export const template = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmado com Sucesso</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                p {
                    color: #555;
                    line-height: 1.6;
                    text-align: center;
                }
                
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Email Confirmado com Sucesso</h1>
                <p>Obrigado por confirmar seu email.</p>
            </div>
        </body>
        </html>
    `;
}


export const subject = "Envio de Email"

