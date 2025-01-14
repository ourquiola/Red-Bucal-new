/* import nodeMailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport' */
import sgMail from "@sendgrid/mail";

export default (req, res) => {
    if (req.method === "POST") {
        const { name, phone, email, message } = req.body;

        sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
            <body>
                <ul>
                    <li>Nombre: ${name}</li>
                    <li>Telefono: ${phone}</li>
                    <li>Email: ${email}</li>
                </ul>
                <p>${message}</p>
            </body>
            </html>
        `;
        const msg = {
            to: "administracion@redbucal.com",
            /* from: 'xevaz.ariasd@gmail.com', */
            from: "redbucal.info@gmail.com",
            subject: "CONTACTENOS - Red Bucal",
            text: "esete es el texto de inicio",
            html: contentHTML,
        };

        try {
            sgMail.send(msg);
        } catch (error) {
            console.log(error);
        }

        res.status(200).json({
            status: "ok",
            message: "correo enviado",
        });
    } else {
        // Handle any other HTTP method
    }
};
