import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if(req.method === "POST") {

        const {email} = req.body

        await req.db.collection('users').update({email}, {$set: {tour: false}})

        res.status(200).json({
            status: 'ok',
            message: 'Cambio de contraseña exitoso'
        })

    } else {
        
        res.status(405).end();

    }
    
}

export default withMiddleware(handler);
