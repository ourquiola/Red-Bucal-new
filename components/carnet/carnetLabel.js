import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const CarnetLabel = (props) => {
  const send = async () => {
    // Lógica para enviar el carnet
    const apiUrl = `/api/sendCarnet`;

    const params = {
      email:props.data.email,
      name:props.data.name,
      identification:props.data.identification,
      start:props.data.start,
      end:props.data.end,
      plan:props.data.plan
    };

    try {
      
      // Realizar la solicitud GET a tu API para obtener los bytes de la imagen
      const response = await axios.get(apiUrl, {
        params: params
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carnet enviado correctamente',
        showConfirmButton: false,
        timer: 1000
    })      

    } catch (error) {
      console.error('Error al enviar el carnet:', error);
    }

  };

  const handleClick = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    send(); // Invoca el método send
  };

  return (
    <label>
      <p>
        {props.data.state === false ? (
          "NO ES POSIBLE ENVIARLO HASTA CANCELAR"
        ) : (
          <a href='#' onClick={handleClick}>Enviar via Correo</a>
        )}
      </p>
      <style jsx>{`
                a {
                    color: var(--mainColorClaro);
                }
            `}</style>
    </label>
  );
};

export default CarnetLabel;
