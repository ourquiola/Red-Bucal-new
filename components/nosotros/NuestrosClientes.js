import React from "react";

const NuestrosClientes = () => {
    return (
        <div className="content">
            <h2>NUESTROS CLIENTES</h2>
            <div className="linea"></div>
            <div className="imagenes">
                <img src="/img/logos/_banescoSeguros.png" alt="fallo" />
                <img src="/img/logos/_westland.png" alt="error" />  
                <img src="/img/logos/_rigaServices.png" alt="error" />
                <img src="/img/logos/_ir.jpeg" alt="error" />

                <img src="/img/logos/_aliadoSeguros.png" alt="error" />
                <img src="/img/logos/_bancoDelta.png" alt="error" />
                <img src="/img/logos/_clinilab.png" alt="error" />
                <img src="/img/logos/_vivirSeguros.png" alt="error" />
                
                <img src="/img/logos/_itsPTY.png" alt="error" />
                <img src="/img/logos/_radimagen.png" alt="error" />
                <img src="/img/logos/_dentiClinica.png" alt="error" />
                <img src="/img/logos/_elCisne.png" alt="error" />                            
                
                <img src="/img/logos/_panamericanNetwork.png" alt="error" />
                <img src="/img/logos/_clinicaOrtodoncia.png" alt="error" />

            </div>

            <style jsx>{`
                .content {
                    display: grid;
                }
                img {
                    width: 220px;
                }
                
                .linea,
                h2 {
                    margin: 3rem 0;
                    grid-row: 1/2;
                    grid-column: 1/2;
                }

                .linea {
                    position: relative;
                    background: #66666699;
                    height: 2px;
                    width: 250px;
                    justify-self: flex-end;
                    align-self: center;
                }

                .linea:before {
                    content: "";
                    position: absolute;
                    transform: translateY(-45%);
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: var(--secondColor);
                }

                h2 {
                    align-self: center;
                    justify-self: center;
                    color: var(--mainColor);
                    font-weight: 700;
                    font-size: 60px;
                }

                p {
                    grid-column: 1/2;
                    grid-row: 2/3;
                    justify-self: center;
                    align-self: center;
                    text-align: center;
                    font-weight: 500;
                    width: 700px;
                    color: var(--mainColorClaro);
                }

                .imagenes {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                    grid-row-gap: 1rem;
                    grid-column-gap: 1rem;
                    margin-bottom: 2rem;
                }

                @media screen and (max-width: 1077px) {
                    .imagenes {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }

                @media screen and (max-width: 842px) {
                    .imagenes {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media screen and (max-width: 519px) {
                    .imagenes {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default NuestrosClientes;
