import React, { useState } from 'react'
import { useRouter } from 'next/router'

const NavUsuario = (props) => {

    const [copy, setCopy] = useState(false)

    const router = useRouter()

    const selection = (selector) => {
        return {
            fontWeight: selector === props.select ? '800' : '',
            margin: selector === props.select ? '-2px 0 -3px 0' : ''
        }
    }

    const logout = () => {
        sessionStorage.removeItem('tokenAdmin')
        router.replace("/")
    }

    const copyText = () => {

        var aux = document.createElement("input");

        aux.setAttribute("value", `https://redbucal.com/registro-ingreso?afiliacion=${props.adminData.name.replaceAll(' ', '-')}`);

        document.body.appendChild(aux);

        aux.select();

        document.execCommand("copy");

        document.body.removeChild(aux);
        setCopy(true)

    }

    return (
        <div className="content">

            <div className="diente1"></div>
            <nav>
                <button onClick={copyText} className='copy'>{ copy ? 'link de registro afiliado copiado' : 'Copiar link de registro afiliado'}</button>
                {
                    props.user === 0 
                    ?
                        <ul>
                            <li>
                                <h2>{props.adminData.name}</h2>
                            </li>
                            <li>
                                <button onClick={() => { 
                                    props.onClick(0)
                                    props.changeActivate()
                                }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                            </li>
                            <li>
                                <button onClick={logout}>SALIR</button>
                            </li>
                        </ul>
                        : props.user === 1 ?
                        <ul>
                            <li>
                                <h2>{props.adminData.name}</h2>
                            </li>
                            <li>
                                <button onClick={() => { 
                                   props.onClick(0)
                                   props.changeActivate()
                                }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                            </li>
                            <li>
                                <button onClick={() => { 
                                   props.onClick(1)
                                   props.changeActivate()
                                }} style={selection(1)}>INFORMACIÓN DEL USUARIO</button>
                            </li>
                            <li>
                                <button onClick={() => { 
                                   props.onClick(2)
                                   props.changeActivate()
                                }} style={selection(2)}>FACTURACIÓN</button>
                            </li>
                            <li>
                                <button onClick={() => { 
                                   props.onClick(3)
                                   props.changeActivate()
                                }} style={selection(3)}>SERVICIOS</button>
                            </li>
                            <li>
                                <button onClick={() => { 
                                   props.onClick(4)
                                   props.changeActivate()
                                }} style={selection(4)}>HISTORIAL</button>
                            </li>
                            <li>
                                <button onClick={logout}>SALIR</button>
                            </li>
                        </ul>
                        :
                        <ul>
                            <li>
                                <h2>{props.adminData.name}</h2>
                            </li>
                            <li>
                                <button onClick={() => {
                                    props.onClick(0)
                                    props.changeActivate()
                                }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                            </li>
                            <li>
                                <button onClick={() => {
                                    props.onClick(1)
                                    props.changeActivate()
                                }} style={selection(1)}>INFORMACIÓN EMPRESARIAL</button>
                            </li>
                            <li>
                                <button onClick={() => {
                                    props.onClick(2)
                                    props.changeActivate()
                                }} style={selection(2)}>FACTURACIÓN</button>
                            </li>
                            {/* 
                            <li>
                                <button onClick={() => { props.onClick(3) }} style={selection(3)}>SERVICIOS</button>
                            </li>
                            <li>
                                <button onClick={() => { props.onClick(4) }} style={selection(4)}>HISTORIAL</button>
                            </li> */}
                            <li>
                                <button onClick={logout}>SALIR</button>
                            </li>
                        </ul>
                }

                <div className="activate">
                    <svg viewBox="0 0 512 512" onClick={() => {props.changeActivate()}}>
                        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
                    </svg>
                </div>
                
            </nav>

            <div className="linea"></div>

            {props.children}

            <div className="diente2"></div>

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 6fr 2px 9.5fr 1fr;
                }    

                .activate {
                    display: none;
                }

                .diente1 {
                    background-image: url("/img/medio-diente4.png");
                    background-position: center right;
                    background-size: 130% auto;
                    background-repeat: no-repeat;
                    margin-right: 20px;
                }

                .diente2 {
                    background-image: url("/img/medio-diente3.png");
                    background-position: center;
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                }

                .linea {
                    height: 40%;
                    align-self: center;
                    background-color: var(--mainColorClaro);
                }

                nav {
                    align-self: center;
                    margin: 0 50px;
                    position: relative;
                }

                li {
                    list-style: none;
                    margin: 10px 0;
                }

                ul button, h2 {
                    text-align: left;
                    border: none;
                    background-color: white;
                    color: var(--mainColor);
                    font-size: 18px;
                    padding: 10px 20px;
                    transition: background-color .3s;
                    outline: none;
                    cursor: pointer;
                }

                ul button:hover {
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                }

                h2 {
                    background-color: var(--colorSelect);
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                    cursor: auto;
                }

                .copy {
                    border: none;
                    background-color: ${copy ? '#E36B59' : 'var(--puntoRojo)'};
                    color: white;
                    padding: 10px;
                    cursor: pointer;
                    border-radius: 10px;
                    outline: none;
                    transition: background-color .5s;
                }

                .copy:hover {
                    background-color: #E36B59
                }

                @media screen and (max-width: 900px) {

                    .content {
                        grid-template-columns: 11fr 1fr;
                    }

                    h2 {
                        border-radius: 0 15px 0 0;
                    }

                    nav {
                        z-index: 1000;
                        grid-column: 1/2;
                        grid-row: 1/2;
                        z-idex: 1000;
                        position: fixed;
                        top: 50%;
                        left: 0;
                        margin: 0 30px 0 0;
                        transition: transform .5s, box-shadow 1s;
                        transform: ${props.activate ? 'translate(0, -50%)' : 'translate(-100%, -50%)'};
                        background-color: white;
                        border-radius: 0 30px 30px 0;
                        box-shadow: ${props.activate ? '5px 5px 20px 0px #33333366' : '0px 0px 0px 0px #33333322'};
                    }

                    .diente1 {
                        display: none;
                    }

                    .puntos {
                        grid-column: 2/3;
                        grid-row: 1/2;
                    }

                    .activate {
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        z-index: 1001;
                        position: absolute;
                        right: 0px;
                        top: 50%;
                        transform: translate(100%, -50%);
                        height: 100px;
                        width: 30px;
                        border-radius: 0 20px 20px 0;
                        box-shadow: 5px 5px 10px 0px #33333355;
                        background: var(--amarillo);
                        color: white;

                    }

                    svg {
                        width: 20px;
                        transition: transform 2s;
                        transform: ${props.activate ? 'rotate(180deg)' : 'rotate(0deg)' };      
                    }

                    .linea {
                        display: none;
                    }
                }

                @media screen and (max-width: 600px) {

                    .content {
                        grid-template-columns: 1fr;
                    }

                    .diente2 {
                        z-index: -1;
                        position: fixed;
                        right: 0;
                        top: 50%;
                        height: 300px;
                        width: 100px;
                        transform: translateY(-50%);
                        background-size: auto 100%;
                        background-position: right center;
                        padding: 0;
                    }
                }
                
                
            `}</style>

        </div>
    )
}

export default NavUsuario
