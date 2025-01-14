import React from "react";

const EmpresasResponsive = () => {
    return (
        <section className="content">
            <hgroup>
                <h2>PLAN EMPRESAS</h2>
                <h3>CONFIANZA & AYUDA</h3>
            </hgroup>
            <br />
            <div className="img"></div>

            <div className="info">
                <p>
                Con el objetivo de brindarle apoyo en mantener su Salud General, 
                le ofrecemos  nuestro {" "}<strong>Plan Empresas</strong> {" "}
                a un bajo costo con Beneficios de Salud Dental y Beneficios en 
                Medicina Preventiva y/o gastos inesperados, generando  vínculos 
                de lealtad en todos nuestros clientes.
                </p>
            </div>

            <style jsx>{`
                :global(:root) {
                    --sizeInfo: 1;
                }

                .content {
                    width: 500px;
                    display: none;
                    margin: 150px auto 50px;
                }

                h3 {
                    display: grid;
                    justify-items: center;
                    color: var(--mainColor);
                }

                hgroup {
                    align-self: flex-end;
                    position: relative;
                    padding-bottom: 10px;
                    margin-bottom: 30px;
                }

                hgroup:before {
                    content: "";
                    position: absolute;
                    width: 100px;
                    height: 5px;
                    background-color: var(--puntoRojo);
                    bottom: -5px;
                    left: 50%;
                    transform: translate(-50%);
                }

                h2 {
                    text-align: center;
                    position: relative;
                    color: var(--mainColor);
                    font-size: 60px;
                }

                h3 {
                    color: var(--mainColor);
                    font-size: 30px;
                    font-weight: 400;
                    margin-top: -15px;
                }

                .img {
                    height: 200px;
                    width: 100%;
                    background-image: url("/img/instrumentos.png");
                    background-size: 100% auto;
                    background-position: center top;
                }

                .info {
                    padding: 30px 40px;
                    position: relative;
                    background-repeat: no-repeat;
                    background-size: 100px;
                    background-position: bottom left;
                }

                p {
                    margin-top: 20px;
                    text-align: justify;
                    line-height: 25px;
                    color: var(--mainColor);
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

                @media screen and (max-width: 420px) {
                    :global(:root) {
                        --sizeInfo: 0.8;
                    }
                }
            `}</style>
        </section>
    );
};

export default EmpresasResponsive;
