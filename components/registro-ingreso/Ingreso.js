import React, { useState, useEffect } from "react";
import RememberPass from "./RememberPass";

const Ingreso = (props) => {
    const [url, setUrl] = useState("");
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        setUrl(path);
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div>
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="CEDULA / EMAIL"
                    name="email"
                    value={props.login.email}
                    onChange={props.ChangeTextLogin}
                />
            </div>
            <div className="password">
                <div className="colorAzul"></div>
                <input
                    type="password"
                    placeholder="CONTRASEÑA"
                    name="password"
                    value={props.login.password ? props.login.password : ""}
                    onChange={props.ChangeTextLogin}
                />
                {props.errorsLogin.error ? (
                    <p>{props.errorsLogin.error}</p>
                ) : (
                    ""
                )}
            </div>

            <button onClick={props.onSubmitLogin}>
                ENTRAR
                <svg viewBox="0 0 512 512">
                    <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" />
                </svg>
            </button>

            {props.type === "admin" ? null : (
                <span className="register" onClick={() => props.ChangeRegLog()}>
                    ¿No tienes cuenta? Registrate
                </span>
            )}
            <span className="remember" onClick={() => setRemember(true)}>
                ¿Olvidaste tu contraseña?
            </span>
            {remember ? <RememberPass setRemember={setRemember} /> : null}
            <style jsx>{`
                form {
                    display: grid;
                    position: relative;
                }

                div {
                    display: grid;
                    grid-template-columns: 5px 1fr;
                    border: 1px solid #33333322;
                    border-left: none;
                }

                .colorRojo {
                    background-color: var(--puntoRojo);
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
                }

                .password {
                    position: relative;
                }

                p {
                    bottom: -20px;
                    position: absolute;
                    font-size: 12px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: var(--puntoRojo);
                }

                input {
                    border: none;
                    outline: none;
                    margin-left: 5px;
                }

                input:focus {
                    transform: scale(1.01);
                    font-size: 12px;
                    box-shadow: 4px 5px 10px -2px #33333344;
                }

                input::-webkit-input-placeholder {
                    color: #33333399;
                }

                button {
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
                }

                svg {
                    height: 20px;
                    transform: translateY(20%);
                    margin-left: 10px;
                    fill: var(--puntoRojo);
                }

                .register,
                .remember {
                    position: absolute;
                    bottom: -15px;
                    color: #60a9caaa;
                    text-decoration: underline;
                    width: 350px;
                    text-align: center;
                    font-size: 15px;
                    cursor: pointer;
                    transition: color 0.5s;
                }

                .remember {
                    bottom: -45px;
                }

                .register:hover {
                    color: #60a9ca;
                }
            `}</style>
        </form>
    );
};

export default Ingreso;
