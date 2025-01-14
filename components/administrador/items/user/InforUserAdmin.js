import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import validateDate from "../../../../utils/validateDate";
import axios from "axios";
import CarnetLabel from '../../../carnet/carnetLabel';
import BotonAgregar from "../../../carnet/carnet";

const InfoAdmin = (props) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        let inf = {};
        inf.identificationChange = props.data.identification;
        inf.birthdate = fromateDate(props.data.birthdate)
        inf.phone = props.data.phone;
        inf.adress = props.data.adress;
        inf.email = props.data.email;
        inf.identification = props.data.identification;
        setInfo(inf);
    }, []);

    const fromateDate = (date) => {
        console.log(date)

        let format = new Date(date)
        // if (format == 'Invalid Date') format = new Date(date.replaceAll('-', '/'))
        // console.log(format)
        // console.log(date.replaceAll('-', '/'))
        return `${format.getDate()}/${format.getMonth() + 1}/${format.getFullYear()}`
    }

    const onchange = (e) => {
        setInfo(Object.assign({}, info, { [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const [isValidate, message] = validateDate(info.birthdate)

        if (isValidate) {
            const url = "/api/editUserData";
            try {
                const result = await axios.put(url, { ...info });
                if (result.data.status) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Información actualizada",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                    props.changeData(result.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: message,
                showConfirmButton: false,
                timer: 2000,
            });
        }

    };

    return (
        <form onSubmit={onSubmit}>
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
                                {`${item.name} - id: ${item.id} - stado: ${item.state ? "Activo" : "Inactivo"
                                    }`}
                            </p>
                        ))
                    ) : (
                        <p>No existen dependientes</p>
                    )
                ) : null}
            </label>
            <label>
                ESTADO: <br />
                <p>{props.data.state ? "ACTIVO" : "INACTIVO"}</p>
            </label>
            <label>
                CEDULA: <br />
                <input
                    type="text"
                    name="identificationChange"
                    value={info.identificationChange}
                    onChange={onchange}
                />
            </label>
            <label>
                FECHA DE NACIMIENTO (dd/mm/aaaa): <br />
                <input
                    type="text"
                    name="birthdate"
                    placeholder="dd/mm/aa"
                    value={info.birthdate}
                    onChange={onchange}
                />
            </label>
            <label>
                CELULAR: <br />
                <input
                    type="number"
                    name="phone"
                    value={info.phone}
                    onChange={onchange}
                />
            </label>
            <label>
                DIRECCIÓN: <br />
                <input
                    type="text"
                    name="adress"
                    value={info.adress}
                    onChange={onchange}
                />
            </label>
            <label>
                CORREO: <br />
                <input
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={onchange}
                />
            </label>
            <label>
                CARNET: <br></br>
            {props.data.state === false ? (
                "NO ES POSIBLE DESCARGARLO HASTA CANCELAR"
            ) : (
                <label>
                <CarnetLabel data={props.data} />
                <BotonAgregar data={props.data}/>
                </label>
            )}
            
            </label>
            <button>Actualizar</button>

            <style jsx>{`
                form {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }

                label {
                    margin: 10px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }

                input {
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
                }

                button {
                    align-self: center;
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .list {
                    position: relative;
                    padding-left: 15px;
                }

                .list:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 5px;
                    transform: translateY(-50%);
                    height: 5px;
                    width: 5px;
                    background-color: var(--mainColor);
                    border-radius: 50%;
                }

                @media screen and (max-width: 500px) {
                    form {
                        grid-template-columns: 1fr;
                        margin: 50px 0 0 100px;
                    }
                }
            `}</style>
        </form>
    );
};

export default InfoAdmin;
