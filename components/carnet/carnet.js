import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import axios from "axios";

const BotonAgregar = (props) => {

  const handleDescargarCarnet = async () => {

    const protocol = window.location.protocol;
    const server = window.location.host;

    const apiUrl = `${protocol}//${server}/api/generateCarnet`;     

    const params = {
      name: props.data.name,
      identification: props.data.identification,
      start:props.data.start,
      end: props.data.end,      
      plan:props.data.plan
    };

    try {
            
      // Realizar la solicitud GET a tu API para obtener los bytes de la imagen
      const response = await axios.get(apiUrl, {
        params: params,
        responseType: 'arraybuffer'
      });

      // Descargar la imagen
      const imageBlob = new Blob([response.data], { type: 'image/png' });
      saveAs(imageBlob, 'carnet.png');
      
    } catch (error) {
      console.log(error);
      console.error('Error al descargar el carnet:', error);
    }

  };

  return (
    <div>
      <a href="#" onClick={handleDescargarCarnet}>
        <div className="download">
          <div className="colorAzul"></div>
          <p>Descargar</p>
        </div>
      </a>
      <style jsx>{`
                section {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
                }		

                label {
                    margin: 10px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }
            `}</style>
    </div>

  );
};

export default BotonAgregar;
