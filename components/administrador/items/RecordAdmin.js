import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";

const RecordAdmin = (props) => {
    const [data, setData] = useState({
        identification: props.data.identification,
        historial: props.data.historial,
    });

    const [date, setDate] = useState({
        hora: moment().locale("es").format("LT"),
        fecha: moment().locale("es").format("LL"),
    });

    const [tratamiento, setTratamiento] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            let time = {};
            time.hora = moment().locale("es").format("LT");
            time.fecha = moment().locale("es").format("LL");
            setDate(Object.assign({}, date, time));
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const onchange = (e) => {
        setTratamiento(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!tratamiento) {
            return Swal.fire({
                position: "center",
                icon: "warning",
                title: 'El campo "tratamiento" está vacío',
                showConfirmButton: false,
                timer: 1500,
            });
        }

        const url = "/api/addHistorial";
        try {
            console.log(data);
            const result = await axios.put(url, {
                ...data,
                ...date,
                tratamiento,
            });
            console.log(result.data);
            if (result.data.status) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Historial actualizado",
                    showConfirmButton: false,
                    timer: 1000,
                });
                props.changeData(result.data.data);
                setData(
                    Object.assign({}, data, {
                        historial: result.data.data.historial,
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div className="table">
                <p>FECHA</p>
                <p>HORA</p>
                <p>TRATAMIENTO</p>
                <div className="linea"></div>
                <div className="wrapper-form">
                    {props.data.historial
                        ? props.data.historial.map((historial) => (
                              <div className="form">
                                  <p>{historial.fecha}</p>
                                  <p>{historial.hora}</p>
                                  <p>{historial.tratamiento}</p>
                              </div>
                          ))
                        : null}
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="fecha"
                        onChange={onchange}
                        value={date.fecha}
                        disabled
                    />
                    <input
                        className="hora"
                        type="text"
                        name="hora"
                        onChange={onchange}
                        value={date.hora}
                        disabled
                    />
                    <input type="text" name="tratamiento" onChange={onchange} />
                    <button>Agregar</button>
                </form>
            </div>

            <style jsx>{`
                section {
                    align-self: center;
                    display: grid;
                    justify-items: center;
                }

                .table {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                form,
                .form {
                    grid-column: 1/4;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .wrapper-form {
                    grid-column: 1/4;
                    max-height: 200px;
                    overflow: auto;
                }

                .wrapper-form::-webkit-scrollbar {
                    width: 7px;
                }

                .wrapper-form::-webkit-scrollbar-thumb {
                    background-color: var(--mainColor);
                    border-radius: 5px;
                }

                .wrapper-form::-webkit-scrollbar-track {
                    background-color: #33333322;
                }

                p {
                    justify-self: center;
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 16px;
                    font-weight: 600;
                    margin: 10px;
                }

                input,
                select {
                    margin: 10px;
                    padding: 5px;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    outline: none;
                }

                .linea {
                    grid-column: 1/4;
                    background: var(--mainColorClaro);
                    height: 2px;
                    width: 100%;
                }

                button {
                    grid-column: 1/4;
                    justify-self: center;
                    align-self: center;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    outline: none;
                }

                @media screen and (max-width: 750px) {
                    input,
                    select {
                        width: 120px;
                        justify-self: center;
                        margin: 10px 5px;
                    }

                    .hora {
                        width: 50px;
                    }

                    section {
                        margin: 0 20px;
                    }
                }

                @media screen and (max-width: 380px) {
                    p {
                        font-size: 14px;
                    }

                    input::placeholder,
                    select::placeholder {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
};

export default RecordAdmin;
