import React, { useState } from "react";
import TerminosCondicionesForm from "./TerminosCondicionesForm";

const PersonasRegister = (props) => {
    const [active, setActive] = useState(false);

    const change = (e) => {
        e.preventDefault();
        setActive(!active);
    };

    return (
        <form
            onSubmit={(e) => {
                props.onSubmitPersonalRegister(e);
            }}
        >
            <div className="nombre">
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="NOMBRE*"
                    value={props.user.name}
                    name="name"
                    onChange={props.ChangeText}
                />
            </div>
            <br />
            <div className="apellido">
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="APELLIDO*"
                    value={props.user.lastname}
                    name="lastname"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.errorName ? (
                <p style={{ gridColumn: "1/2" }}>{props.errors.errorName}</p>
            ) : (
                ""
            )}
            {props.errors.errorName || props.errors.errorlastname ? <br /> : ""}
            {props.errors.errorlastname ? (
                <p style={{ gridColumn: "3/4" }}>
                    {props.errors.errorlastname}
                </p>
            ) : (
                ""
            )}
            <h4>DOCUMENTO</h4>
            <div>
                <div className="colorRojo"></div>
                <select name="typeDoc" onChange={props.ChangeText}>
                    <option value="-">TIPO</option>
                    <option value="C.C. Panameña">CEDULA PANAMEÑA</option>
                    <option value="Pasaporte">PASAPORTE</option>
                    <option value="Cedula de extranjería">
                        CEDULA DE EXTRANJERÍA
                    </option>
                </select>
            </div>
            <br />
            <div>
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="IDENTIFICACIÓN"
                    value={props.user.identification}
                    name="identification"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.errorTypeDoc ? (
                <p style={{ gridColumn: "1/2" }}>{props.errors.errorTypeDoc}</p>
            ) : (
                ""
            )}
            {props.errors.erroridentification ? (
                <p style={{ gridColumn: "3/4" }}>
                    {props.errors.erroridentification}
                </p>
            ) : (
                ""
            )}
            <div className="password">
                <div className="colorRojo"></div>
                <input
                    type="password"
                    placeholder="CONTRASEÑA*"
                    value={props.user.password}
                    name="password"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.errorpassword ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errors.errorpassword}
                </p>
            ) : (
                ""
            )}
            <div className="password">
                <div className="colorRojo"></div>
                <input
                    type="password"
                    placeholder="REPITA LA CONTRASEÑA*"
                    value={props.user.passwordRepeat}
                    name="passwordRepeat"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.errorpasswordRepeat ? (
                <p style={{ gridColumn: "1/4" }}>
                    {props.errors.errorpasswordRepeat}
                </p>
            ) : (
                ""
            )}
            <h4>FECHA DE NACIMIENTO</h4>
            <div className="date">
                <div>
                    <div className="colorRojo"></div>
                    <select name="day" onChange={props.ChangeText}>
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
                </div>
                <br />
                <div>
                    <div className="colorRojo"></div>
                    <select name="month" onChange={props.ChangeText}>
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
                </div>
                <br />
                <div>
                    <div className="colorRojo"></div>
                    <select name="year" onChange={props.ChangeText}>
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
                </div>
                {props.errors.errorday ? (
                    <p style={{ gridColumn: "1/2" }}>{props.errors.errorday}</p>
                ) : (
                    ""
                )}
                {props.errors.errorday ||
                props.errors.errormonth ||
                props.errors.erroryear ? (
                    <br />
                ) : (
                    ""
                )}
                {props.errors.errormonth ? (
                    <p style={{ gridColumn: "3/4" }}>
                        {props.errors.errormonth}
                    </p>
                ) : (
                    ""
                )}
                {props.errors.errorday ||
                props.errors.errormonth ||
                props.errors.erroryear ? (
                    <br />
                ) : (
                    ""
                )}
                {props.errors.erroryear ? (
                    <p style={{ gridColumn: "5/6" }}>
                        {props.errors.erroryear}
                    </p>
                ) : (
                    ""
                )}
            </div>
            {/* <div className="fecha">
                <div className="colorRojo"></div>
                <input type="text" placeholder="FECHA DE NACIMIENTO*" value={props.user.date} name="birthdate" onChange={props.ChangeText}/>
            </div> */}
            <div>
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="DIRECCIÓN*"
                    value={props.user.adress}
                    name="adress"
                    onChange={props.ChangeText}
                />
            </div>
            <br />
            <div>
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="TELÉFONO"
                    value={props.user.phone}
                    name="phone"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.erroradress ? (
                <p style={{ gridColumn: "1/2" }}>{props.errors.erroradress}</p>
            ) : (
                ""
            )}
            {props.errors.erroradress || props.errors.errorphone ? <br /> : ""}
            {props.errors.errorphone ? (
                <p style={{ gridColumn: "3/4" }}>{props.errors.errorphone}</p>
            ) : (
                ""
            )}
            <div className="correo">
                <div className="colorRojo"></div>
                <input
                    type="text"
                    placeholder="CORREO ELECTRÓNICO"
                    value={props.user.email}
                    name="email"
                    onChange={props.ChangeText}
                />
            </div>
            {props.errors.erroremail ? (
                <p style={{ gridColumn: "1/4" }}>{props.errors.erroremail}</p>
            ) : (
                ""
            )}
            <label className="terminos">
                <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    onChange={props.ChangeText}
                />
                Acepto terminos y condiciones
                <br />
                {props.errors.ckeckerror ? (
                    <p>{props.errors.ckeckerror}</p>
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
                    Leer Términos y condiciones
                </button>
                {active ? (
                    <TerminosCondicionesForm
                        change={change}
                        ChangeText={props.ChangeText}
                    />
                ) : (
                    ""
                )}
            </div>
            <div className="select">
                <div className="colorRojo"></div>
                <select
                    value={props.user.know}
                    name="know"
                    onChange={props.ChangeText}
                >
                    <option value="">¿Cómo supo de nosotros?</option>
                    <option value="1">Página Web</option>
                    <option value="2">Recomendación</option>
                    <option value="3">Asesor Comercial</option>
                    <option value="4">Redes sociales</option>
                    <option value="5">Otro</option>
                </select>
            </div>
            {props.errors.errorknow ? (
                <p style={{ gridColumn: "1/4" }}>{props.errors.errorknow}</p>
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
                .date {
                    display: grid;
                    grid-template-columns: 1fr 10px 1fr 10px 1fr;
                    grid-column: 1/4;
                    border: none;
                }

                select {
                    height: 60px;
                    border: none;
                    outline: none;
                    color: #33333399;
                }

                .condiciones {
                    grid-column: 1/4;
                    justify-self: felx-end;
                    border: none;
                    outline: none;
                    width: 200px;
                    padding: 10px;
                    cursor: pointer;
                    background: var(--puntoRojo);
                    color: white;
                    font-weight: 600;
                }

                form > div > div > input {
                    width: 100%;
                }

                .password {
                    grid-column: 1/4;
                }

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
                    font-size: 12px;
                    color: black;
                    grid-column: 1/2;
                    align-self: center;
                    justify-self: center;
                }

                form {
                    display: grid;
                    grid-template-columns: 1fr 20px 1fr;
                    margin-bottom: 100px;
                }

                .id,
                .correo,
                .select,
                .fecha {
                    grid-column: 1/4;
                }

                .docuemnt {
                    grid-column: 1/4;
                }

                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                }

                .download {
                    background-color: var(--puntoAzul);
                    cursor: pointer;
                }

                p {
                    font-size: 12px;
                    text-align: center;
                    color: var(--puntoRojo);
                }

                h4 {
                    color: #33333366;
                    grid-column: 1/4;
                    text-align: center;
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

                .colorRojo {
                    background-color: var(--puntoRojo);
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
                    font-size: 20px;
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

export default PersonasRegister;
