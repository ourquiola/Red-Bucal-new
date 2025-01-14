import React, { useState, useEffect } from "react";
import PagoFisico from "../../pagos/PagoFisico";
import PagoVirtual from "../../pagos/PagoVirtual";

const BillingUser = (props) => {
    const [activeFisico, setActiveFisico] = useState(false);
    const [activeVirtual, setActiveVirtual] = useState(false);
    const [dates, setDates] = useState({});

    useEffect(() => {
        if (props.data.start && props.data.end) {
            const { start, end } = props.data;

            const startDate = new Date(start);
            const endDate = new Date(end);
            console.log(startDate);
            console.log(endDate);

            setDates({
                start: `${startDate.getDate()}-${
                    startDate.getMonth() + 1
                }-${startDate.getFullYear()}`,
                end: `${endDate.getDate()}-${
                    endDate.getMonth() + 1
                }-${endDate.getFullYear()}`,
            });
        }
    }, [props.data]);

    const changeFisico = () => {
        setActiveFisico(!activeFisico);
    };

    const changeVirtual = () => {
        setActiveVirtual(!activeVirtual);
    };

    return (
        <section>
            {activeFisico ? <PagoFisico changeFisico={changeFisico} /> : ""}
            {activeVirtual ? (
                <PagoVirtual
                    changeVirtual={changeVirtual}
                    data={props.data}
                    setData={props.setData}
                    type={"user"}
                    pago={
                        props.data.dependientes
                            ? Math.round(
                                  (props.data.dependientes.filter(
                                      (dep) => dep.state === false
                                  ).length +
                                      (props.data.state === true ? 0 : 1)) *
                                      100 *
                                      20.61
                              ) / 100
                            : 20.61
                    }
                />
            ) : (
                ""
            )}
            <label className="type">
                TIPO DE PLAN:
                <p>{props.data.plan ? "AFILIACIÓN" : "PERSONAL"}</p>
            </label>
            {props.data.plan === true ? (
                <label></label>
            ) : (
                <label className="type">
                    VALOR A PAGAR:
                    {props.data.dependientes ? (
                        <p>
                            {Math.round(
                                (props.data.dependientes.filter((dep) => {
                                    return dep.state === false;
                                }).length +
                                    (props.data.state === true ? 0 : 1)) *
                                    19.26 *
                                    100
                            ) / 100}{" "}
                            USD
                        </p>
                    ) : (
                        <p>19.26 USD</p>
                    )}
                </label>
            )}
            <label>
                FECHA DE INICIO:
                <p>{props.data.start ? dates.start : "------------"}</p>
            </label>
            <label>
                FECHA DE FINALIZACIÓN:
                <p>{props.data.start ? dates.end : "------------"}</p>
            </label>
            {/*  quitar cuando se pueda pagar por cada uno individualmente */}
            <div
                className={
                    props.data.plan === true ||
                    (props.data.state === true &&
                        !props.data.dependientes.filter((dep) => {
                            console.log(props.data.dependientes);
                            return dep.state === false;
                        }).length)
                        ? "hidden"
                        : ""
                }
            >
                {/* <div className="hidden"> */}
                <span>RENOVACIÓN:</span> <br /> <br />
                <button onClick={changeVirtual}>Virtual</button>
                <button onClick={changeFisico}>Físico</button>
                <img
                    className="pagos"
                    src="/img/pagos.png"
                    alt="metodos de pago"
                />
            </div>

            <style jsx>{`
                form {
                    display: inline-block;
                }

                section {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }

                label,
                span {
                    margin: 20px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }

                button {
                    border: none;
                    outline: none;
                    background-color: var(--mainColor);
                    padding: 10px;
                    cursor: pointer;
                    color: white;
                    border-radius: 4px;
                    margin-right: 10px;
                    width: 100px;
                }

                button:hover {
                    background: var(--colorSelect);
                    color: var(--botonesText);
                }
                .pagos {
                    margin-top: 10px;
                    height: 30px;
                }

                .hidden {
                    position: relative;
                    z-index: -1;
                    opacity: 0.5;
                }
            `}</style>
        </section>
    );
};

export default BillingUser;
