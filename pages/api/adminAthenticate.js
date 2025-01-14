import bcrypt from "bcryptjs"
import withMiddleware from "../../middlewares/withMiddleware"

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const { email, password } = req.body

        try {

            const admin = await req.db.collection('admin').findOne({ email })

            if (admin) {

                const result = await bcrypt.compare(password, admin.password)

                if (result) {

                    req.session.adminId = admin._id

                    if (req.session.userId) {
                        delete req.session.userId
                    }

                    if (req.session.businessId) {
                        delete req.session.businessId
                    }

                    res.send({
                        status: 'ok',
                        type: 'ok_admin',
                        message: `Bienvenido de vuelta ${admin.name}`,
                        id: admin._id
                    })

                } else {
                    res.send({
                        status: 'error',
                        message: 'Contraseña invalida'
                    })
                }

            } else {

                const master = await req.db.collection('master').findOne({ email })

                if (master) {

                    const result = await bcrypt.compare(password, master.password)

                    if (result) {

                        req.session.masterId = master._id

                        if (req.session.userId) {
                            delete req.session.userId
                        }

                        if (req.session.businessId) {
                            delete req.session.businessId
                        }

                        if (req.session.adminId) {
                            delete req.session.adminId
                        }

                        res.send({
                            status: 'ok',
                            type: 'ok_master',
                            message: `Bienvenido de vuelta ${master.name}`,
                            id: master._id
                        })
                    } else {
                        res.send({
                            status: 'error',
                            message: 'Contraseña invalida'
                        })
                    }

                } else {

                    res.send({
                        status: 'error',
                        message: 'El usuario no existe'
                    })

                }

            }

        } catch (error) {
            res.send({
                status: 'error',
                message: error.toString()
            })
        }

    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)