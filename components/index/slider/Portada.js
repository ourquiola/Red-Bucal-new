import React from 'react'

const Portada = () => {
    return (
        <div className="content">
            <div className="arriba"></div>
            <div className="img"></div>
            <div className="color">
                <h1>
                    <span className="conectando">CONECTANDO</span>
                    <span className="sonrisas">SONRISAS</span>
                </h1>
                <h2>
                    CONFIANZA <span className="andpersand">&</span> SALUD
                </h2>
            </div>
            <div className="abajo"></div>

            <style jsx>{`
                :global(:root) {
                    --sizeLetter: 1;
                }

                .content {
                    background-image: url("/img/doctor-fondo1.jpg");
                    background-size: 100% auto;
                    background-position: center;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    grid-template-rows: 1fr calc(250px * var(--sizeLetter)) 2fr;
                    max-height: 630px;
                }

                .arriba {
                    grid-column: 1/2;
                    grid-row: 1/2;
                }

                .img {
                    background-image: url("/img/doctor1.png");
                    background-size: 100% auto;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 10;
                    grid-row: 1/4;
                    grid-column: 1/4;
                }

                .abajo {
                    grid-column: 1/2;
                    grid-row: 3/4;
                }

                .color {
                    position: relative;
                    background: var(--amarillo);
                    width: 90%;
                    border-radius: 0 30px 30px 0;
                    grid-row: 2/3;
                    grid-column: 1/4;
                    display: grid;
                    justify-items: flex-end;
                }

                h1 {
                    z-index: 20;
                    display: grid;
                    color: var(--mainColor);
                    height: 100%;
                    margin-right: 70px;
                }

                h2 {
                    z-index: 20;
                    position: absolute;
                    color: var(--mainColor);
                    right: 0;
                    font-weight: 300;
                    bottom: calc(-60px * var(--sizeLetter));
                    margin-right: 70px;
                    font-size: calc(45px * var(--sizeLetter));
                    transform: translate(calc(-100px * var(--sizeLetter)));
                }

                .andpersand {
                    font-weight: 500;
                }

                .conectando {
                    font-size: calc(90px * var(--sizeLetter));
                    font-weight: 300;
                    letter-spacing: calc(6.5px * var(--sizeLetter));
                    display: grid;
                    align-items: flex-end;
                }

                .sonrisas {
                    font-size: calc(130px * var(--sizeLetter));
                    font-weight: 700;
                    margin-top: calc(-50px * var(--sizeLetter));
                }

                @media screen and (max-width: 2960px) {
                    .content, .img {
                        background-size: auto 100%;
                    }
                }
                
                @media screen and (max-width: 1300px) {
                    .img, .content {
                        background-position-x: 25%;
                    }

                    .color {
                        width: 95%;
                    }

                    :global(:root) {
                        --sizeLetter: 0.8;
                    }
                }

                @media screen and (max-width: 1040px) {

                    :global(:root) {
                        --sizeLetter: 0.6;
                    }

                    h2 {
                        color: white
                    }
                }

                @media screen and (max-width: 915px) {

                    :global(:root) {
                        --sizeLetter: 0.5;
                    }

                }

                @media screen and (max-width: 690px) {

                    .img, .content {
                        background-position-x: 20%;
                    }   

                    :global(:root) {
                        --sizeLetter: 0.4;
                    }
                }

                @media screen and (max-width: 560px) {
                    h1, h2 {
                        margin-right: 20px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.3;
                    }

                }

                @media screen and (max-width: 480px) {

                    .img, .content {
                        background-position-x: 25%;
                    }                       

                    h1, h2 {
                        margin-right: 10px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.2;
                    }
                }

                @media screen and (max-width: 340px) {
                    .img, .content {
                        background-position-x: 28%; 
                    }

                    h1, h2 {
                        margin-right: 5px;
                    }

                }
 
            `}</style>
        </div>
    );
}

export default Portada
