import React from 'react'
import { useRouter } from 'next/router'

const Empresas = () => {

    const router = useRouter()

    const contacto = () => {
        router.push("/contacto")
    }

    const registro = () => {
        router.push("/registro-ingreso")
    }

    return (
        <section className="content">

            <div className="img"></div>
            <div className="text">
                <hgroup>
                    <h2>PLAN EMPRESAS</h2>
                    <h3>CONFIANZA & AYUDA</h3>
                </hgroup>
                <p>Con el objetivo de brindarle apoyo en mantener su Salud General, 
                    le ofrecemos nuestro {" "}<strong>Plan Empresas</strong> {" "} a un bajo costo con Beneficios 
                    de Salud Dental y Beneficios en Medicina Preventiva y/o gastos inesperados, 
                    generando  vínculos de lealtad en todos nuestros clientes.</p>
                <div className="botones">
                    <button onClick={contacto} className="contacto">Contacto</button>
                    <button onClick={registro} className="registro">Registro</button>
                </div>
                <div className="puntos"></div>
                <div className="cuadro"></div>
            </div>

            <style jsx>{`
                
                .content {
                    padding-top: 150px;
                    height: 450px;
                    display: grid;
                    grid-template-columns: 2fr 1.5fr;
                }    

                .img {
                    background-image: url("/img/empresas.png");
                    background-size: 100% 100%;
                }

                .text {
                    position: relative;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr;
                }

                .puntos {
                    position: absolute;
                    width: 30px;
                    height: 150px;
                    background-image: url("/img/puntos8x2.png");
                    background-size: 100% 100%;
                    right: 0;
                    top: 50px;
                }

                .cuadro {
                    position: absolute;
                    height: 70px;
                    width: 80px;
                    border-top: 2px solid #33333377;
                    border-left:2px solid #33333377;
                    bottom: 0;
                    right: 0;
                }

                hgroup {
                    align-self: flex-end;
                }

                h2 {
                    position: relative;
                    color: var(--mainColor);
                    font-size: 60px;
                }

                h2:before {
                    position: absolute;
                    content: "";
                    height: 20px;
                    width: 20px;
                    background-color: var(--puntoRojo);
                    right: 50%;
                    top: -50px;
                    border-radius: 50%;
                }

                h3 {
                    color: var(--mainColor);
                    font-size: 30px;
                    font-weight: 400;
                    margin-top: -15px;
                }

                p {
                    text-align: justify;
                    margin-top: 20px;
                    margin-right: 80px;
                }

                .botones {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                }

                button {
                    position: relative;
                    border: none;
                    outline: none;
                    color: white;
                    justify-self: center;
                    width: 120px;
                    height: 35px;
                    transition: background .3s;
                    margin-right: 50px;
                    cursor: pointer;
                    border-radius: 30px;
                }

                .contacto {
                    background: var(--puntoAzul);
                }

                .registro {
                    background: var(--puntoRojo);
                }

                .contacto:hover {
                    background: var(--botonesHover);
                }

                .registro:hover {
                     background: var(--botonesRegistro);
                }

                button:nth-child(1):before {
                    position: absolute;
                    content: "";
                    height: 20px;
                    width: 20px;
                    background-color: var(--puntoAzul);
                    border-radius: 50%;
                    right: -50%;
                    z-index: -1;
                }

                @media screen and (max-width: 850px) {
                    .content {
                        display: none;
                    }
                }
                
                
            `}</style>
        </section>
    )
}

export default Empresas
