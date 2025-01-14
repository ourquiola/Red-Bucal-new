import { ObjectId } from "mongodb"

const withAuthentication = handler => async (req, res) => {
    if (req.session.businessId) {
        console.log(req.session.businessId, 'texto')
        const business = await req.db.collection('bussines').findOne(ObjectId(req.session.businessId))
        console.log(business);
        if (business) {
            req.business = business
            return handler(req, res)
        } 
    } else {
        if (req.session.userId) {
            console.log(req.session.userId)
            const user = await req.db.collection('users').findOne(ObjectId(req.session.userId))
            console.log(user)
            if (user) {
                req.user = user
                return handler(req, res)
            }
        } else {
            if (req.session.adminId) {
                console.log(req.session.adminId)
                const admin = await req.db.collection('admin').findOne(ObjectId(req.session.adminId))
                console.log(admin)
                if (admin) {
                    req.admin = admin
                    return handler(req, res)
                }
            } else {
                if (req.session.masterId) {
                    console.log(req.session.masterId)
                    const master = await req.db.collection('master').findOne(ObjectId(req.session.masterId))
                    console.log(master)
                    if (master) {
                        req.master = master
                        return handler(req, res)
                    }
                }
            }
        }
    }
    
    return handler(req, res)

}

export default withAuthentication
