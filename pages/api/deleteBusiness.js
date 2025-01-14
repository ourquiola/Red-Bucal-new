import withMiddleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        const { RUC } = req.query;
        console.log(RUC);

        await req.db.collection("bussines").deleteOne({ RUC });

        const userList = await req.db.collection("users").updateMany(
            { RUC },
            {
                $set: {
                    RUC: "",
                    state: false,
                    plan: false,
                    start: "",
                    end: "",
                },
            },
            {
                new: true,
            }
        );

        const releasedUsersNum = JSON.parse(userList).nModified;

        res.status(200).json({
            status: "ok",
            message: `se ha cambiado ${releasedUsersNum} usuarios al plan de cuenta personal`,
        });
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
