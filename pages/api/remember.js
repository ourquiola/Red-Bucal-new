import withMiddleware from "../../middlewares/withMiddleware";

import sgMail from "@sendgrid/mail";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
        const { email } = req.body;

        sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

        try {
            let user = await req.db.collection("users").findOne({ email });

            let type = "users";

            let mailFind = {
                email,
            };

            if (!user) {
                type = "bussines";
                user = await req.db
                    .collection(type)
                    .findOne({ businessMail: email });
                mailFind = {
                    businessMail: email,
                };
            }

            if (!user) {
                type = "admin";
                user = await req.db.collection(type).findOne({ email });
                mailFind = {
                    email: email,
                };
            }

            if (user) {
                const password = Math.round(Math.random() * 1000000000) + "";
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const contentHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Correo</title>
                    </head>
                    <body>
                        <p>Su contraseña temporal es:</p>
                        <ul>
                            <li>${password}</li>
                        </ul>
                        <p>Al ingresar nuevamente a su cuenta deberá reemplarzarla por una nueva</p>
                    </body>
                    </html>
                `;

                await req.db.collection(type).findOneAndUpdate(mailFind, {
                    $set: {
                        password: hashedPassword,
                        mustChangePass: true,
                    },
                });

                const msg = {
                    to: email,
                    /* from: 'xevaz.ariasd@gmail.com', */
                    from: "redbucal.info@gmail.com",
                    subject: "Red Bucal - Recupera contraseña",
                    text: "esete es el texto de inicio",
                    html: contentHTML,
                };

                sgMail.send(msg);

                res.json({
                    status: "ok",
                    message:
                        "Hemos enviado una contraseña provisional a su correo, si no lo visualiza revise su carpeta de spam",
                });
            } else {
                res.json({
                    status: "error",
                    message: "el correo no se encuentra registrado",
                });
            }
        } catch (error) {
            res.json({
                status: "error",
                message: error.toString(),
            });
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
