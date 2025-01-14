import withMiddleware from "../../middlewares/withMiddleware";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "PUT") {
        const { identification, state } = req.body;
        let count = {};

        const startDate = new Date();
        let endDate = new Date();
        endDate.setFullYear(endDate.getFullYear() + 1);
        endDate.setHours(23, 59, 59);

        if (state === false) {
            count = await req.db.collection("users").findAndModify(
                { identification: identification },
                [["_id", "asc"]],
                {
                    $set: {
                        service: false,
                        state: true,
                        start: startDate,
                        end: endDate,
                    },
                },
                { new: true }
            );
        }

        if (count.value.dependientes) {
            count.value.dependientes.forEach(async (dependiente) => {
                if (dependiente.state === false) {
                    await req.db
                        .collection("users")
                        .findAndModify(
                            { identification: dependiente.id },
                            [["_id", "asc"]],
                            {
                                $set: {
                                    service: false,
                                    state: true,
                                    start: startDate,
                                    end: endDate,
                                },
                            }
                        );
                }
            });
        }

        let dependientes = [];

        if (count.value.dependientes) {
            dependientes = count.value.dependientes.map((dep) => {
                dep.state = true;
                return dep;
            });
        }

        count = await req.db.collection("users").findAndModify(
            { identification },
            [["_id", "asc"]],
            {
                $set: {
                    dependientes,
                },
            },
            { new: true }
        );

        res.send({
            data: count.value,
            status: "ok",
        });
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
