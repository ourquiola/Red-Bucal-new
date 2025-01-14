import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {

    const {all, type, name, start, end} = req.query
    console.log(req.query)
    
    let data;

    let projection = {}

    if (type === 'users') {
        projection = {
            _id: false,
            identification: true,
            name: true,
            date: true
        }
    } else if (type === 'bussines') {
        projection = {
            _id: false,
            RUC: true,
            name: true,
            date: true
        }
    }

    if (all) {

        data = await req.db.collection('admin').find({}, {projection: {_id: true, name: true, email: true}}).toArray()

        
    } else if (type && start && end) {
        const startArray = start.split('-')
        const endArray = end.split('-')

        if (name == '') {

            data = await req.db.collection(type).find(
                {
                    date: {
                        $gte: new Date(startArray[0], startArray[1] - 1, startArray[2], 0),
                        $lte: new Date(endArray[0], endArray[1] - 1, endArray[2], 23)
                    }
                },
                {
                    projection
                }
            ).toArray()
        }else {
            
            data = await req.db.collection(type).find(
                {
                    afiliacion: name,
                    date: {
                        $gte: new Date(startArray[0], startArray[1] - 1, startArray[2], 0),
                        $lte: new Date(endArray[0], endArray[1] - 1, endArray[2], 23)
                    }
                },
                {
                    projection
                }
            ).toArray()
        }

        console.log(data)

    } else if (type) {

        if (name === '') {

            data = await req.db.collection(type).aggregate([
                { $project: projection }
            ]).toArray()
        } else {
            data = await req.db.collection(type).aggregate([
                { $match: { afiliacion: name } },
                { $project: projection }
            ]).toArray()
        }
        
        

    } else { 
        return res.status(200).send({message: 'error en la consulta'})
    }
    
    res.status(200).send({
        message: data
    })

}

export default withMiddleware(handler);