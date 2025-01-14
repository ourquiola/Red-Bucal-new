import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const { identification, identificationChange, birthdate, phone, adress, email} = req.body
        const count = await req.db.collection('users').findAndModify(
            { "identification": identification },
            [['_id', 'asc']],
            { "$set": { 
                "identification": identificationChange,
                "birthdate": birthdate,
                "phone": phone,
                "adress": adress,
                "email": email
            } },
            { "new": true }
        )
        res.send({
            data: count.value,
            status: 'ok'
        })
    } else {
        res.status(405).end();
    }
}

export default withMiddleware(handler)