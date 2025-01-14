import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FindUserAdmin = (props) => {
    const [validateInfoUser, setValidateInfoUser] = useState(false);

    useEffect(() => {
        if (validateInfoUser) props.onClick(1);
    }, [validateInfoUser]);

    const onSubmitID = async (e) => {
        e.preventDefault();
        const url = "/api/getUser";
        const result = await axios.post(url, props.id);
        if (result.data.message.length !== 0) {
            console.log(result.data.message);
            props.changeListData(result.data.message);
            props.ChangeType("persona");
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "No hay ninuga coincidencia!",
                showConfirmButton: false,
                timer: 1500,
            });
            props.changeListData([]);
        }
    };

    const onSubmitRUC = async (e) => {
        e.preventDefault();
        const url = "/api/getBusiness";
        const result = await axios.post(url, props.RUC);
        if (result.data.message.length !== 0) {
            props.changeListData(result.data.message);
            props.ChangeType("empresa");
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "La empresa no está registrada",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const getDataUser = async (id) => {
        const url = `/api/getUser?id=${id}`;
        const result = await axios.get(url);
        props.changeData(result.data.message);
        console.log(result.data.message);
        setValidateInfoUser(true);
    };

    const getDataBusiness = async (id) => {
        const url = `/api/getBusiness?id=${id}`;
        const result = await axios.get(url);
        props.changeData(result.data.message);
    };

    const deleteBusiness = async (RUC) => {
        console.log(props.typeAdmin)
        if (props.typeAdmin === "master") {
            const url = `/api/deleteBusiness?RUC=${RUC}`;
            const result = await axios.delete(url);

            console.log(result);
            if (result.data.status == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: result.data.message,
                    showConfirmButton: true,
                });
                props.changeListData([]);
            } else {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "error al eliminar la entidad",
                    showConfirmButton: true,
                });
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "no tienes permiso para realizar esta accion",
                showConfirmButton: true,
            });
        }
    };

    const deleteUser = async (identification) => {

        if (props.typeAdmin === "master") {
            const url = `/api/deleOneUser?identification=${identification}`;

            const result = await axios.delete(url);

            console.log(result);

            if (result.data.status == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: result.data.message,
                    showConfirmButton: true,
                });
                props.changeListData([]);
            } else {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: result.data.message,
                    showConfirmButton: true,
                });
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "no tienes permiso para realizar esta accion",
                showConfirmButton: true,
            });
        }
    };

    return (
        <section>
            <form>
                <input
                    type="text"
                    name="identification"
                    placeholder="CEDULA DE IDENTIDAD"
                    onChange={(e) => {
                        props.changeId(e);
                    }}
                />
                <button className="buscar" type="submit" onClick={onSubmitID}>
                    Buscar
                </button>
            </form>
            <form>
                <input
                    type="text"
                    name="RUC"
                    placeholder="RUC EMPRESARIAL"
                    onChange={(e) => {
                        props.changeRUC(e);
                    }}
                />
                <button className="buscar" type="submit" onClick={onSubmitRUC}>
                    Buscar
                </button>
            </form>

            <div className="linea"></div>

            {props.type === "persona" ? (
                <div className="user">
                    <div className="table">
                        <div className="cabecera">
                            <h5>USUARIO</h5>
                            <h5>ID</h5>
                            <h5>OPCIÓN</h5>
                        </div>
                        <div className="overflow">
                            {props.listData.map((data) => (
                                <div className="content">
                                    <p>{data.name}</p>
                                    <p>{data.identification}</p>
                                    <div className="wrapper-butons">
                                        <button
                                            className="selection"
                                            onClick={() => {
                                                getDataUser(data["_id"]);
                                                props.ChangeUser(1);
                                                props.changeActivate();
                                            }}
                                        >
                                            Selecctionar
                                        </button>
                                        <button
                                            className="selection delete"
                                            onClick={() =>
                                                deleteUser(data.identification)
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : props.type === "empresa" ? (
                <div className="user">
                    <div className="table">
                        <div className="cabecera">
                            <h5>EMPRESA</h5>
                            <h5>RUC</h5>
                            <h5>OPCIÓN</h5>
                        </div>
                        {props.listData.map((data) => (
                            <div className="content">
                                <p>{data.name}</p>
                                <p>{data.RUC}</p>
                                <div className="wrapper-butons">
                                    <button
                                        className="selection"
                                        onClick={() => {
                                            getDataBusiness(data["_id"]);
                                            props.ChangeUser(2);
                                            props.changeActivate();
                                        }}
                                    >
                                        Selecctionar
                                    </button>
                                    <button
                                        className="selection delete"
                                        onClick={() => deleteBusiness(data.RUC)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}

            <style jsx>{`
                section {
                    align-self: center;
                    margin: 0 50px;
                    display: grid;
                    grid-template-rows: 100px 2px 1fr;
                    grid-template-columns: 1fr 1fr;
                }

                form {
                    justify-self: center;
                    margin: 20px 0;
                }

                input::placeholder {
                    padding: 10px 0;
                    color: var(--mainColorClaro);
                    font-weight: 600;
                }

                input,
                button {
                    outline: none;
                    padding: 10px 10px;
                    border: 1px solid #33333344;
                }

                input {
                    color: var(--mainColor);
                    border-right: none;
                    border-radius: 5px 0 0 5px;
                }

                .buscar {
                    border-left: none;
                    cursor: pointer;
                    background-color: var(--mainColor);
                    color: white;
                    border-radius: 0 5px 5px 0;
                }

                .linea {
                    background: var(--puntoRojo);
                    grid-column: 1/3;
                }

                .user {
                    grid-column: 1/3;
                    padding-top: 20px;
                    width: 90%;
                    justify-self: center;
                }

                .table {
                    display: grid;
                    grid-template-rows: 30px 1fr;
                }

                .overflow {
                    max-height: 200px;
                    overflow: auto;
                }

                .cabecera,
                .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .cabecera {
                    text-align: center;
                }

                h5 {
                    color: var(--mainColor);
                }

                .content {
                    color: var(--mainColorClaro);
                    margin: 4px 0;
                }

                .selection {
                    border: none;
                    background-color: var(--mainColorClaro);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.5s;
                }

                .selection:hover {
                    background-color: var(--mainColor);
                }

                .delete {
                    background-color: var(--puntoRojo);
                }

                .delete:hover {
                    background-color: #f47c6e;
                }

                .wrapper-butons {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    column-gap: 1rem;
                }

                @media screen and (max-width: 700px) {
                    section {
                        grid-template-rows: 1fr 1fr 2px 1fr;
                        margin: 0;
                    }

                    .linea {
                        margin: 0 50px;
                    }

                    form {
                        grid-column: 1/3;
                    }
                }

                @media screen and (max-width: 460px) {
                }
            `}</style>
        </section>
    );
};

export default FindUserAdmin;
