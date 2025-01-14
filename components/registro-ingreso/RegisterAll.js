import React, { useState } from "react";
import PersonasRegister from "./register/PersonasRegister";
import EmpresasRegister from "./register/EmpresasRegister";

const RegisterAll = (props) => {
    const [type, setType] = useState(false);

    const changeType = () => {
        setType(!type);
    };

    const changeTrue = () => {
        setType(true);
    };

    const changeFalse = () => {
        setType(false);
    };

    return (
        <div className="content">
            <div className="diente1"></div>
            <div className="form">
                <div className="regresar" onClick={props.changeRegister}>
                    <svg viewBox="0 0 512 512">
                        <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
                    </svg>
                    Regresar
                </div>
                <h2>REGISTRO</h2>
                <div className="linea"></div>

                <div className="botones">
                    <h3 onClick={changeFalse}>PERSONAS</h3>
                    {/* <label className="checkbox">
                        <input type="checkbox" onChange={changeType} />
                        <i></i>
                    </label>
                    <h3 onClick={changeTrue}>EMPRESAS</h3> */}
                </div>
                {type ? (
                    <EmpresasRegister
                        onChangeBusiness={props.onChangeBusiness}
                        onSubmitBusinessRegister={
                            props.onSubmitBusinessRegister
                        }
                        readExcel={props.readExcel}
                        business={props.business}
                        errorsBusiness={props.errorsBusiness}
                        ChangeText={props.ChangeText}
                        user={props.user}
                        cleanInputFile={props.cleanInputFile}
                    />
                ) : (
                    <PersonasRegister
                        ChangeText={props.ChangeText}
                        onSubmitPersonalRegister={
                            props.onSubmitPersonalRegister
                        }
                        user={props.user}
                        errors={props.errors}
                    />
                )}
            </div>
            <div className="diente2"></div>

            <style jsx>{`
                .content {
                    margin-top: 150px;
                    display: grid;
                    grid-template-columns: 1.5fr 7fr 1.5fr;
                }

                .diente1 {
                    background-image: url("/img/diente-registro.png");
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                }

                .diente2 {
                    background-image: url("/img/diente-ingresar.png");
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                    background-position: bottom;
                }

                svg {
                    height: 30px;
                    transform: translateY(8px);
                    fill: var(--puntoRojo);
                    margin-right: 5px;
                }

                .regresar {
                    position: absolute;
                    font-weight: 700;
                    top: -20px;
                    cursor: pointer;
                    color: #333333aa;
                }

                h2 {
                    text-align: center;
                    font-size: 30px;
                    color: #333333aa;
                    font-weight: 610;
                }

                h3 {
                    font-size: 20px;
                    padding: 10px 15px;
                    border-radius: 30px;
                    color: white;
                    transition: background-color 0.5s;
                    box-shadow: 5px 5px 8px -5px #33333399;
                }

                h3:nth-child(1) {
                    display: block;
                    background-color: ${type
                    ? "rgb(140, 184, 209, .5)"
                    : "var(--puntoAzul)"};
                    margin: auto;
                }

                h3:nth-child(3) {
                    background-color: ${type
                    ? "var(--puntoRojo)"
                    : "#D97C6E77"};
                }

                .form {
                    width: 500px;
                    justify-self: center;
                    position: relative;
                }

                .linea {
                    background: var(--puntoRojo);
                    height: 3px;
                    width: 70%;
                    margin: 30px auto;
                }

                .botones {
                    display: grid;
                    
                    justify-items: center;
                    align-items: center;
                    margin-bottom: 50px;
                }

                input {
                    appearance: none;
                    visibility: hidden;
                    position: absolute;
                    right: 0;
                }

                .checkbox {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    display: block;
                    cursor: pointer;
                }

                i {
                    background-color: ${type
                    ? "var(--puntoRojo)"
                    : "var(--puntoAzul)"};
                    border: none;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 25px;
                    transition: background-color 0.5s;
                    box-shadow: 5px 5px 8px -5px #33333399;
                }

                i:before {
                    content: "";
                    width: 35px;
                    height: 35px;
                    background: #fff;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 1;
                    left: 5px;
                    top: 50%;
                    transform: translateY(-50%)
                        ${type ? "translateX(54px)" : "translateX(0px)"};
                    transition: transform 0.5s;
                }
            `}</style>
        </div>
    );
};

export default RegisterAll;
