import React from 'react'

const InformationBusiness = (props) => {

    return (
        <section>
            <label>
                ESTADO:
                <p>{props.data.state ? 'ACTIVO' : 'INACTIVO'}</p>
            </label>
            <label>
                CEDULA:
                <p>{props.data.RUC}</p>
            </label>
            <label>
                EMPLEADOS:
                <p>{props.data.identifications ? props.data.identifications.length : '---'}</p>
            </label>
            <label>
                CELULAR:
                <p>{props.data.businessPhone}</p>
            </label>
            <label>
                DIRECCIÓN:
                <p>{props.data.businessAdress}</p>
            </label>
            <label>
                CORREO:
                <p>{props.data.businessMail}</p>
            </label>

            <style jsx>{`
                
            section {
                align-self: center;
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin: 0 50px;
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
        </section>
    )
}

export default InformationBusiness
