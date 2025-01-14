import { createCanvas, loadImage, registerFont } from 'canvas';

export default async (req, res) => {

    try {

        console.log("Inicia Llamado Ping");

        if (req.method === "GET") {

            const { name, identification, start, end, plan } = req.query;

            try {
                // Registrar la fuente "Lato"
                registerFont('./public/fonts/Lato/Lato-Bold.ttf', { family: 'Lato', weight: 'bold' });

                // Registrar la fuente "David Libre"
                registerFont('./public/fonts/David_Libre/DavidLibre-Regular.ttf', { family: 'David Libre', weight: 'bold' });

                console.log("Registra Fuentes");

                // Agregar texto personalizado al lienzo
                const xCoord = 30;
                const yCoord = 320;
                const fontSizeName = 24;
                const fontSize = 16;
                const color = 'rgb(252,223,133)';
                const options = { month: 'long' };
                const locale = 'es-ES';
                // Cargar la plantilla de imagen
                const templatePath = './public/Template_V3.png'; // Ruta de la plantilla de imagen
                const templateImage =await loadImage(templatePath);

                console.log("Crear Canvas");
                // Crear un lienzo (canvas) para dibujar la imagen
                const canvas = createCanvas(templateImage.width, templateImage.height);
                const context = canvas.getContext('2d');

                const dateStart = new Date(start);
                let monthStart = dateStart.toLocaleString(locale, options);
                monthStart = monthStart.charAt(0).toUpperCase() + monthStart.slice(1).toLowerCase();
                const vigenciaStart = `${dateStart.getDate()} | ${monthStart} | ${dateStart.getFullYear()}`;

                const dateEnd = new Date(end);
                let monthEnd = dateEnd.toLocaleString(locale, options);
                monthEnd = monthEnd.charAt(0).toUpperCase() + monthEnd.slice(1).toLowerCase();
                const vigenciaEnd = `${dateEnd.getDate()} | ${monthEnd} | ${dateEnd.getFullYear()}`;

                // Dibujar la plantilla de imagen en el lienzo
                context.drawImage(templateImage, 0, 0);

                // Agregar texto personalizado al lienzo
                context.font = `${fontSizeName}px Lato`;
                context.fillStyle = color;
                context.fillText(`${name}`, xCoord, yCoord - 60);

                context.font = `${fontSize}px "David Libre"`;
                context.fillStyle = color;
                context.fillText(`Cédula: ${identification}`, xCoord, yCoord - 30);

                if (plan == "false") context.fillText(`Vigencia:  desde: ${vigenciaStart}   hasta: ${vigenciaEnd}`, xCoord, yCoord);
                else context.fillText(`Vigencia: ${vigenciaStart}`, xCoord, yCoord);

                // Generar los bytes de la imagen en formato PNG
                const imageBytes = canvas.toBuffer('image/png');

                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Disposition': 'attachment; filename=carnet.png',
                    'Content-Length': imageBytes.length
                });
                res.end(imageBytes, 'binary');

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
