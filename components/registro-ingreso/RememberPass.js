import React, { useState } from "react";
import Axios from "axios";

import Swal from "sweetalert2";

const RememberPass = ({ setRemember }) => {
    const [email, setEmail] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        const URL_REMEMBER_PASS = "/api/remember";
        const response = await Axios.post(URL_REMEMBER_PASS, { email });

        if (response.data.status === "ok") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: response.data.message,
                showConfirmButton: true,
            });
        } else if (response.data.status === "error") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: response.data.message,
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className="content">
            <section>
                <svg
                    onClick={() => {
                        setRemember(false);
                    }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>
                <br />
                <form>
                    <label>
                        ingrese su email: <br />
                        <input
                            type="email"
                            name="firstName"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* {err.password ? <p>{err.password}</p> : ''} */}
                    </label>
                    <button type="submit" onClick={submit}>
                        Obtener
                    </button>
                </form>
            </section>

            <style jsx>{`
                .content {
                    z-index: 1000;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background: #33333366;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                section {
                    background: white;
                    position: relative;
                    border-radius: 30px;
                    padding: 30px;
                }

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform 0.5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                form {
                    display: grid;
                    position: relative;
                }

                label {
                    margin: 10px auto;
                    color: var(--mainColor);
                    font-weight: 600;
                    position: relative;
                }

                p {
                    position: absolute;
                    color: var(--puntoRojo);
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                }

                input {
                    displya: inline-block;
                    width: 200px;
                    outline: none;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                button {
                    align-self: center;
                    justify-self: center;
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default RememberPass;
