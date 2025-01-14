import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import readXlsxFile from "read-excel-file";
import ErrorsFileExcel from "./ErrorsFileExcel";
import Loading from '../../loading/Loading'
import { validateAseguradora, validateEmpresa } from '../../../utils/validateExcelFormat'

const SetExcelList = (props) => {
    const [data, setData] = useState(undefined);
    const [load, setLoad] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorsFile, setErrorsFile] = useState([]);
    const [showFileError, setshowFileError] = useState(false);

    const readExcel = async (e) => {
        try {
            console.log("cargando archivo");
            const xmls = await readXlsxFile(e.target.files[0]);
            setData(xmls);
        } catch (error) {
            const file = document.getElementById("file");
            file.value = null;
            setData(undefined);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoad(true)

        let errors = {};

        if (props.data?.insurrance) {
            console.log('aseguradora')
            const isValidateExcel = validateAseguradora(data)

            if (isValidateExcel) {

                const url = "/api/setAseguradosList";
                const result = await axios.post(url, { data, RUC: props.data.RUC });
                if (result.data.status == "ok") {
                    console.log(result.data.data)
                    let date = new Date();
                    date.setMonth(date.getMonth() + 1);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        html: `<p><strong>Numero de ususarios actuales: </strong>${result.data.info.num}</p><p><strong>Valor total a pagar: </strong>${result.data.info.value}$</p>`,
                        title: `Aseguradora agregada y activada hasta el ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                        showConfirmButton: true,
                    });
                    props.changeData(result.data.data);
                } else if (result.data.status == "fileError") {
                    const file = document.getElementsByClassName("file");
                    file.value = "";

                    setData(undefined);

                    errors = Object.assign({}, errors, {
                        errorData:
                            "Error en los datos del archivo, corrijalos y vuelva a subirlo",
                    });

                    setErrorsFile(result.data.message);
                    setshowFileError(true);
                } else {
                    if (result.data.message === "El excel no incluye la cuota por cada asegurado") {
                        const file = document.getElementsByClassName("file");
                        file.value = "";

                        setData(undefined);

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

                setData(undefined);

                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: `Esta intentado registrar una Aseguradora. La estructura del excel ha sido modificado, descargue nuevamente el excel y pase los datos de los usuarios.`,
                    showConfirmButton: true,
                });

            }
        } else {
            console.log('empresa')
            const isValidateExcel = validateEmpresa(data)
            if (isValidateExcel) {

                const url = "/api/setEmployeeList";
                const result = await axios.post(url, { data, RUC: props.data.RUC });
                if (result.data.status == "ok") {
                    console.log(result.data.data)
                    let date = new Date();
                    date.setMonth(date.getMonth() + 1);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        html: `<p><strong>Numero de ususarios actuales: </strong>${result.data.info.num}</p><p><strong>Valor total a pagar: </strong>${result.data.info.value}$</p>`,
                        title: `Empresa agregada y activada hasta el ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                        showConfirmButton: true,
                    });
                    props.changeData(result.data.data);
                } else if (result.data.status == "fileError") {
                    const file = document.getElementsByClassName("file");
                    file.value = "";

                    setData(undefined);

                    errors = Object.assign({}, errors, {
                        errorData:
                            "Error en los datos del archivo, corrijalos y vuelva a subirlo",
                    });

                    setErrorsFile(result.data.message);
                    setshowFileError(true);
                } else {
                    if (result.data.message === "El excel no incluye la cuota por cada asegurado") {
                        const file = document.getElementsByClassName("file");
                        file.value = "";

                        setData(undefined);

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

                setData(undefined);

                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: `Esta intentado actualizar una Empresa. La estructura del excel ha sido modificado, descargue nuevamente el excel y pase los datos de los usuarios.`,
                    showConfirmButton: true,
                });
            }
        }
        setLoad(false)
        setErrors(errors);
    };

    const toDate = (end) => {
        const endDate = new Date(end);
        return `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
    }

    return (
        <form className="content" onSubmit={onSubmit}>
            <span>
                <strong>Fecha de finalización: </strong>
                {toDate(props.data?.end)}
            </span>
            <br />
            {showFileError ? (
                <ErrorsFileExcel
                    setshowFileError={setshowFileError}
                    errorsFile={errorsFile}
                />
            ) : null}
            <div className="upload">
                <label className="label">
                    {data
                        ? "PLANTILLA CARGADA"
                        : `SUBIR PLANTILLA DE REGISTRO PARA ${props.data?.insurrance ? 'ASEGURADOS' : 'EMPLEADOS'}`}
                    <input
                        id="file"
                        className="uploadInput"
                        type="file"
                        onChange={(e) => {
                            readExcel(e);
                        }}
                        onClick={(e) => {
                            e.target.value = "";
                            setData(undefined);
                            setErrors({});
                        }}
                        accept=".xlsx"
                    />
                    {errors.errorData ? (
                        <>
                            <p style={{ top: "-50px" }}>
                                {errors.errorData}
                            </p>
                        </>
                    ) : null}
                </label>
            </div>
            <button disabled={data === undefined ? true : false}>
                {load ? <Loading color="white" /> : "Actualizar"}
            </button>
            <style jsx>{`
                form {
                    align-self: center;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                span {
                    color: var(--mainColor)
                }
                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                    position: relative;
                    padding: 10px;
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
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

                button {
                    margin: 10px;
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

                button:disabled {
                    cursor: auto;
                    opacity: .5;
                }
            `}</style>
        </form>
    );
};

export default SetExcelList;
