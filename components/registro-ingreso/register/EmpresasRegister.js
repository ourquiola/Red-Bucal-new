import React, { useState } from "react";
import TerminosCondicionesForm from "./TerminosCondicionesForm";

const EmpresasRegister = (props) => {
    const [active, setActive] = useState(false);

    const change = (e) => {
        e.preventDefault();
        setActive(!active);
    };

    return (
        <form
            onSubmit={(e) => {
                props.onSubmitBusinessRegister(e);
            }}
        >
            <div className="nombre">
                <div className="colorAzul"></div>
                <input
                    type="text"
                    onChange={props.onChangeBusiness}
                    name="businessName"
                    value={props.business.businessName}
                    placeholder="NOMBRE DE LA EMPRESA*"
                />
            </div>
            {props.errorsBusiness.errorName ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorName}
                </p>
            ) : (
                ""
            )}
            <div className="id">
                <div className="colorAzul"></div>
                <input
                    type="text"
                    onChange={props.ChangeText}
                    name="identification"
                    value={props.user.identification}
                    placeholder="RUC*"
                />
            </div>
            {props.errorsBusiness.errorRUC ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorRUC}
                </p>
            ) : (
                ""
            )}
            <div className="password">
                <div className="colorAzul"></div>
                <input
                    type="password"
                    onChange={props.onChangeBusiness}
                    name="password"
                    value={props.business.password}
                    placeholder="CONTRASEÑA*"
                />
            </div>
            {props.errorsBusiness.errorPassword ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorPassword}
                </p>
            ) : (
                ""
            )}
            <div className="password">
                <div className="colorAzul"></div>
                <input
                    type="password"
                    onChange={props.onChangeBusiness}
                    name="passwordRepeat"
                    value={props.business.passwordRepeat}
                    placeholder="REPITA LA CONTRASEÑA*"
                />
            </div>
            {props.errorsBusiness.errorPasswordRepeat ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorPasswordRepeat}
                </p>
            ) : (
                ""
            )}
            <div>
                <div className="colorAzul"></div>
                <input
                    type="text"
                    onChange={props.onChangeBusiness}
                    name="businessAdress"
                    value={props.business.businessAdress}
                    placeholder="DIRECCIÓN DE LA EMPRESA*"
                />
            </div>
            <br />
            <div>
                <div className="colorAzul"></div>
                <input
                    type="text"
                    onChange={props.onChangeBusiness}
                    name="businessPhone"
                    value={props.business.businessPhone}
                    placeholder="TELÉFONO DE EMPRESA"
                />
            </div>
            {props.errorsBusiness.errorAdress ? (
                <p style={{ gridColumn: "1/2" }}>
                    {props.errorsBusiness.errorAdress}
                </p>
            ) : (
                ""
            )}
            {props.errorsBusiness.errorAdress ||
            props.errorsBusiness.errorPhone ? (
                <br />
            ) : (
                ""
            )}
            {props.errorsBusiness.errorPhone ? (
                <p style={{ gridColumn: "3/4" }}>
                    {props.errorsBusiness.errorPhone}
                </p>
            ) : (
                ""
            )}
            <div className="correo">
                <div className="colorAzul"></div>
                <input
                    type="text"
                    onChange={props.onChangeBusiness}
                    name="businessMail"
                    value={props.business.businessMail}
                    placeholder="CORREO ELECTRÓNICO"
                />
            </div>
            {props.errorsBusiness.errorEmail ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorEmail}
                </p>
            ) : (
                ""
            )}
            <a
                href="/archives/PLANTILLA-DE-REGISTRO-PARA-EMPLEADOS.xlsx"
                download="PLANTILLA-DE-REGISTRO-PARA-EMPLEADOS.xlsx"
            >
                <div className="download">
                    <div className="colorAzul"></div>
                    <p>DESCARGAR PLANTILLA DE REGISTRO PARA EMPLEADOS</p>
                </div>
            </a>
            <br />
            <div className="upload">
                <div className="colorAzul"></div>
                <label className="label">
                    {props.business.data
                        ? "PLANTILLA CARGADA"
                        : "SUBIR PLANTILLA DE REGISTRO PARA EMPLEADOS"}
                    <input
                        className="uploadInput"
                        type="file"
                        onChange={(e) => {
                            props.readExcel(e);
                        }}
                        onClick={(e) => props.cleanInputFile(e)}
                        accept=".xlsx"
                    />
                </label>
            </div>
            {props.errorsBusiness.errorData ? (
                <p style={{ gridColumn: "3/4" }}>
                    {props.errorsBusiness.errorData}
                </p>
            ) : (
                ""
            )}
            <label className="terminos">
                <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    onChange={props.onChangeBusiness}
                />
                Acepto terminos y condiciones
                <br />
                {props.errorsBusiness.errorCheckbox ? (
                    <p>{props.errorsBusiness.errorCheckbox}</p>
                ) : (
                    ""
                )}
            </label>
            <div className="terminos-box">
                <button
                    className="condiciones"
                    onClick={(e) => {
                        change(e);
                    }}
                >
                    terminos y condiciones
                </button>
                {active ? (
                    <TerminosCondicionesForm
                        change={change}
                        ChangeText={props.onChangeBusiness}
                    />
                ) : (
                    ""
                )}
            </div>
            <div className="select">
                <div className="colorAzul"></div>
                <select onChange={props.onChangeBusiness} name="know">
                    <option value="">¿Cómo supo de nosotros?</option>
                    <option value="1">Página Web</option>
                    <option value="2">Recomendación</option>
                    <option value="3">Asesor Comercial</option>
                    <option value="4">Redes sociales</option>
                    <option value="5">Otro</option>
                </select>
            </div>
            {props.errorsBusiness.errorKnow ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errorsBusiness.errorKnow}
                </p>
            ) : (
                ""
            )}

            <button className="entrar">
                ENTRAR
                <svg viewBox="0 0 512 512">
                    <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" />
                </svg>
            </button>

            <style jsx>{`
                .checkbox {
                    transform: translateY(15%);
                    margin-right: 5px;
                }

                .terminos-box {
                    grid-column: 3/4;
                    border: none;
                    justify-self: flex-end;
                    padding-right: 20px;
                    font-size: 12px;
                }

                .terminos {
                    align-self: center;
                    color: black;
                }

                .condiciones {
                    grid-column: 1/4;
                    justify-self: felx-end;
                    border: none;
                    outline: none;
                    width: 200px;
                    padding: 10px;
                    cursor: pointer;
                    background: var(--puntoAzul);
                    color: white;
                    font-weight: 600;
                }

                form {
                    display: grid;
                    grid-template-columns: 1fr 20px 1fr;
                    margin-bottom: 100px;
                }

                .nombre,
                .id,
                .correo,
                .select,
                .password {
                    grid-column: 1/4;
                }

                a {
                    align-self: center;
                    text-decoration: none;
                }

                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                    position: relative;
                }

                label {
                    position: relative;
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                    cursor: pointer;
                }

                .uploadInput {
                    position: absolute;
                    top: 0;
                    height: 0px;
                    width: 0px;
                    opacity: 0;
                }

                .download {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                }

                p {
                    font-size: 12px;
                    text-align: center;
                    color: var(--puntoRojo);
                }

                .download > p {
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                }

                form > div {
                    margin: 10px 0;
                }

                div {
                    display: grid;
                    grid-template-columns: 5px 1fr;
                    border: 1px solid #33333322;
                    border-left: none;
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
                }

                select {
                    height: 60px;
                    border: none;
                    outline: none;
                    color: #33333399;
                }

                input {
                    border: none;
                    outline: none;
                    margin-left: 5px;
                    padding: 20px 0;
                }

                input:focus {
                    transform: scale(1.01);
                    font-size: 12px;
                    box-shadow: 4px 5px 10px -2px #33333344;
                }

                input::-webkit-input-placeholder {
                    color: #33333399;
                }

                .entrar {
                    grid-column: 1/4;
                    border: none;
                    background: none;
                    height: 30px;
                    width: 140px;
                    outline: none;
                    justify-self: center;
                    align-self: center;
                    color: #333333aa;
                    font-weight: 900;
                    cursor: pointer;
                    margin-top: 30px;
                }

                svg {
                    height: 25px;
                    transform: translateY(20%);
                    margin-left: 10px;
                    fill: var(--puntoRojo);
                }
            `}</style>
        </form>
    );
};

export default EmpresasRegister;
