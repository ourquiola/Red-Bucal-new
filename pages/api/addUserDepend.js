import validator from "email-validator";
import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    if (req.method === "POST") {
        let {
            name,
            lastname,
            typeDoc,
            identification,
            idDepend,
            dependName,
            dependientes,
            addres,
            phone,
            email,
            day,
            month,
            year,
        } = req.body;

        console.log(req.body);

        if (!validator.validate(email)) {
            res.json({
                status: "error",
                message: "el correo es invalido",
            });
        } else {
            try {
                const count = await req.db
                    .collection("users")
                    .countDocuments({ email });

                if (count) {
                    console.log("ya existe");

                    res.send({
                        status: "error",
                        message: "El correo ya ha sido registrado",
                    });
                } else {
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(idDepend, salt);
                    const date = new Date();
                    const user = await req.db.collection("users").insertOne({
                        state: false,
                        name: name + " " + lastname,
                        typeDoc,
                        identification: idDepend,
                        email,
                        password: hashedPassword,
                        birthdate: `${day}/${month}/${year}`,
                        addres,
                        phone,
                        plan: false,
                        date: "0" + date.getDate() + " / 0" + date.getMonth(),
                        service: false,
                        historial: [],
                        know: 5,
                        dependeOf: {
                            name: dependName,
                            id: identification,
                        },
                    });

                    if (!dependientes) {
                        dependientes = [
                            {
                                name: name + " " + lastname,
                                id: idDepend,
                                state: false,
                            },
                        ];
                    } else {
                        dependientes.push({
                            name: name + " " + lastname,
                            id: idDepend,
                            state: false,
                        });
                    }

                    const encontrar = await req.db
                        .collection("users")
                        .findAndModify(
                            { identification },
                            [["_id", "asc"]],
                            { $set: { dependientes: dependientes } },
                            { new: true }
                        );

                    res.status(201).json({
                        status: "ok",
                        message: "Usuario agregado satisfactoriamente",
                        data: encontrar,
                    });
                }
            } catch (error) {
                res.json({
                    status: "error",
                    message: error.toString(),
                });
            }
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
