import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Planes = (props) => {

    const router = useRouter()

    const contacto = () => {
        router.push("/contacto")
    }

    const registro = () => {
        router.push("/registro-ingreso")
    }

    return (
        <div className="content">

            <h3>{ props.title }</h3>
            <div className="img">
                <p>VALOR</p>
                <h5>{props.valor} USD / {props.fecha}</h5>
                <p>{props.colaborador}</p>
                <img className="pagos" src="/img/pagos-blanco.png" alt="metodos de pago"/>
            </div>
            <div className="text">
                <h4>{ props.tit1 }</h4>
                <p>{ props.text1 }</p>
                <button onClick={contacto} className="contacto">Contacto</button>
                <button onClick={registro} className="registro">Registro</button>
            </div>

            <style jsx>{`
                
                .content {
                    grid-row: 2/3;
                    justify-self: center;
                    grid-column: ${ props.position };
                    display: grid;
                    width: 550px;
                    grid-template-columns: .5fr 4.5fr .5fr;
                    grid-template-rows: 35px 35px 300px 300px;
                    justify-items: center;
                }

                h3 {
                    width: 100%;
                    grid-column: 2/3;
                    grid-row: 1/3;
                    color: var(--mainColor);
                    background: var(--amarillo);
                    text-align: center;
                    z-index: 10;
                    display: grid;
                    align-items: center;
                    font-size: 35px;
                    font-weight: 400;
                }

                .img {
                    width: 100%;
                    grid-column: 1/4;
                    grid-row: 2/4;
                    background-image: url(${ props.img });
                    background-size: 100% 100%;
                    box-shadow: 5px 5px 10px 0px #333333aa;
                    z-index: 5;

                    display: grid;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    color: white;
                }

                .img > p:nth-child(1) {
                    color: white;
                    align-self: flex-end;
                    font-size: 35px;
                    font-weight: 400;
                }

                .img > p:nth-child(3) {
                    color: white;
                    align-self: flex-start;
                    font-size: 20px;
                }

                .img > h5 {
                    font-size: 60px;
                    align-self: center;
                    margin: -30px 0;
                    font-weight: 500;
                }

                .text {
                    grid-column: 2/3;
                    grid-row: 4/5;
                    width: 100%;
                    background: var(--amarillo);
                    border-radius: 0 0 50px 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: .5fr .7fr .5fr;
                }

                h4 {
                    position: relative;
                    grid-column: 1/3;
                    margin: 20px 40px;
                    color: var(--mainColor);
                }

                h4:before {
                    position: absolute;
                    content: "";
                    width: 10px;
                    height: 10px;
                    background: white;
                    left: -20px;
                    top: 5px;
                    border-radius: 50%;
                }

                p {
                    grid-column: 1/3;
                    text-align: justify;
                    margin: 0 40px;
                    color: var(--mainColorClaro);
                }

                button {
                    width: 120px;
                    height: 30px;
                    justify-self: center;
                    align-self: center;
                    border: none;
                    border-radius: 40px;
                    color: white;
                    transition: background .3s;
                    cursor: pointer;
                    outline: none;
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

                .pagos {
                    height: 30px;
                }

                @media screen and (max-width: 1150px) {
                    .content {
                        grid-row: auto;
                        margin-bottom: 50px;
                        grid-column: 1/2;
                    }
                }

                @media screen and (max-width: 640px) {
                    .content {
                        width: 100%;
                    }

                    h3 {
                        grid-column: 1/4
                    }
                }
                @media screen and (max-width: 420px) {

                    .content {
                        grid-template-rows: 35px 35px 300px 370px;
                    }

                    .img h5 {
                        font-size: 45px;
                    }


                }

            `}</style>
        </div>
    )
}

export default Planes
