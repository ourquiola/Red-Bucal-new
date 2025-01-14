import withMiddleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { identification, identifications, RUC, tamaño } = req.body;
            await req.db
                .collection("users")
                .deleteOne({ identification: identification });
            console.log(identification, identifications, RUC, tamaño);

            let pos = 0;

            for (let i = 0; i < tamaño; i++) {
                if (identifications[i].id === identification) {
                    pos = i;
                }
            }

            identifications.splice(pos, 1);

            const count = await req.db
                .collection("bussines")
                .findAndModify(
                    { RUC: RUC },
                    [["_id", "asc"]],
                    { $set: { identifications: identifications } },
                    { new: true }
                );

            res.send({
                status: "ok",
                message: count,
            });
        } catch (error) {
            res.send({
                status: "error",
                message: error,
            });
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
