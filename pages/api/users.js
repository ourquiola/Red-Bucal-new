import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"
import {ObjectId} from 'mongodb'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, lastname, adress, password, phone, email, typeDoc, identification, know, day, month, year, afiliacion } = req.body

        if (!validator.validate(email)) {

            return res.json({
                status: 'error',
                message: 'el correo es invalido'
            })

        } else {

            try {
                const countEmail = await req.db.collection('users').countDocuments({email})

                if (countEmail) {

                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado',
                    });

                } else {

                    const countId = await req.db.collection('users').countDocuments({ identification })

                    if (countId) {
                        
                        res.send({
                            status: 'error',
                            message: 'La cedula de ciudadania ya ha sido registrada',
                        });

                    } else {

                        const salt = await bcrypt.genSalt(10)
                        const hashedPassword = await bcrypt.hash(password, salt)
                        const date = new Date()
                        
                        const user = await req.db.collection('users').insertOne({
                            state: false,
                            name: name + ' ' + lastname,/* ya */
                            typeDoc,
                            identification,/* ya */
                            email,/* ya */
                            password: hashedPassword,/* ya */
                            birthdate: day +'/'+month+'/'+year,
                            adress,/* ya */
                            phone,/* ya */
                            know,
                            plan: false,
                            start: '',
                            end: '',
                            service: false,
                            terminos: true,
                            historial: [],
                            tour: true,
                            alerts: {
                                week: false,
                                month: false
                            },
                            date,
                            afiliacion: afiliacion ? afiliacion : ''
                        })

                        req.session.userId = await user.insertedId
                        res.status(201).json({
                            status: 'ok',
                            message: 'Usuario agregado satisfactoriamente',
                            token: user.insertedId
                        })

                    }

                }

            } catch (error) {
                res.json({
                    status: 'error',
                    message: error.toString()
                })
            }
        }
    } else if (req.method === 'PUT') {
        
        const { _id, password } = req.body
        
        try {

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            req.db.collection('users').update({_id: ObjectId(_id)}, {$set: {password: hashedPassword, mustChangePass: false}})

            res.status(200).json({
                status: 'ok',
                message: 'Cambio de contraseña exitoso'
            })
            
        } catch (error) {
            res.json({
                status: 'error',
                message: error.toString()
            })
        }
    } else {
        
        res.status(405).end();

    }

}

export default withMiddleware(handler);