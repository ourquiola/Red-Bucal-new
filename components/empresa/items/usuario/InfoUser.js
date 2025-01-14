import React from 'react'

const InfoUser = (props) => {
    return (
        <div className="content">

            <section>
                <svg onClick={props.activeInfo} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>
                <label className="title">{props.usuarios.name}</label>
                <label>
                    ESTADO:
                <p>{props.usuarios.state ? 'ACTIVO' : 'INACTIVO'}</p>
                </label>
                <label>
                    CEDULA:
                <p>{props.usuarios.identification}</p>
                </label>
                <label>
                    FECHA DE NACIMIENTO:
                <p>{props.usuarios.birthdate}</p>
                </label>
                <label>
                    CELULAR:
                <p>{props.usuarios.phone}</p>
                </label>
                <label>
                    DIRECCIÓN:
                <p>{props.usuarios.adress}</p>
                </label>
                <label>
                    CORREO:
                <p>{props.usuarios.email}</p>
                </label>
            </section>
            
            <style jsx>{`
                
                .content {
                    top: 0;
                    left: 0;
                    position: fixed;
                    background: #33333388;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }    

                .title {
                    margin: 0 0 30px 0 ;
                    grid-column: 1/3;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 700;

                }

                svg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 30px;
                    color: var(--puntoRojo);
                    margin: 20px;
                    cursor: pointer;
                }

                section {
                    position: relative;
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                    background: white;
                    padding: 30px;
                    border-radius: 30px;

                }    

                label {
                    margin: 10px 20px;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }
                
            `}</style>
        </div>
    )
}

export default InfoUser
