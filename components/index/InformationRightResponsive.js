import React from "react";

const InformationRightResponsive = () => {
    return (
        <section className="content">
            <div className="title">
                <div className="border"></div>
                <h3>
                    <span className="nuestra">NUESTRA</span>
                    <span className="red">RED</span>
                </h3>
                <div className="border"></div>
            </div>
            <br />
            <div className="img"></div>

            <div className="info">
                <p>
                    Somos quienes te conectan a una red robusta de servicios
                    odontológicos que ofrece excelencia dental con una amplia
                    cobertura a un precio muy accesible. Contamos con centros
                    listos para brindar la mejor solución de salud dental.
                    Nuestros especialistas garantizan servicios de calidad, y
                    nuestras locaciones y horarios facilitan flexibilidad al
                    paciente.
                </p>
            </div>

            <style jsx>{`
                .content {
                    width: 500px;
                    display: none;
                    margin: 50px auto;
                }

                h3 {
                    display: grid;
                    justify-items: center;
                    color: var(--mainColor);
                }

                .title {
                    display: grid;
                    grid-template-columns: 20px 1fr 20px;
                    position: relative;
                }

                .title:before {
                    content: "";
                    position: absolute;
                    width: 100px;
                    height: 5px;
                    background-color: var(--puntoRojo);
                    bottom: -5px;
                    left: 50%;
                    transform: translate(-50%);
                }

                .nuestra {
                    position: relative;
                    align-self: flex-end;
                    font-size: 30px;
                    font-weight: 400;
                    letter-spacing: 5px;
                }

                .red {
                    font-size: 90px;
                    margin-top: -30px;
                }

                .border {
                    background: var(--mainColor);
                }

                .img {
                    height: 200px;
                    width: 100%;
                    background-image: url("/img/tres-personas1.png");
                    background-size: 200% auto;
                    background-position: center top;
                }

                .info {
                    padding: 30px 40px;
                    position: relative;
                    background-image: url("/img/puntos4x3.png");
                    background-repeat: no-repeat;
                    background-size: 100px;
                    background-position: 0% 125%;
                }

                p {
                    margin-top: 20px;
                    text-align: justify;
                    line-height: 25px;
                    color: var(--mainColor);
                }

                .info:before {
                    content: "";
                    position: absolute;
                    width: 100px;
                    height: 5px;
                    background-color: var(--puntoRojo);
                    bottom: -5px;
                    left: 50%;
                    transform: translate(-50%);
                }

                @media screen and (max-width: 1180px) {
                    .content {
                        background-size: 100% auto;
                    }
                }

                @media screen and (max-width: 850px) {
                    .content {
                        display: block;
                    }
                }

                @media screen and (max-width: 500px) {
                    .content {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default InformationRightResponsive;
