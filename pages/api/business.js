import validator from "email-validator";
import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";
import sgMail from "@sendgrid/mail";

const handler = async (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({
            status: "ok",
            message: insuranceList,
        });
    } else if (req.method === "POST") {
        const { name, phone, password, email, data, RUC } = req.body;

        try {
            if (!validator.validate(email)) {
                return res.json({
                    status: "error",
                    message: "el correo es invalido",
                });
            }
            const countEmail = await req.db
                .collection("bussines")
                .countDocuments({ businessMail: email });

            if (countEmail) {
                return res.json({
                    status: "error",
                    message: "El correo ya ha sido registrado",
                });
            }

            const countRUC = await req.db
                .collection("bussines")
                .countDocuments({ RUC });

            if (countRUC) {
                return res.json({
                    status: "error",
                    message: "El RUC ya ha sido registrado",
                });
            }

            let erroMessage = [];
            let cuotaAsegurado;

            for (let i = 9; i < data.length; i++) {
                let numErrors = erroMessage.length;

                let identification = data[i][1] + "";

                erroMessage[numErrors] = { row: i + 6 };

                if (!data[i][0]) {
                    erroMessage[numErrors][
                        "errorName"
                    ] = `El campo del nombre del usuario se encuentra vacio`;
                }

                if (!data[i][1]) {
                    erroMessage[numErrors][
                        "errorId"
                    ] = `El campo de la identificaion del usuario se encuentra vacio`;
                }

                const user = await req.db
                    .collection("users")
                    .findOne({ identification });


                if (user) {
                    if (user.plan == true) {
                        if (user.RUC !== RUC) {
                            erroMessage[numErrors][
                                "errorId"
                            ] = `El usuario registrado con la cedula ${identification} ya cuenta con una afiliacion a una entidad vigente`;
                        }
                    } else {
                        if (user.state === true) {
                            erroMessage[numErrors][
                                "errorId"
                            ] = `El usuario registrado con la cedula ${identification} ya cuenta con una cuenta personal activa`;
                        }
                    }
                }

                if (
                    JSON.stringify(erroMessage[numErrors]) ===
                    `{"row":${i + 6}}`
                ) {
                    erroMessage.pop();
                }
            }

            if (erroMessage.length) {
                return res.json({
                    status: "fileError",
                    message: erroMessage,
                });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            let identifications = [];

            for (let i = 9; i < data.length; i++) {
                identifications.push({
                    id: data[i][1] + "",
                    name: data[i][0],
                });
            }

            cuotaAsegurado = data[7][1];

            if (!cuotaAsegurado) {
                return res.json({
                    status: "error",
                    message: "El excel no incluye la cuota por cada Empleado",
                });
            }

            const date = new Date();
            const end = new Date();
            end.setMonth(end.getMonth() + 1);

            const business = await req.db.collection("bussines").insertOne({
                state: true,
                name,
                RUC,
                start: date,
                end: end,
                password: hashedPassword,
                businessPhone: phone,
                businessMail: email,
                identifications,
                plan: false,
                terminos: true,
                date,
            });

            req.session.businessId = await business.insertedId;

            for (let i = 9; i < data.length; i++) {
                /* console.log("send email to " + data[i][4]);
                sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

                const contentHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Correo</title>
                    </head>
                    <body>
                        <h2>¡Bienvenido a tu programa de beneficios RED BUCAL CORPORATIVO!</h2>
                        <br />
                        <p>Nuestros especialistas están listos para atenderte en cualquiera de nuestras sucursales. Ingresando a <a href="www.redbucal.com">www.redbucal.com</a> tendrás acceso a tu perfil y todos los beneficios de la cobertura</p>
                        <br />
                        <img src="data:image/png;base64,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" alt="Plan Corporativo" />
                        <br />
                        <p>Síguenos nuestras redes como:</p>
                        <p><a href="https://www.instagram.com/red_bucal/">Instagram</a> red_bucal</p>
                        <p><a href="https://www.facebook.com/pages/category/Product-Service/Red-Bucal-103457618545667/">Facebook</a> red_bucal</p>
                        <p><a href="https://www.linkedin.com/company/redbucal">Linkedln</a> red_bucal</p>
                        <br />
                        <p>Para más información, puedes comunicarte con nosotros al teléfono +507 63281368</p>
                        <br />
                        <p>El equipo de Red Bucal</p>
                    </body>
                    </html>
                `;
                const msg = {
                    to: data[i][4],
                    from: "redbucal.info@gmail.com",
                    subject: "Plan Corporativo - Red Bucal",
                    text: "esete es el texto de inicio",
                    html: contentHTML,
                };

                try {
                    sgMail.send(msg);
                } catch (error) {
                    console.log(error);
                } */
                let identification = data[i][1] + "";

                const user = await req.db
                    .collection("users")
                    .findOne({ identification });

                if (!user) {
                    const hashedPasswordUser = await bcrypt.hash(
                        data[i][1] + "",
                        salt
                    );

                    let userToDepend;

                    if (data[i][2]) {
                        userToDepend = await req.db
                            .collection("users")
                            .findOneAndUpdate(
                                { identification: data[i][2] + "" },
                                {
                                    $push: {
                                        dependientes: {
                                            name: data[i][0],
                                            id: data[i][1],
                                            state: true,
                                        },
                                    },
                                }
                            );
                    }

                    await req.db.collection("users").insertOne({
                        RUC,
                        state: true,
                        start: date,
                        end: end,
                        name: data[i][0],
                        identification: data[i][1] + "",
                        birthdate: data[i][3],
                        adress: "",
                        phone: data[i][5],
                        email: data[i][4],
                        password: hashedPasswordUser,
                        know: 5,
                        plan: true,
                        service: false,
                        terminos: true,
                        historial: [],
                        mustChangePass: true,
                        alerts: {
                            week: false,
                            month: false,
                        },
                        date,
                        dependeOf: data[i][2]
                            ? {
                                name: userToDepend.value.name,
                                id: data[i][2],
                            }
                            : "",
                        dependientes: [],
                    });
                } else {
                    await req.db.collection("users").updateOne({
                        identification,
                    }, {
                        $set: {

                            RUC,
                            state: true,
                            start: date,
                            end: end,
                            phone: data[i][5],
                            email: data[i][4],
                            plan: true,
                            dependeOf: data[i][2]
                                ? {
                                    name: userToDepend.value.name,
                                    id: data[i][2],
                                }
                                : "",
                            dependientes: [],
                        }
                    });

                    if (data[i][2]) {
                        await req.db.collection("users").findOneAndUpdate(
                            { identification: data[i][2] + "" },
                            {
                                $addToSet: {
                                    dependientes: {
                                        name: data[i][0],
                                        id: data[i][1],
                                        state: true,
                                    }
                                },
                            }
                        );
                    }
                }
            }

            res.status(200).json({
                status: "ok",
                insurance: business.ops[0],
                info: {
                    num: identifications.length,
                    value: identifications.length * cuotaAsegurado,
                },
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
