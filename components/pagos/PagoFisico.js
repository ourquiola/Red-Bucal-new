import React from "react";
import Link from "next/link";

const PagoFisico = (props) => {
    return (
        <div className="content">
            <section>
                <svg
                    onClick={() => {
                        props.changeFisico();
                    }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>

                <h3>PAGO FÍSICO</h3>

                <p>
                    Para realizar el pago de forma presencial acerquese a una de
                    nuestras sucursales. <br />
                    <br />
                    si cuenta con el plan empresarial, por favor contacte con el
                    asesor
                </p>

                <label>
                    Ver la ubicación de nuestras sucursales:
                    <br />
                    <br />
                    <br />
                    <a href="/red" target="_blank" rel="noopener noreferrer">
                        RED
                    </a>
                </label>
            </section>

            <style jsx>{`
                .content {
                    z-index: 1000;
                    background: #33333366;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    height: 100vh;
                }

                section {
                    display: grid;
                    grid-template-rows: 30px 1fr 1fr;
                    position: relative;
                    height: 220px;
                    width: 400px;
                    background: white;
                    border-radius: 30px;
                    padding: 30px;
                }

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform 0.5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                h3 {
                    text-align: center;
                    font-weight: 400;
                }

                p {
                    margin: 30px 20px;
                    font-size: 12px;
                    text-align: justify;
                }

                label {
                    text-align: center;
                    font-size: 12px;
                }

                a {
                    text-decoration: none;
                    color: white;
                    background: var(--amarillo);
                    padding: 5px 20px;
                    font-size: 16px;
                    border-radius: 20px;
                    transition: background 0.5s;
                }

                a:hover {
                    background: rgb(241, 178, 31);
                }
            `}</style>
        </div>
    );
};

export default PagoFisico;
