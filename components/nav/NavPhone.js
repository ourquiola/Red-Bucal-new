import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const NavPhone = () => {

    const [active, setActive] = useState(false)
    const [url, setUrl] = useState('');

    const changeActive = () => {
        setActive(!active)
    }

    useEffect(() => {
        const path = window.location.pathname;
        setUrl(path)
    }, []);

    const validateUrl = (urlActual) => {
        return {
            fontWeight: url === urlActual ? '800' : ''
        }
    }
    const validateUrlPlanes = (urlActual1, urlActual2) => {
        return {
            fontWeight: (url === urlActual1) || (url === urlActual2) ? '800' : ''
        }
    }

    return (
        <header>
            <Head>
                <title>Red Bucal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> 

            <Link href="/">
                <a>
                    <img src="/img/Capa-2.png" alt="Logo"/>
                </a>
            </Link>
            <button className="menu">
                <svg onClick={changeActive} viewBox="0 0 448 512">
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                </svg>
            </button>
            <nav>
                <svg onClick={changeActive} viewBox="0 0 352 512">
                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
                <ul>
                    <br/>
                    <Link href="/">
                        <a>
                            <li style={validateUrl('/')}>INICIO</li>
                        </a>
                    </Link>
                    <div className="linea"></div>
                    <li>
                        <ul>
                            <li style={validateUrlPlanes('/planes/personas-familias','/planes/empresarial')}><div>PLANES <span>▼</span></div></li>
                            <div className="linea"></div>
                            <Link href="/planes/personas-familias">
                                <a>
                                    <li style={validateUrl('/planes/personas-familias')}>PLAN PREMIUM</li>
                                </a>
                            </Link>
                            <div className="linea"></div>
                            <Link href="/planes/empresarial">
                                <a>
                                    <li style={validateUrl('/planes/empresarial')}>PLAN EMPRESAS</li>
                                </a>
                            </Link>
                        </ul>
                    </li>
                    <div className="linea"></div>
                    <Link href="/red">
                        <a>
                            <li style={validateUrl('/red')}>RED</li>
                        </a>
                    </Link>
                    <div className="linea"></div>

                    <li>
                        <ul>
                            <li style={validateUrlPlanes('/beneficios','/prevencion')}><div>BENEFICIOS <span>▼</span></div></li>
                            <div className="linea"></div>
                            <Link href="/beneficios">
                                <a>
                                    <li style={validateUrl('/beneficios')}>SALUD DENTAL</li>
                                </a>
                            </Link>
                            <div className="linea"></div>
                            <Link href="/prevencion">
                                <a>
                                    <li style={validateUrl('/prevencion')}>MEDICINA GENERAL</li>
                                </a>
                            </Link>
                        </ul>
                    </li>

                    <div className="linea"></div>
                    <Link href="/nosotros">
                        <a>
                            <li style={validateUrl('/nosotros')}>NOSOTROS</li>
                        </a>
                    </Link>
                    <div className="linea"></div>
                    <Link href="/contacto">
                        <a>
                            <li style={validateUrl('/contacto')}>CONTACTO</li>
                        </a>
                    </Link>
                </ul>
                <div className="final">
                    <Link href="/registro-ingreso">
                        <a>
                            <svg className="user" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                            </svg>
                        </a>
                    </Link>
                </div>

            </nav>

            <style jsx>{`

                .weight {
                    font-weight: 700;
                    color: red;
                }
                
                header {
                    position: absolute;
                    z-index: 999;
                    top: 0;
                    width: 100%;
                    height: 100px;
                }

                header > button {
                    position: fixed;
                    right: 0;
                    top: 0;
                    width: 60px;
                    height: 60px;
                    color: var(--mainColor);
                    margin-top: 20px;
                    margin-right: 20px;
                    cursor: pointer;
                    background: white;
                    border: none;
                    border-radius: 50%;
                    box-shadow: -2px 2px 10px 0px #333333bb;
                    outline: none;

                }

                button > svg {
                    width: 30px;
                }

                header > a {
                    postion: absolute;
                    top: 0;
                    left: 0;
                    margin-top: 20px;
                    margin-left: 20px;
                    height: 85px;
                    width: 239px;
                }

                img {
                    margin-top: 20px;
                    margin-left: 20px;
                }

                nav {
                    z-index: 1000;
                    border-radius: 40px 0 0 45px;
                    background-color: var(--mainColor);
                    display: grid;
                    grid-template-rows: 1fr 66px;
                    position: fixed;
                    width: 50vw;
                    top: 0;
                    right: 0;
                    transition: transform .5s ease;
                    transform: ${active ? 'translateX(0)' : 'translateX(100%)'};
                    box-shadow: ${ active ? '-6px 6px 16px 0px #33333399' : ''};
                }

                nav > ul {
                    padding: 20px 40px 0px;
                }

                li {
                    display: grid;
                    align-items: center;
                    height: 65px;
                }

                nav > ul > li{
                    height: 65px;
                    width: 100%;
                    transition: height .5s;
                }

                nav > ul > li:hover {
                    height: 196px;
                }

                ul > li > ul {
                    height: 65px;
                    align-self: flex-start;
                    overflow: hidden;
                    transition: height .5s;
                    padding-left: 20px;
                }

                nav > ul > li:hover > ul {
                    height: 196px;
                }

                li > ul > li {
                    transform: translate(-20px);
                }

                .linea {
                    background-color: white;
                    width: 100%;
                    height: 1px;
                }

                span {
                    font-size: 10px;
                }

                nav > svg {
                    width: 20px;
                    color: white;
                    position: absolute;
                    top: 20px;
                    right: 40px;
                }

                a {
                    text-decoration: none;
                    color: white;
                }

                ul {
                    color: white;
                    list-style: none;
                }

                .final {
                    background-color: white;
                    border-radius: 0 0 0 40px;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                }

                .user {
                    color: var(--mainColor);
                    height: 40px;
                }

                @media screen and (max-width: 426px) {
                    nav > ul {
                        padding: 10px 20px 0;
                    }
                }
                
                
            `}</style>


            <style jsx>{`
                :global(*) {
                    margin: 0;
                    padding: 0;
                }

                :global(:root) {
                    --sizeNav: .9;
                    --mainColor: #091C47;
                    --mainColorClaro: #091C47aa;
                    --secondColor: rgb(255, 134, 114);
                    --amarillo: rgb(255, 199, 68);
                    --puntoRojo: #D97C6E;
                    --puntoAzul: #00A5CF;
                    --fondoAzul: rgb(0, 165, 207);
                    --colorSelect: rgb(122, 208, 229);
                    --botonesHover:  rgb(2, 132, 165);
                    --botonesRegistro: rgb(218, 92, 70);
                    --botonesText: #091C47;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                @media screen and (min-width: 851px) {
                    header {
                        display: none
                    }
                }

                @media screen and (max-width: 426px) {
                    header > a {
                        width: 150px;
                    }

                    img {
                        width: 150px;
                    }
                    nav > ul {
                        padding: 0;
                    }
                }

            `}</style>


        </header>
    )
}

export default NavPhone
