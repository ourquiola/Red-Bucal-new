import React from "react";

const FamiliasResponsive = () => {
    return (
        <section className="content">
            <div className="box">
                <h2>
                    <span className="personas">PLAN</span>
                    <span className="familias">PREMIUM</span>
                </h2>
            </div>
            <br />
            <div className="img"></div>
            <h3>CONFIANZA & AYUDA</h3>
            <div className="info">
                <p> Con el objetivo de brindarle seguridad al mantener su salud bucal 
                    y la de su familia le ofrecemos nuestro {" "}<strong>Plan Premium</strong> {" "}
                    para así apoyarle con tratamientos preventivos y/o gastos dentales inesperados.
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

                .box {
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                    position: relative;
                }

                .box:before {
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
                    position: relative;
                    color: var(--mainColor);
                    display: grid;
                    text-align: center;
                }

                h2:before {
                    position: absolute;
                    content: "";
                    height: 25px;
                    width: 25px;
                    background: var(--puntoRojo);
                    border-radius: 50%;
                    left: 60px;
                    bottom: -45px;
                }

                h2:after {
                    position: absolute;
                    content: "";
                    height: 25px;
                    width: 25px;
                    background: var(--puntoRojo);
                    border-radius: 50%;
                    right: 60px;
                    top: -35px;
                }

                h3 {
                    margin-top: 30px;
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 35px;
                    font-weight: 400;
                }

                .personas {
                    font-size: calc(80px * var(--sizeInfo));
                    position: relative;
                }

                .personas:after {
                    position: absolute;
                    content: "";
                    height: 35px;
                    width: 35px;
                    background: var(--puntoAzul);
                    border-top-left-radius: 50%;
                    border-bottom-left-radius: 50%;
                    border-top-right-radius: 50%;
                    border-bottom-right-radius: 50%;
                    right: 0px;
                    top: -55px;
                    transform: translate(50%);
                }

                .personas:before {
                    position: absolute;
                    content: "";
                    height: 35px;
                    width: 35px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                    left: 0px;
                    bottom: -75px;
                    transform: translate(-50%);
                }

                .familias {
                    font-size: calc(72px * var(--sizeInfo));
                    margin-top: calc(-35px * var(--sizeInfo));
                }

                .img {
                    height: 200px;
                    width: 100%;
                    background-image: url("/img/familia.png");
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

                    .personas:after {
                        height: 40px;
                        width: 20px;
                        border-top-left-radius: 100% 50%;
                        border-bottom-left-radius: 100% 50%;
                        border-top-right-radius: 0%;
                        border-bottom-right-radius: 0%;
                        transform: translate(0%);
                    }
                }

                @media screen and (max-width: 420px) {
                    :global(:root) {
                        --sizeInfo: 0.8;
                    }
                }

                @media screen and (max-width: 340px) {
                    :global(:root) {
                        --sizeInfo: 0.75;
                    }
                }
            `}</style>
        </section>
    );
};

export default FamiliasResponsive;
