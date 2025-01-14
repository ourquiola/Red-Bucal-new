import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import readXlsxFile from "read-excel-file";
import ErrorsFileExcel from "./ErrorsFileExcel";
import Loading from '../../loading/Loading'
import { validateAseguradora, validateEmpresa } from '../../../utils/validateExcelFormat'

const AddInsuranceCarrier = (props) => {
    const [data, setData] = useState({
        type: "empresa",
    });
    const [load, setLoad] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorsFile, setErrorsFile] = useState([]);
    const [showFileError, setshowFileError] = useState(false);

    const onChange = (e) => {
        setData(
            Object.assign({}, data, {
                [e.target.name]: e.target.value,
            })
        );
    };

    const readExcel = async (e) => {
        try {
            console.log("cargando archivo");
            const xmls = await readXlsxFile(e.target.files[0]);
            setData(Object.assign({}, data, { data: xmls }));
        } catch (error) {
            const file = document.getElementById("file");
            file.value = null;
            setData(Object.assign({}, data, { data: undefined }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoad(true)

        let errors = {};
        let validate = true;

        if (!data.name) {
            errors = Object.assign({}, errors, {
                errorName: "Falta el nombre",
            });
            validate = false;
        }

        if (!data.phone) {
            errors = Object.assign({}, errors, {
                errorphone: "Falta el telefono",
            });
            validate = false;
        }

        if (!data.password) {
            errors = Object.assign({}, errors, {
                errorpassword: "Falta la contraseña",
            });
            validate = false;
        }

        if (!data.passwordRepeat) {
            errors = Object.assign({}, errors, {
                errorpasswordRepeat: "Falta la contraseña",
            });
            validate = false;
        }

        if (
            data.password &&
            data.passwordRepeat &&
            data.password !== data.passwordRepeat
        ) {
            errors = Object.assign({}, errors, {
                errorpasswordIgual: "las contraseñas no coinciden",
            });
            validate = false;
        }

        if (!data.email) {
            errors = Object.assign({}, errors, {
                erroremail: "Falta el email",
            });
            validate = false;
        }

        if (!data.data) {
            errors = Object.assign({}, errors, {
                errorData: `Falta el archivo de ${data.type == "aseguradora" ? "ASEGURADOS" : "EMPLEADOS"
                    }`,
            });
            validate = false;
        }

        if (!data.RUC) {
            errors = Object.assign({}, errors, {
                errorRUC: "Falta el RUC",
            });
            validate = false;
        }

        if (validate) {
            if (data.type == "empresa") {
                const isValidateExcel = validateEmpresa(data.data)
                if (isValidateExcel) {
                    const url = "/api/business";
                    const result = await axios.post(url, data);

                    if (result.data.status == "ok") {
                        let date = new Date();
                        date.setMonth(date.getMonth() + 1);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            html: `<p><strong>Numero de ususarios agregado: </strong>${result.data.info.num}</p><p><strong>Valor total a pagar: </strong>${result.data.info.value}$</p>`,
                            title: `Aseguradora agregada y activada hasta el ${date.getDate()}/${date.getMonth() + 1
                                }/${date.getFullYear()}`,
                            showConfirmButton: true,
                        });
                        let insuranceAdded = [...props.insuranceList];
                        insuranceAdded.push(result.data.insurance);
                        props.setInsuranceList(insuranceAdded);
                        props.changeAddUser();
                    } else if (result.data.status == "fileError") {
                        const file = document.getElementsByClassName("file");
                        file.value = "";

                        setData(Object.assign({}, data, { data: undefined }));

                        errors = Object.assign({}, errors, {

                            errorData:
                                "Error en los datos del archivo, corrijalos y vuelva a subirlo",
                        });

                        setErrorsFile(result.data.message);
                        setshowFileError(true);
                    } else {
                        console.log(result.data.message);
                        if (result.data.message === "el correo es invalido") {
                            errors = Object.assign({}, errors, {
                                erroremail: result.data.message,
                            });
                        } else if (
                            result.data.message ===
                            "El correo ya ha sido registrado"
                        ) {
                            errors = Object.assign({}, errors, {
                                erroremail: result.data.message,
                            });
                        } else if (
                            result.data.message === "El RUC ya ha sido registrado"
                        ) {
                            errors = Object.assign({}, errors, {
                                errorRUC: result.data.message,
                            });
                        } else if (result.data.message === "El excel no incluye la cuota por cada Empleado") {
                            const file = document.getElementsByClassName("file");
                            file.value = "";

                            setData(Object.assign({}, data, { data: undefined }));

                            Swal.fire({
                                position: "center",
                                icon: "warning",
                                title: result.data.message,
                                showConfirmButton: true,
                            });
                        }
                    }
                } else {

                    const file = document.getElementsByClassName("file");
                    file.value = "";

                    setData(Object.assign({}, data, { data: undefined }));

                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: `Esta intentado registrar una Empresa. La estructura del excel ha sido modificado, descargue nuevamente el excel y pase los datos de los usuarios.`,
                        showConfirmButton: true,
                    });
                }
            } else {

                const isValidateExcel = validateAseguradora(data.data)
                if (isValidateExcel) {



                    const url = "/api/insurrance";
                    const result = await axios.post(url, data);

                    if (result.data.status == "ok") {
                        let date = new Date();
                        date.setMonth(date.getMonth() + 1);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            html: `<p><strong>Numero de ususarios agregado: </strong>${result.data.info.num}</p><p><strong>Valor total a pagar: </strong>${result.data.info.value}$</p>`,
                            title: `Aseguradora agregada y activada hasta el ${date.getDate()}/${date.getMonth() + 1
                                }/${date.getFullYear()}`,
                            showConfirmButton: true,
                        });
                        let insuranceAdded = [...props.insuranceList];
                        insuranceAdded.push(result.data.insurance);
                        props.setInsuranceList(insuranceAdded);
                        props.changeAddUser();
                    } else if (result.data.status == "fileError") {
                        const file = document.getElementsByClassName("file");
                        file.value = "";

                        setData(Object.assign({}, data, { data: undefined }));

                        errors = Object.assign({}, errors, {
                            errorData:
                                "Error en los datos del archivo, corrijalos y vuelva a subirlo",
                        });

                        setErrorsFile(result.data.message);
                        setshowFileError(true);
                    } else {
                        console.log(result.data.message);
                        if (result.data.message === "el correo es invalido") {
                            errors = Object.assign({}, errors, {
                                erroremail: result.data.message,
                            });
                        } else if (
                            result.data.message ===
                            "El correo ya ha sido registrado"
                        ) {
                            errors = Object.assign({}, errors, {
                                erroremail: result.data.message,
                            });
                        } else if (
                            result.data.message === "El RUC ya ha sido registrado"
                        ) {
                            errors = Object.assign({}, errors, {
                                errorRUC: result.data.message,
                            });
                        } else if (result.data.message === "El excel no incluye la cuota por cada asegurado") {
                            const file = document.getElementsByClassName("file");
                            file.value = "";

                            setData(Object.assign({}, data, { data: undefined }));

                            Swal.fire({
                                position: "center",
                                icon: "warning",
                                title: result.data.message,
                                showConfirmButton: true,
                            });
                        }
                    }
                } else {

                    const file = document.getElementsByClassName("file");
                    file.value = "";

                    setData(Object.assign({}, data, { data: undefined }));

                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: `Esta intentado registrar una Aseguradora. La estructura del excel ha sido modificado, descargue nuevamente el excel y pase los datos de los usuarios.`,
                        showConfirmButton: true,
                    });
                }
            }
        }
        setLoad(false)
        setErrors(errors);
    };

    return (
        <div className="content">
            {showFileError ? (
                <ErrorsFileExcel
                    setshowFileError={setshowFileError}
                    errorsFile={errorsFile}
                />
            ) : null}
            <form onSubmit={onSubmit}>
                <svg onClick={props.changeAddUser} viewBox="0 0 512 512">
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>
                <label className="select">
                    TIPO: <br />
                    <select name="type" onChange={onChange}>
                        <option default value="empresa">
                            Empresa
                        </option>
                        <option value="aseguradora">Aseguradora</option>
                    </select>
                </label>
                <label>
                    NOMBRE DE LA {data.type.toUpperCase()}: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="name"
                        placeholder=""
                    />
                    {errors.errorName ? <p>{errors.errorName}</p> : null}
                </label>
                <label>
                    RUC DE LA {data.type.toUpperCase()}: <br />
                    <input
                        onChange={onChange}
                        type="text"
                        name="RUC"
                        placeholder=""
                    />
                    {errors.errorRUC ? <p>{errors.errorRUC}</p> : null}
                </label>
                <label>
                    CORREO: <br />
                    <input
                        onChange={onChange}
                        type="email"
                        name="email"
                        placeholder=""
                    />
                    {errors.erroremail ? <p>{errors.erroremail}</p> : null}
                </label>
                <label>
                    TELEFÓNO: <br />
                    <input
                        onChange={onChange}
                        type="number"
                        name="phone"
                        placeholder=""
                    />
                    {errors.errorphone ? <p>{errors.errorphone}</p> : null}
                </label>
                <label>
                    CONTRASEÑA: <br />
                    <input
                        onChange={onChange}
                        type="password"
                        name="password"
                        placeholder=""
                    />
                    {errors.errorpassword ? (
                        <p>{errors.errorpassword}</p>
                    ) : null}
                </label>
                <label>
                    REPITA LA CONTRASEÑA: <br />
                    <input
                        onChange={onChange}
                        type="password"
                        name="passwordRepeat"
                        placeholder=""
                    />
                    {errors.errorpasswordRepeat ? (
                        <p>{errors.errorpasswordRepeat}</p>
                    ) : null}
                    {errors.errorpasswordIgual ? (
                        <p>{errors.errorpasswordIgual}</p>
                    ) : null}
                </label>
                <a
                    href={`/archives/PLANTILLA-DE-REGISTRO-PARA-${data.type == "aseguradora" ? "ASEGURADOS" : "EMPLEADOS"
                        }.xlsx`}
                    download={`PLANTILLA-DE-REGISTRO-PARA-${data.type == "aseguradora" ? "ASEGURADOS" : "EMPLEADOS"
                        }.xlsx`}
                >
                    <span>
                        DESCARGAR PLANTILLA DE REGISTRO PARA{" "}
                        {data.type == "aseguradora"
                            ? "ASEGURADOS"
                            : "EMPLEADOS"}
                    </span>
                </a>
                <div className="upload">
                    <label className="label">
                        {data.data
                            ? "PLANTILLA CARGADA"
                            : `SUBIR PLANTILLA DE REGISTRO PARA ${data.type == "aseguradora"
                                ? "ASEGURADOS"
                                : "EMPLEADOS"
                            }`}
                        <input
                            id="file"
                            className="uploadInput"
                            type="file"
                            onChange={(e) => {
                                readExcel(e);
                            }}
                            onClick={(e) => {
                                e.target.value = "";
                                setData(
                                    Object.assign({}, data, { data: undefined })
                                );
                            }}
                            accept=".xlsx"
                        />
                        {errors.errorData ? (
                            <p style={{ bottom: "-40px" }}>
                                {errors.errorData}
                            </p>
                        ) : null}
                    </label>
                </div>
                <button disabled={load}>
                    {load ? <Loading color="white" /> : "Agregar"}
                </button>
            </form>

            <style jsx>{`
                .content {
                    top: 0;
                    left: 0;
                    position: fixed;
                    background: #33333388;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    z-index: 1000;
                }

                .select {
                    grid-column: 1/3;
                    display: grid;
                    justify-items: center;
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
                    position: relative;
                }

                .date {
                    grid-column: 1/3;
                }

                .date-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 10px;
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
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translate(-50%);
                    font-size: 12px;
                    text-align: center;
                    color: var(--puntoRojo);
                    width: 100%;
                }
                button {
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: ${load ? 'auto' : 'pointer'};
                    grid-column: 1/3;
                    justify-self: center;
                    outline: none;
                }

                a {
                    display: grid;
                    height: 100%;
                    font-size: 12px;
                    font-weight: 600;
                    color: white;
                    background-color: var(--puntoRojo);
                    align-items: center;
                    justify-items: center;
                    text-decoration: none;
                }

                span {
                    width: 70%;
                    text-align: center;
                }

                .upload {
                    display: grid;
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                    position: relative;
                }

                .uploadInput {
                    position: absolute;
                    right: 0;
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

                .label {
                    justify-self: center;
                    width: 70%;
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default AddInsuranceCarrier;
