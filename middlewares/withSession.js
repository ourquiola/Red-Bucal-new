import session from "next-session"
import connectMongo from "connect-mongo"
import dotenv from "dotenv";
dotenv.config()

const { RED_BUCAL_MONGODB_HOTS, RED_BUCAL_MONGODB_DATABASE } = process.env
//const MONGODB_URI = `mongodb://localhost/red-bucal-database`
const MONGODB_URI = `mongodb://${RED_BUCAL_MONGODB_HOTS}/${RED_BUCAL_MONGODB_DATABASE}`

const MongoStore = connectMongo(session)

const withSession = handler => session.withSession(handler, {
    store: new MongoStore({
        url: MONGODB_URI
    })
})

export default withSession