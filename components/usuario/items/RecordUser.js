import React from "react";

const RecordUser = (props) => {
    return (
        <section>
            <div className="table">
                <p>FECHA</p>
                <p>HORA</p>
                <p>TRATAMIENTO</p>
                <div className="linea"></div>

                {props.data.historial ? (
                    props.data.historial.map((historial) => (
                        <div className="form">
                            <p>{historial.fecha}</p>
                            <p>{historial.hora}</p>
                            <p>{historial.tratamiento}</p>
                        </div>
                    ))
                ) : (
                    <div className="form">
                        <p style={{ gridColumn: "1/4" }}>HISTORIAL VACIO</p>
                    </div>
                )}
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
                    width: 500px;
                }

                p {
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 16px;
                    font-weight: 600;
                    margin: 10px;
                }

                .form {
                    grid-column: 1/4;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .linea {
                    grid-column: 1/4;
                    background: var(--mainColorClaro);
                    height: 2px;
                    width: 100%;
                }

                @media screen and (max-width: 660px) {
                    .table {
                        box-sizing: border-box;
                        width: 100%;
                    }

                    section {
                        margin: 0 30px;
                    }
                }
            `}</style>
        </section>
    );
};

export default RecordUser;
