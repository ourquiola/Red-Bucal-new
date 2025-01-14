import withMiddleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "PUT") {
        let { identification, historial, fecha, hora, tratamiento } = req.body;
        console.log(historial);

        if (!historial) {
            historial = [];
        }

        let newHistorial = historial;

        newHistorial.unshift({
            fecha,
            hora,
            tratamiento,
        });

        console.log(newHistorial);

        const count = await req.db
            .collection("users")
            .findAndModify(
                { identification: identification },
                [["_id", "asc"]],
                { $set: { historial: newHistorial } },
                { new: true }
            );
        console.log(count.value);

        res.send({
            data: count.value,
            status: "ok",
        });
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
