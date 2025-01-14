import React from "react";

const Portada = () => {
    return (
        <div className="content">
            <div className="silla"></div>
            <div className="arriba"></div>
            <div className="color">
                <div className="texts">
                    <h2>
                        <span className="nuestra">NUESTRA</span>
                        <span className="red">RED</span>
                    </h2>
                    <div className="line"></div>
                    <p>
                        Ofrecemos planes de beneficios dentales respaldados por
                        una red de clinicas a nivel nacional
                    </p>
                </div>
            </div>
            <div className="abajo"></div>

            <style jsx>{`
                :global(:root) {
                    --sizeLetter: 1;
                }

                .content {
                    background-image: url("/img/fondo-slider-2.jpg");
                    background-size: 100% auto;
                    background-position: center;
                    position: relative;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    grid-template-rows: 1fr calc(250px * var(--sizeLetter)) 1fr;
                    max-height: 630px;
                    background-repeat: no-repeat;
                }

                .silla {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background-image: url("/img/silla-slider-2.png");
                    background-size: 100% auto;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .texts {
                    justify-self: flex-start;
                    width: calc(700px * var(--sizeLetter));
                    display: grid;
                    grid-template-columns: auto 30px auto;
                    margin: 0 30px;
                }

                .line {
                    background-color: white;
                    margin: 0 13px;
                }

                .arriba {
                    grid-row: 1/2;
                }

                .abajo {
                    display: grid;
                    grid-row: 3/4;
                }

                .color {
                    background: var(--puntoAzul);
                    width: 90%;
                    justify-self: flex-end;
                    border-radius: 30px 0 0 30px;
                    grid-row: 2/3;
                    grid-column: 1/2;
                    display: grid;
                    justify-items: flex-start;
                    align-items: center;
                    justify-items: center;
                }

                h2 {
                    color: white;
                    display: grid;
                    text-align: center;
                    z-index: 10;
                }

                .nuestra {
                    font-size: calc(50px * var(--sizeLetter));
                    font-weight: 100;
                    margin-bottom: calc(-30px * var(--sizeLetter));
                }

                .red {
                    font-size: calc(110px * var(--sizeLetter));
                    font-weight: 700;
                }

                p {
                    color: white;
                    align-self: center;
                    font-size: calc(30px * var(--sizeLetter));
                    z-index: 10;
                    text-align: justify;
                }

                @media screen and (max-width: 1300px) {
                    :global(:root) {
                        --sizeLetter: 0.8;
                    }

                    .color {
                        width: 95%;
                    }
                }

                @media screen and (max-width: 1040px) {
                    :global(:root) {
                        --sizeLetter: 0.7;
                    }
                }

                @media screen and (max-width: 950px) {
                    :global(:root) {
                        --sizeLetter: 0.5;
                    }

                    .content,
                    .silla {
                        background-size: auto 100%;
                        background-position: right;
                    }
                }

                @media screen and (max-width: 690px) {
                    .img {
                        margin-left: -20px;
                        background-image: url("/img/doctor3.png");
                        width: 330px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.4;
                    }
                }

                @media screen and (max-width: 600px) {
                    .content,
                    .silla {
                        background-position: 80%;
                    }
                }
                @media screen and (max-width: 500px) {
                    .img {
                        margin-left: -60px;
                    }

                    h2,
                    h2 {
                        margin-right: 20px;
                    }
                }

                @media screen and (max-width: 415px) {
                    h2,
                    h2 {
                        margin-right: 10px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.3;
                    }
                }

                @media screen and (max-width: 340px) {
                    h2,
                    h2 {
                        margin-right: 5px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.28;
                    }
                }
            `}</style>
        </div>
    );
};

export default Portada;
