import { generateImage } from '../../utils/imageUtils';

export default async (req, res) => {
    if (req.method === "GET") {
        
        const { name, identification,start, end,plan } = req.query;

        // Generar la imagen utilizando los parámetros recibidos
        const imageBytes = await generateImage(name.trim(), identification.trim(),start.trim(), end.trim(),plan);

        // Devolver los bytes de la imagen en la respuesta
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Disposition': 'attachment; filename=carnet.png',
            'Content-Length': imageBytes.length
        });
        res.end(imageBytes, 'binary');
    } else {
        res.status(405).end();
    }
};
