import withMiddleware from "../../middlewares/withMiddleware";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const { identification } = req.query;
        console.log(identification);

        const user = await req.db
            .collection("users")
            .findOne({ identification });
        console.log(user);
        res.send({
            data: user,
        });
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
