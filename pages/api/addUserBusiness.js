import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, lastname, addres, phone, email, typeDoc, identification, day, month, year, identifications, RUC} = req.body
        console.log(req.body)
        if (!validator.validate(email)) {
            res.json({
                status: 'error',
                message: 'el correo es invalido'
            })

        } else {

            try {
                const count = await req.db.collection('users').countDocuments({ email })

                if (count) {
                    console.log('ya existe')

                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado',
                    });

                } else {

                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(identification, salt)
                    const date = new Date;
                    const user = await req.db.collection('users').insertOne({
                        state: false,
                        RUC,
                        name: name + ' ' + lastname,
                        typeDoc,
                        identification,
                        email,
                        password: hashedPassword,
                        birthdate: `${day}/${month}/${year}`,
                        addres,
                        phone,
                        plan: true,
                        date: '0' + date.getDate() + ' / 0' + date.getMonth(),
                        service: false
                    })

                    identifications.push({
                        name: name + ' ' + lastname,
                        id: identification
                    })
                    
                    const encontrar = await req.db.collection('bussines').findAndModify(
                        { "RUC": RUC },
                        [['_id', 'asc']],
                        { "$set": { "identifications": identifications } },
                        { "new": true }
                    )


                    res.status(201).json({
                        status: 'ok',
                        message: 'Usuario agregado satisfactoriamente',
                        data: encontrar
                    })

                }

            } catch (error) {
                res.json({
                    status: 'error',
                    message: error.toString()
                })
            }
        }
    } else {

        res.status(405).end();

    }

}

export default withMiddleware(handler);