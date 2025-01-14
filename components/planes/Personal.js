import React from 'react'
import { useRouter } from 'next/router'

const Personal = (props) => {

    const router = useRouter()

    const contacto = () => {
        router.replace("/contacto")
    }

    const registro = () => {
        router.replace("/registro-ingreso")
    }

    return (
        <section className="content">

            <div className="img"></div>
            <div className="text">
                <h3></h3>
                <h2>{props.title}</h2>
                <ul>
                    <li>
                        <p>Nuestra misión es facilitar las visitas al odontólogo y que estas a su vez sean más serviciales y amigables para ustedes.</p>
                    </li>
                    <li>
                        <h5>Especialidades</h5>
                        <p>En nuestras sucursales afiliadas conseguirá un equipo altamente calificado integrado por distintas especialidades como ortodoncia, odontología general, diseño de sonrisa, odontopediatría, especialista en endodoncia, prótesis fija y removible, especialista en periodoncia, cirujanos maxilofaciales.</p>
                    </li>
                </ul>

                <div className="botones">
                    <button onClick={contacto} className="contacto">Contacto</button>
                    <button onClick={registro} className="registro">Registro</button>
                </div>
            </div>
            <div className="borde"></div>

            <style jsx>{`
                
                .content {
                    margin-top: ${props.margin};
                    height: 120vh;
                    display: grid;
                    grid-template-columns: ${props.ubicacion};
                    color: var(--mainColor);
                }

                .img {
                    background-image: url(${props.imgBig});
                    background-size: 100% auto; 
                    background-position: bottom;
                    background-repeat: no-repeat;
                    background-position: center;
                    grid-row: 1/2;
                    grid-column: ${props.img};
                }

                .borde {
                    width: 20px;
                    height: 300px;
                    background-color: rgb(0, 165, 207);
                    justify-self: ${props.bordeJust};
                    grid-column: ${props.borde};
                }

                .text {
                    display: grid;
                    grid-template-rows: 1fr 1fr 2.5fr 1fr;
                    ${props.padding}
                    background-image: url(${props.diente});
                    background-repeat: no-repeat;
                    background-position: ${props.dienteDirect};
                    background-size: auto 45%;
                    grid-row: 1/2;
                    grid-column: ${props.text};
                }

                h2 {
                    font-size: 60px;
                    color: var(--mainColor);
                }

                h3 {
                    font-size: 35px;
                    font-weight: 400;
                    align-self: flex-end;
                    margin-bottom: -30px;
                }

                ul {
                    margin-left: 100px;
                }

                li {
                    list-style: none;
                }

                h5 {
                    position: relative;
                    font-size: 18px;
                }

                h5:before {
                    position: absolute;
                    content: "";
                    height: 17px;
                    width: 17px;
                    background: var(--puntoRojo);
                    top: 4px;
                    left: -30px;
                    border-radius: 50%;
                }

                p {
                    text-align: justify;
                    color: var(--mainColorClaro);
                    margin: 20px 0;
                }

                .botones {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                }

                button {
                    width: 120px;
                    height: 35px;
                    border-radius: 20px;
                    border: none;
                    color: white;
                    justify-self: center;
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

                @media screen and (max-width: 850px) {
                    .content {
                        display: none;
                    }
                }
                
            `}</style>
        </section>
    )
}

export default Personal
