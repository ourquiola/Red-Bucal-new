import withMiddleware from '../../middlewares/withMiddleware'
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'GET') {
        const {query} = req

        const data = await req.db.collection('bussines').findOne({_id: ObjectId(query.id)})

        res.send({message: data})

    } else if (req.method === 'POST') {
        const { RUC } = req.body
        try {

            const user = await req.db.collection('bussines').aggregate(aggregateId(RUC)).toArray()
            if (user.length === 0) {
                const user = await req.db.collection('bussines').aggregate(aggregateName(RUC)).toArray()
                res.send({ message: user })
            } else {
                res.send({ message: user })
            }

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

const aggregateId = (RUC) => (
    [
        {
            $match: {
                RUC: {$regex: RUC === '' ? '.' : RUC, $options: 'i'}
            }
        },
        {
            $project: {
                name: true,
                RUC: true
            }
        }
    ]
)

const aggregateName = (RUC) => (
    [
        {
            $match: {
                name: {$regex: RUC === '' ? '.' : RUC, $options: 'i'}
            }
        },
        {
            $project: {
                name: true,
                RUC: true
            }
        }
    ]
)

export default withMiddleware(handler);