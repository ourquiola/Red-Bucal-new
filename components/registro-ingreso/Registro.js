import React, { useState, useEffect } from "react";
import emailValidator from "email-validator";

const Registro = (props) => {
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        setUrl(path);
    }, []);

    const validate = () => {
        let bool = false;
        if (emailValidator.validate(props.user.email)) {
            bool = true;
            setErrors("");
        } else {
            setErrors("Formato de email invalido");
        }
        return bool;
    };

    return (
        <div className="form">
            <div className="id">
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="EMAIL"
                    value={props.user.email ? props.user.email : ""}
                    name="email"
                    onChange={props.ChangeText}
                />
                {errors ? <p>{errors}</p> : ""}
            </div>
            {/* <div className="password">
                <div className="colorAzul"></div>
                <input type="password" placeholder="CONTRASEÑA" name="password" value={props.user.password} onChange={props.ChangeText} />
                {props.errors.errorpassword ? <p>{props.errors.errorpassword}</p> : ''}
                {props.errorsBusiness.errorPassword ? <p>{props.errorsBusiness.errorPassword}</p> : ''}
                {errors ? <p>Faltan datos</p> : ''}
            </div> */}

            <button
                onClick={() => (validate() ? props.changeRegister() : null)}
            >
                REGISTRARSE
                <svg viewBox="0 0 576 512">
                    <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
                </svg>
            </button>

            <span onClick={() => props.ChangeRegLog()}>
                ¿Ya tienes cuenta? Ingresa
            </span>

            <style jsx>{`
                .form {
                    display: grid;
                    position: relative;
                    height: 108px;
                }

                .form > div {
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

                .id {
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

                span {
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

                span:hover {
                    color: #60a9ca;
                }
            `}</style>
        </div>
    );
};

export default Registro;
