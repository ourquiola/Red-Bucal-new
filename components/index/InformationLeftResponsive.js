import React from "react";

const InformationLeftResponsive = () => {
    return (
        <section className="content">
            <h3>
                <span className="nuestra">SONRISAS AL ACANCE</span>
                <span className="red">DE TODOS</span>
            </h3>
            <br />
            <div className="img"></div>

            <div className="info">
                <p>
                    Contamos con un plan dental a la medida de cada persona y de
                    cada empresa, que además de procurar la salud oral de sus
                    empleados y sus familias, generan en ellos vínculos de
                    lealtad que se traducen en su desempeño. A un bajo costo lo
                    que les permite tener importantes ahorros y la excelencia de
                    la atención de odontólogos generales y especialistas
                    capacitados.
                </p>
            </div>

            <style jsx>{`
                :global(:root) {
                    --sizeInfo: 1;
                }

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

                .nuestra {
                    position: relative;
                    align-self: flex-end;
                    font-size: calc(30px * var(--sizeInfo));
                    font-weight: 400;
                    letter-spacing: calc(5px * var(--sizeInfo));
                }

                .red {
                    font-size: calc(81px * var(--sizeInfo));
                    margin-top: calc(-30px * var(--sizeInfo));
                }

                .img {
                    height: 200px;
                    width: 100%;
                    background-image: url("/img/odontologo-cliente.png");
                    background-size: 150% auto;
                    background-position: center;
                }

                .info {
                    padding: 30px 40px;
                    position: relative;
                    background-repeat: no-repeat;
                    background-size: 100px;
                    background-position: bottom left;
                }

                p {
                    text-align: justify;
                    line-height: 25px;
                    color: var(--mainColor);
                }

                @media screen and (max-width: 850px) {
                    .content {
                        display: block;
                    }

                    .info {
                        margin-bottom: 50px;
                    }
                }

                @media screen and (max-width: 500px) {
                    .content {
                        width: 100%;
                    }
                }

                @media screen and (max-width: 420px) {
                    :global(:root) {
                        --sizeInfo: 0.8;
                    }
                }
            `}</style>
        </section>
    );
};

export default InformationLeftResponsive;
