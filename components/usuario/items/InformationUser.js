import React, { useState } from "react";
import AddUser from "./AddUser";
import BotonAgregar from "../../carnet/carnet";

const InformationUser = (props) => {
    const [handleAddUser, setHandleAddUser] = useState(false);

    const fromateDate = (date) => {
        const format = new Date(date)
        return `${format.getDate()}/${format.getMonth() + 1}/${format.getFullYear()}`
    }

    return (
        <section>
            {handleAddUser ? (
                <AddUser
                    changeAddUser={() => setHandleAddUser(false)}
                    dependientes={props.data.dependientes}
                    identification={props.data.identification}
                    name={props.data.name}
                />
            ) : null}
            <label>
                ESTADO:
                <p>{props.data.state ? "ACTIVO" : "INACTIVO"}</p>
            </label>
            <label className="type">
                CEDULA:
                <p>{props.data.identification}</p>
            </label>
            <label>
                {props.data.dependeOf
                    ? "DEPENDIENTE DE:"
                    : "LISTA DE DEPENDIENTES:"}{" "}
                <br />
                {props.data.dependeOf ? (
                    <p>{`${props.data.dependeOf.name} - ${props.data.dependeOf.id}`}</p>
                ) : props.data.dependientes ? (
                    props.data.dependientes.length !== 0 ? (
                        props.data.dependientes.map((item, i) => (
                            <p key={i} className="list">
                                {`${item.name} - ${item.id} - `}
                                <strong>
                                    {`${item.state ? "Activo" : "Inactivo"}`}
                                </strong>
                            </p>
                        ))
                    ) : (
                        <p>No existen dependientes</p>
                    )
                ) : null}
                {props.data.dependeOf || props.data.plan === true ? null : (
                    <button onClick={() => setHandleAddUser(true)}>
                        <svg viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                            />
                        </svg>
                        Agregar
                    </button>
                )}
            </label>
            <label>
                FECHA DE NACIMIENTO:
                <p>{fromateDate(props.data.birthdate)}</p>
            </label>
            <label>
                CELULAR:
                <p>{props.data.phone}</p>
            </label>
            <label>
                DIRECCIÓN:
                <p>{props.data.adress}</p>
            </label>
            <label>
                CORREO:
                <p>{props.data.email}</p>
            </label>

            <label>
                DETALLE COBERTURAS:
            <p> {props.data.state === false ? "NO DESCARGABLE HASTA CANCELAR" : (  
                <a href="/archives/COBERTURA RED BUCAL-PLAN PREMIUM.pdf" download="COBERTURA RED BUCAL-PLAN PREMIUM.pdf">
                <div className="download">
                    <div className="colorAzul"></div>
                    <p>Descargar Planes</p>
                </div>
               </a>
			)}</p>
            </label>

            <label>
                CARNET:
            <p> {props.data.state === false ? "NO DESCARGABLE HASTA CANCELAR" : (  
                <BotonAgregar data={props.data}/>
			)}</p>
            </label>

            <style jsx>{`
                section {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
                }		

                label {
                    margin: 10px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }

                .type {
                    text-transform: uppercase;
                }

                button {
                    margin-top: 10px;
                    margin-left: 15px;
                    cursor: pointer;
                    display: grid;
                    grid-template-columns: auto auto;
                    column-gap: 10px;
                    border: none;
                    background-color: unset;
                    color: var(--mainColor);
                    align-items: center;
                    outline: none;
                }

                svg {
                    height: 20px;
                }
            `}</style>
        </section>
    );
};

export default InformationUser;
