import React from 'react'
import { useRouter } from 'next/router'

const NavUsuario = (props) => {

    const router = useRouter()

    const selection = (selector) => {
        return {
            fontWeight: selector === props.select ? '800' : '',
            margin: selector === props.select ? '-2px 0 -3px 0' : ''
        }
    }

    const logout = () => {
        sessionStorage.removeItem('tokenBusiness')
        router.replace("/")
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
                        <button onClick={() => { props.onClick(0) }} style={selection(0)}>INFORMACIÓN EMPRESARIAL</button>
                    </li>
                    <li>
                        <button onClick={() => { props.onClick(1) }} style={selection(1)}>FACTURACIÓN</button>
                    </li>
                    <li>
                        <button onClick={() => { props.onClick(2) }} style={selection(2)}>EMPLEADOS</button>
                    </li>
                    <li>
                        <button onClick={logout}>SALIR</button>
                    </li>
                </ul>
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
                
                
            `}</style>

        </div>
    )
}

export default NavUsuario
