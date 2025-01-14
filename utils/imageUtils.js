import { createCanvas, loadImage, registerFont } from 'canvas';

export async function generateImage(name, identification, start, end, plan) {

  try {
    // Registrar la fuente "Avenir Next"
    registerFont('./public/fonts/Avenir/AvenirNextLTPro-Regular.ttf', { family: 'Open Sans', weight: 'normal' });
    registerFont('./public/fonts/Avenir/AvenirNextLTPro-Bold.ttf', { family: 'Open Sans', weight: 'bold' });

    // Función para configurar el estilo de la fuente
    function setFontStyle(context, size, weight, fontFamily) {
      context.font = `${weight} ${size}px "${fontFamily}"`;
    }

    // Agregar texto personalizado al lienzo
    const xCoord = 45;
    const yCoord = 170;
    const fontSizeName = 18;
    const fontSize = 12;
    const color = 'white';
    const options = { month: 'long' };
    const locale = 'es-ES';
    // Cargar la plantilla de imagen
    const templatePath = './public/Template_V5.png'; // Ruta de la plantilla de imagen
    const templateImage = await loadImage(templatePath);

    // Crear un lienzo (canvas) para dibujar la imagen
    const canvas = createCanvas(templateImage.width, templateImage.height);
    const context = canvas.getContext('2d');

    const dateStart = new Date(start);
    let monthStart = dateStart.toLocaleString(locale, options);
    monthStart = monthStart.charAt(0).toUpperCase() + monthStart.slice(1).toLowerCase();
    const vigenciaStart = `${dateStart.getDate()} ${monthStart} ${dateStart.getFullYear()}`;

    const dateEnd = new Date(end);
    let monthEnd = dateEnd.toLocaleString(locale, options);
    monthEnd = monthEnd.charAt(0).toUpperCase() + monthEnd.slice(1).toLowerCase();
    const vigenciaEnd = `${dateEnd.getDate()} ${monthEnd} ${dateEnd.getFullYear()}`;

    // Dibujar la plantilla de imagen en el lienzo
    context.drawImage(templateImage, 0, 0);

    // Agregar texto personalizado al lienzo
    setFontStyle(context, fontSizeName, 'bold', 'Avenir Next');
    context.fillStyle = color;
    context.fillText(`${name}`, xCoord, yCoord - 35);

    setFontStyle(context, fontSize, 'normal', 'Avenir Next');
    context.fillStyle = color;
    context.fillText(`Cédula: ${identification}`, xCoord, yCoord - 17);

    if (plan == "false") context.fillText(`Vigencia desde ${vigenciaStart} hasta ${vigenciaEnd}`, xCoord, yCoord);
    else context.fillText(`Vigencia: ${vigenciaStart}`, xCoord, yCoord);

    // Generar los bytes de la imagen en formato PNG
    const imageBytes = canvas.toBuffer('image/png');

    return imageBytes;
  } catch (error) {
    // Manejar la excepción
    console.error('Error en generateImage:', error);
    throw error; // Re-lanzar la excepción para que el código que llamó a la función también pueda manejarla
  }
}
