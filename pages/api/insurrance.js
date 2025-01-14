import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import validator from "email-validator";

const handler = async (req, res) => {
    const insuranceList = await req.db
        .collection("bussines")
        .find(
            {},
            {
                projection: {
                    _id: true,
                    name: true,
                    businessMail: true,
                    RUC: true,
                    insurrance: true,
                    identifications: true
                },
            }
        )
        .toArray();

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

                if (!data[i][3]) {
                    erroMessage[numErrors][
                        "errorDate"
                    ] = `El campo de la fecha de nacimiento se encuentra vacio`;
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
            console.log(erroMessage);
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
                    message: "El excel no incluye la cuota por cada asegurado",
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
                insurrance: true,
            });

            req.session.businessId = await business.insertedId;

            for (let i = 9; i < data.length; i++) {
                let identification = data[i][1] + "";

                const user = await req.db
                    .collection("users")
                    .findOne({ identification });

                let userToDepend;

                if (data[i][2]) {
                    userToDepend = await req.db
                        .collection("users")
                        .findOneAndUpdate(
                            { identification: data[i][2] + "" },
                            {
                                $addToSet: {
                                    dependientes: {
                                        name: data[i][0],
                                        id: data[i][1],
                                        state: true,
                                    },
                                },
                            }
                        );
                }

                if (!user) {
                    const hashedPasswordUser = await bcrypt.hash(
                        data[i][1] + "",
                        salt
                    );

                    console.log(userToDepend);

                    await req.db.collection("users").insertOne({
                        RUC,
                        state: true,
                        start: date,
                        end: end,
                        name: data[i][0],
                        identification: data[i][1] + "",
                        birthdate: data[i][3],
                        adress: "",
                        phone: "",
                        email: "",
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
                    await req.db.collection("users").updateOne(
                        {
                            identification,
                        },
                        {
                            $set: {
                                RUC,
                                state: true,
                                start: date,
                                end: end,
                                plan: true,
                                dependeOf: data[i][2]
                                    ? {
                                        name: userToDepend.value.name,
                                        id: data[i][2],
                                    }
                                    : "",
                                dependientes: [],
                            },
                        }
                    );

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
    } else if (req.method === "DELETE") {
        const { RUC } = req.query;
        console.log(RUC);

        await req.db.collection("bussines").deleteOne({ RUC });

        const userList = await req.db.collection("users").updateMany(
            { RUC },
            {
                $set: {
                    RUC: "",
                    state: false,
                    plan: false,
                    start: "",
                    end: "",
                },
            },
            {
                new: true,
            }
        );

        const releasedUsersNum = JSON.parse(userList).nModified;

        res.status(200).json({
            status: "ok",
            message: `se ha cambiado ${releasedUsersNum} usuarios al plan de cuenta personal`,
        });
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
