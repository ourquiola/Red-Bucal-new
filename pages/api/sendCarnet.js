import sgMail from "@sendgrid/mail";
import axios from "axios";

export default async (req, res) => {
    if (req.method === "GET") {
        const { email, name, identification,start, end,plan  } = req.query;

        const apiUrl = `${req.secure ? 'https' : 'http'}://${req.headers.host}/api/generateCarnet`;

        sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
                <body>
                    <h2>Gracias por elegir Red Bucal!</h2>

                    <p>Su Plan de Salud Dental y Medicina Preventiva General se encuentra activo, nuestros especialistas están listos para atenderle en todas las Clínicas de la Red Bucal.</p>
                    <p>Por favor descargue su Carnet Digital de este correo para que utilizarlo de inmediato.</p>
                    <p>Para comenzar a utilizar su Plan Dental, solo debe coordinar su primera consulta con una de las Clínicas de la Red.</p>
                    <p>Para guiarle en el proceso de Atención al Cliente o Coordinación de Citas  por favor acceda al siguiente enlace de nuestra línea de atención: https://wa.me/message/OOD225XELIHJB1 y uno de nuestros Agentes le ayudará en la atención que necesite vía WhatsApp o consúltenos al +507 6328-1368.</p>
                    <p>Si desea descargar la Cobertura Actualizada de su Plan por favor consulte con uno de nuestros agentes al chat o Ingresando a su perfil en la Plataforma Red Bucal: <a href="www.redbucal.com">www.redbucal.com</a> </p>
                    <p>Estamos complacidos de poderle servir.</p>

                    <p>Gerencia General</p>
                    <p>Red Bucal</p>
                </body>
            </html>
        `;

        const msg = {
            to: email.trim(),
            from: "redbucal.info@gmail.com",
            subject: "CONTACTENOS - Red Bucal",
            text: "esete es el texto de inicio",
            html: contentHTML,
            attachments: [],
        };

    
        try {
            
            const params = {
                name,
                identification,
                start,
                end,
                plan
              };
          
            const response = await axios.get(apiUrl, {
                params: params,
                responseType: 'arraybuffer'
              });

            msg.attachments.push({
                content: Buffer.from(response.data).toString('base64'),//pdfBytes.toString('base64'),
                filename: 'carnet.png',
                type: 'image/png',
                disposition: 'attachment',
            });

            sgMail.send(msg);
        } catch (error) {
            console.error(error);
        }

        res.status(200).json({
            status: "ok",
            message: "correo enviado",
        });
    } else {
        // Handle any other HTTP method
    }
};
