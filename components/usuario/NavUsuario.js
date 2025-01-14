import React, { useState } from 'react'
import { useRouter } from 'next/router'

const NavUsuario = (props) => {

    const [activate, setactivate] = useState(false);
    const router = useRouter()

    const selection = (selector) => {
        return {
            fontWeight: selector === props.select ? '800' : '',
            margin: selector === props.select ? '-2px 0 -3px 0' : ''
        }
    }

    const logout = () => {
        sessionStorage.removeItem('tokenUser')
        router.replace("/")
    }

    const changeActivate = () => {
        setactivate(!activate)
    }

    return (
        <div className="content">

            <div className="puntos"></div>
            <nav>
                <ul>
                    <li>
                        <h2>{props.data.name}</h2>
                    </li>
                    <li>
                        <button onClick={() => { 
                            props.onClick(0) 
                            changeActivate()
                        }} style={selection(0)}>INFORMACIÓN DEL USUARIO</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            props.onClick(1)
                            changeActivate()
                        }} style={selection(1)}>FACTURACIÓN</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            props.onClick(2)
                            changeActivate()
                        }} style={selection(2)}>LIMPIEZA DENTAL</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            props.onClick(3)
                            changeActivate()
                        }} style={selection(3)}>HISTORIAL</button>
                    </li>
                    <li>
                        <button onClick={logout}>SALIR</button>
                    </li>
                </ul>
                <div className="activate">
                    <svg viewBox="0 0 512 512" onClick={changeActivate}>
                        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
                    </svg>
                </div>
            </nav>

            <div className="linea"></div>

            {props.children}

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 5.5fr 2px 11fr;
                }    

                .activate {
                    display: none;
                }

                .puntos {
                    background-image: url("/img/puntos8x3.png");
                    background-position: center;
                    background-size: 80% auto;
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
                }

                li {
                    list-style: none;
                    margin: 10px 0;
                }

                button, h2 {
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

                button:hover {
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                }

                h2 {
                    text-transform: uppercase;
                    background-color: var(--colorSelect);
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                    cursor: auto;
                }

                @media screen and (max-width: 900px) {

                    .content {
                        grid-template-columns: 11fr 1fr;
                    }

                    h2 {
                        border-radius: 0 15px 0 0;
                    }

                    nav {
                        grid-column: 1/2;
                        grid-row: 1/2;
                        z-idex: 1000;
                        position: fixed;
                        top: 50%;
                        left: 0;
                        margin: 0 30px 0 0;
                        transition: transform .5s, box-shadow 1s;
                        transform: ${activate ? 'translate(0, -50%)' : 'translate(-100%, -50%)'};
                        background-color: white;
                        border-radius: 0 30px 30px 0;
                        box-shadow: ${activate ? '5px 5px 20px 0px #33333366' : '0px 0px 0px 0px #33333322'};
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
                
                
            `}</style>
            
        </div>
    )
}

export default NavUsuario
