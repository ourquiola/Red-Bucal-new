import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddUser = ({ changeAddUser, dependientes, identification, name }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setData(
            Object.assign({}, data, {
                [e.target.name]: e.target.value,
                dependientes,
                identification,
                dependName: name,
            })
        );
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        let errors = {};
        let validate = true;

        if (!data.name) {
            errors = Object.assign({}, errors, {
                errorName: "Falta el nombre",
            });
            validate = false;
        }

        if (!data.lastname) {
            errors = Object.assign({}, errors, {
                errorLastname: "Falta el apellido",
            });
            validate = false;
        }

        if (!data.typeDoc) {
            errors = Object.assign({}, errors, {
                errortypeDoc: "Falta el tipo",
            });
            validate = false;
        }

        if (!data.identification) {
            errors = Object.assign({}, errors, {
                erroridentification: "Falta la identifiación",
            });
            validate = false;
        }

        /* if (!data.day) {
            errors = Object.assign({}, errors, { errorday: "Falta el día" });
            validate = false;
        }

        if (!data.month) {
            errors = Object.assign({}, errors, { errormonth: "Falta el mes" });
            validate = false;
        }

        if (!data.year) {
            errors = Object.assign({}, errors, { erroryear: "Falta el año" });
            validate = false;
        }

        if (!data.phone) {
            errors = Object.assign({}, errors, {
                errorphone: "Falta el telefono",
            });
            validate = false;
        }

        if (!data.addres) {
            errors = Object.assign({}, errors, {
                erroraddres: "Falta la dirección",
            });
            validate = false;
        }

        if (!data.email) {
            errors = Object.assign({}, errors, {
                erroremail: "Falta el email",
            });
            validate = false;
        } */

        if (validate) {
            const url = "/api/addUserDepend";
            const result = await axios.post(url, data);
            console.log(result);

            if (result.data.status == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Historial actualizado",
                    showConfirmButton: false,
                    timer: 1000,
                });
                /* props.changeData(result.data.data.value);
                changeAddUser(); */
            } else {
                if (result.data.message === "el correo es invalido") {
                    errors = Object.assign({}, errors, {
                        erroremail: result.data.message,
                    });
                } else if (
                    result.data.message === "El correo ya ha sido registrado"
                ) {
                    errors = Object.assign({}, errors, {
                        erroremail: result.data.message,
                    });
                }
            }
        }

        setErrors(errors);
    };

    return (
        <div className="content">
            <form onSubmit={onSubmit}>
                <svg onClick={changeAddUser} viewBox="0 0 512 512">
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>
                <h3>Agregar Dependiente</h3>
                <span>Los campos marcados con * son obligatorios</span>
                <label>
                    * NOMBRE: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="name"
                        placeholder=""
                    />
                </label>
                <label>
                    * APELLIDO: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="lastname"
                        placeholder=""
                    />
                </label>
                {errors.errorName ? (
                    <p style={{ gridColumn: "1/2" }}>{errors.errorName}</p>
                ) : (
                    ""
                )}
                {errors.errorName && !errors.errorLastname ? <br /> : ""}
                {errors.errorLastname && !errors.errorName ? <br /> : ""}
                {errors.errorLastname ? (
                    <p style={{ gridColumn: "2/3" }}>{errors.errorLastname}</p>
                ) : (
                    ""
                )}
                <label>
                    * DOCUMENTO: <br />
                    <select name="typeDoc" onChange={onChange}>
                        <option value="-">TIPO</option>
                        <option value="C.C. Panameña">CEDULA PANAMEÑA</option>
                        <option value="Pasaporte">PASAPORTE</option>
                        <option value="Cedula de extranjería">
                            CEDULA DE EXTRANJERÍA
                        </option>
                    </select>
                </label>
                <label>
                    * IDENTIFICACIÓN: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="idDepend"
                        placeholder=""
                    />
                </label>
                {errors.errortypeDoc ? (
                    <p style={{ gridColumn: "1/2" }}>{errors.errortypeDoc}</p>
                ) : (
                    ""
                )}
                {errors.errortypeDoc && !errors.erroridentification ? (
                    <br />
                ) : (
                    ""
                )}
                {errors.erroridentification && !errors.errortypeDoc ? (
                    <br />
                ) : (
                    ""
                )}
                {errors.erroridentification ? (
                    <p style={{ gridColumn: "2/3" }}>
                        {errors.erroridentification}
                    </p>
                ) : (
                    ""
                )}
                <label className="date">
                    FECHA DE NACIMIENTO: <br />
                    <div className="date-grid">
                        <select name="day" onChange={onChange}>
                            <option value="">DÍA</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="month" onChange={onChange}>
                            <option value="">MES</option>
                            <option value="1">ENERO</option>
                            <option value="2">FEBRERO</option>
                            <option value="3">MARZO</option>
                            <option value="4">ABRIL</option>
                            <option value="5">MAYO</option>
                            <option value="6">JUNIO</option>
                            <option value="7">JULIO</option>
                            <option value="8">AGOSTO</option>
                            <option value="9">SEPTIEMBRE</option>
                            <option value="10">OCTUBRE</option>
                            <option value="11">NOVIEMBRE</option>
                            <option value="12">DICIEMBRE</option>
                        </select>
                        <select name="year" onChange={onChange}>
                            <option value="">AÑO</option>
                            <option value="1921">1921</option>
                            <option value="1922">1922</option>
                            <option value="1923">1923</option>
                            <option value="1924">1924</option>
                            <option value="1925">1925</option>
                            <option value="1926">1926</option>
                            <option value="1927">1927</option>
                            <option value="1928">1928</option>
                            <option value="1929">1929</option>
                            <option value="1930">1930</option>
                            <option value="1931">1931</option>
                            <option value="1932">1932</option>
                            <option value="1933">1933</option>
                            <option value="1934">1934</option>
                            <option value="1935">1935</option>
                            <option value="1936">1936</option>
                            <option value="1937">1937</option>
                            <option value="1938">1938</option>
                            <option value="1939">1939</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                            <option value="2036">2036</option>
                            <option value="2037">2037</option>
                            <option value="2038">2038</option>
                            <option value="2039">2039</option>
                            <option value="2040">2040</option>
                        </select>
                        {errors.errorday ? (
                            <p style={{ gridColumn: "1/2" }}>
                                {errors.errorday}
                            </p>
                        ) : (
                            ""
                        )}
                        {errors.errormonth ? (
                            <p style={{ gridColumn: "2/3" }}>
                                {errors.errormonth}
                            </p>
                        ) : (
                            ""
                        )}
                        {errors.erroryear ? (
                            <p style={{ gridColumn: "3/4" }}>
                                {errors.erroryear}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </label>
                <label>
                    TELEFÓNO: <br />
                    <input
                        onChange={onChange}
                        type="number"
                        name="phone"
                        placeholder=""
                    />
                </label>
                <label>
                    DIRECCIÓN: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="addres"
                        placeholder=""
                    />
                </label>
                {errors.errorphone ? (
                    <p style={{ gridColumn: "1/2" }}>{errors.errorphone}</p>
                ) : (
                    ""
                )}
                {errors.errorphone && !errors.erroraddres ? <br /> : ""}
                {errors.erroraddres && !errors.errorphone ? <br /> : ""}
                {errors.erroraddres ? (
                    <p style={{ gridColumn: "2/3" }}>{errors.erroraddres}</p>
                ) : (
                    ""
                )}
                <label>
                    CORREO: <br />
                    <input
                        onChange={onChange}
                        type="email"
                        name="email"
                        placeholder=""
                    />
                </label>
                <br />
                {errors.erroremail ? (
                    <p style={{ gridColumn: "1/2" }}>{errors.erroremail}</p>
                ) : (
                    ""
                )}
                <button>Agregar</button>
            </form>

            <style jsx>{`
                .content {
                    z-index: 1000;
                    top: 0;
                    left: 0;
                    position: fixed;
                    background: #33333388;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                h3 {
                    text-align: center;
                    grid-column: 1/3;
                    font-size: 1.5rem;
                    color: var(--mainColor);
                    margin-bottom: 1rem;
                }

                span {
                    grid-column: 1/3;
                    color: #091c4777;
                    font-size: 12px;
                }

                svg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 30px;
                    color: var(--puntoRojo);
                    margin: 20px;
                    cursor: pointer;
                }

                form {
                    position: relative;
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 10px;
                    margin: 0 50px;
                    background: white;
                    padding: 30px;
                    border-radius: 30px;
                }

                label {
                    margin: 15px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                .date {
                    grid-column: 1/3;
                }

                .date-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 10px;
                }

                p {
                    color: var(--mainColorClaro);
                }

                input {
                    box-sizing: border-box;
                    width: 100%;
                }

                input,
                select {
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
                }

                p {
                    font-size: 12px;
                    text-align: center;
                    color: var(--puntoRojo);
                }
                button {
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    grid-column: 1/3;
                    justify-self: center;
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default AddUser;
