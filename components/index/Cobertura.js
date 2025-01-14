import React from 'react'

const Cobertura = () => { 
    return (
        <div className="content">
            <h2>NUESTRA COBERTURA</h2>
            <div className="linea"></div>
            <p>Contamos con el Nuevo <b>Plan de Salud Premium: con los mejores Beneficios en Salud Dental y excelentes Beneficios en Medicina Preventiva General </b> 
            algunos de estos nuevos beneficios son: el costo fijo de B/. 5.00 para las consultas de Medicina General, Consultas especializadas , todo tipo de laboratorios 
            clínicos hablamos de mas de 350 tipos de laboratorios con cobertura del 25% y Exámenes de Imagenología de todo tipo hablamos de mas de 175 tipos de exámenes 
            con el 25% de cobertura de forma ilimitada en todo el año en nuestra red de clínicas.
            </p>
            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                }    

                .linea {
                    position: relative;
                    grid-column: 2/4;
                    grid-row: 1/2;
                    background: #33333399;
                    height: 2px;
                    width: 100%;
                    align-self: center;
                }

                .linea:before {
                    content: "";
                    position: absolute;
                    transform: translate(-50%, -45%);
                    width: 20px;
                    height: 20px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                }
                .linea:after {
                    content: "";
                    position: absolute;
                    transform: translate(50%, -45%);
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background: var(--puntoRojo);
                    border-radius: 50%;
                }

                h2 {
                    text-align: center;
                    z-index: 10;
                    grid-row: 1/2;
                    grid-column: 2/4;
                    font-size: 35px;
                    font-weight: 400;
                    color: var(--mainColor);
                    margin: 10px 0;
                    background: var(--amarillo);
                    padding: 10px 30px;
                    border-radius: 30px;
                }

                p {
                    margin-top: 20px;
                    text-align: justify;
                    grid-row: 2/3;
                    grid-column: 2/4;
                    line-height: 25px;
                    color: var(--mainColor);
                }

                @media screen and (max-width: 1180px) {

                    .content {
                        grid-template-columns: .5fr 2.25fr 2.25fr .5fr;
                    }
                } 	
                
            `}</style>
        </div>
    )
}

export default Cobertura
