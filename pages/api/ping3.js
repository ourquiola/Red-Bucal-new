export default async (req, res) => {

    try {

        console.log("Inicia Llamado Ping");

        if (req.method === "GET") {

            try {
                res.status(200).json({
                    status: "success",
                    message: "Sin Importaciones",
                });
            } catch (error) {
                // Manejar la excepción
                console.error('Error en generateImage:', error);
                res.status(500).json({
                    status: "error",
                    message: error,
                });
            }
        } else {
            res.status(405).end();
        }
    }
    catch (error) {
        console.error('Error init:', error);
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
};
