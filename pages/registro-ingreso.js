import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import readXlsxFile from "read-excel-file";
import Layout from "../components/layout/Layout";
import Registro from "../components/registro-ingreso/Registro";
import Ingreso from "../components/registro-ingreso/Ingreso";
import RegisterAll from "../components/registro-ingreso/RegisterAll";
import axios from "axios";

const Ingresar = () => {
    const router = useRouter();

    const [register, setregister] = useState(false);
    const [user, setUser] = useState({});
    const [login, setLogin] = useState({});
    const [business, setBusiness] = useState({});
    const [errors, setErrors] = useState({});
    const [errorsBusiness, setErrorsBusiness] = useState({});
    const [errorsLogin, setErrorsLogin] = useState({});
    const [regLog, setRegLog] = useState(false);

    const afi = () => {
        if (router.query.afiliacion) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        if (router.query.afiliacion) {
            setUser(
                Object.assign({}, user, {
                    afiliacion: router.query.afiliacion.replaceAll("-", " "),
                })
            );
            setBusiness(
                Object.assign({}, business, {
                    afiliacion: router.query.afiliacion.replaceAll("-", " "),
                })
            );
        }
    }, [regLog]);

    useEffect(() => {
        setRegLog(afi());
    }, [router.query.afiliacion]);

    const changeRegister = () => {
        setregister(!register);
    };

    const ChangeText = (e) => {
        setUser(Object.assign({}, user, { [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        let object = {};
        if (user.identification) {
            object = Object.assign({}, object, { RUC: user.identification });
        }
        if (user.password) {
            object = Object.assign({}, object, { password: user.password });
        }
        if (user.email) {
            object = Object.assign({}, object, { businessMail: user.email });
        }
        setBusiness(Object.assign({}, business, object));
    }, [user]);

    const ChangeTextLogin = (e) => {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }));
    };

    const onChangeBusiness = (e) => {
        setBusiness(
            Object.assign({}, business, { [e.target.name]: e.target.value })
        );
    };

    const onSubmitPersonalRegister = async (e) => {
        e.preventDefault();

        let checked = true;
        let objectErrors = {};

        if (!user.name) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                errorName: "falta el nombre",
            });
            checked = false;
        }

        if (!user.lastname) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                errorlastname: "falta el apellido",
            });
            checked = false;
        }

        if (!user.adress) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                erroradress: "falta la direccion",
            });
            checked = false;
        }

        if (!user.phone) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                errorphone: "falta el teléfono",
            });
            checked = false;
        }

        if (!user.email) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                erroremail: "falta el email",
            });
            checked = false;
        }

        if (!user.know) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                errorknow: "Por favor seleccione una opción",
            });
            checked = false;
        }

        if (!user.password) {
            objectErrors = Object.assign({}, objectErrors, {
                errorpassword: "falta la contraseña",
            });
            checked = false;
        }

        if (user.passwordRepeat) {
            /* ya */
            if (user.password !== user.passwordRepeat) {
                objectErrors = Object.assign({}, objectErrors, {
                    errorpasswordRepeat: "las contraseñas no coinciden",
                });
                checked = false;
            }
        } else {
            objectErrors = Object.assign({}, objectErrors, {
                errorpasswordRepeat: "falta repetir la contraseña",
            });
            checked = false;
        }

        if (!user.typeDoc) {
            objectErrors = Object.assign({}, objectErrors, {
                errorTypeDoc: "falta el tipo",
            });
            checked = false;
        }

        if (!user.identification) {
            /* ya */
            objectErrors = Object.assign({}, objectErrors, {
                erroridentification: "falta el documento",
            });
            checked = false;
        }

        if (!user.day) {
            objectErrors = Object.assign({}, objectErrors, {
                errorday: "falta el dia",
            });
            checked = false;
        }

        if (!user.month) {
            objectErrors = Object.assign({}, objectErrors, {
                errormonth: "falta el mes",
            });
            checked = false;
        }

        if (!user.year) {
            objectErrors = Object.assign({}, objectErrors, {
                erroryear: "falta el año",
            });
            checked = false;
        }

        if (!user.checkbox) {
            objectErrors = Object.assign({}, objectErrors, {
                ckeckerror: "debes aceptar los terminos y condiciones",
            });
            checked = false;
        }

        setErrors(objectErrors);

        objectErrors = {};

        if (checked) {
            const url = "/api/users";

            try {
                const response = await axios.post(url, user);
                if (response.data.status === "ok") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Usuario registrado satisfactoriamente",
                        text: "Ingresa a tu cuenta para poder activarla!",
                        showConfirmButton: true,
                    });
                    setLogin({
                        email: user.email,
                        password: user.password,
                    });
                    setUser({});
                    setregister(false);
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: "Ha ocurrido un problema, revisa los datos",
                        showConfirmButton: false,
                        timer: 1000,
                    });

                    const message = response.data.message;

                    if (message === "el correo es invalido") {
                        objectErrors = Object.assign({}, objectErrors, {
                            erroremail: message,
                        });
                    } else if (message === "El correo ya ha sido registrado") {
                        objectErrors = Object.assign({}, objectErrors, {
                            erroremail: message,
                        });
                    } else if (
                        message ===
                        "La cedula de ciudadania ya ha sido registrada"
                    ) {
                        objectErrors = Object.assign({}, objectErrors, {
                            erroridentification: message,
                        });
                    }

                    setErrors(objectErrors);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Falta algún dato",
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    const readExcel = async (e) => {
        try {
            const xmls = await readXlsxFile(e.target.files[0]);
            setBusiness(Object.assign({}, business, { data: xmls }));
        } catch (error) {
            console.log(error);
            alert("archivo equivocado, por favor suba el archvo Excel");
        }
    };

    const cleanInputFile = (e) => {
        setBusiness(Object.assign({}, business, { data: undefined }));
        e.target.value = "";
    };

    const onSubmitBusinessRegister = async (e) => {
        e.preventDefault();

        let checked = true;
        let objectErrors = {};

        if (!business.businessName) {
            objectErrors = Object.assign({}, objectErrors, {
                errorName: "falta el nombre",
            });
            checked = false;
        }

        if (!business.RUC) {
            /* } else { */
            objectErrors = Object.assign({}, objectErrors, {
                errorRUC: "falta el RUC",
            });
            checked = false;
        }

        if (!business.businessAdress) {
            objectErrors = Object.assign({}, objectErrors, {
                errorAdress: "falta la dirección",
            });
            checked = false;
        }

        if (!business.businessPhone) {
            objectErrors = Object.assign({}, objectErrors, {
                errorPhone: "falta el teléfono",
            });
            checked = false;
        }

        if (!business.businessMail) {
            objectErrors = Object.assign({}, objectErrors, {
                errorEmail: "falta el email",
            });
            checked = false;
        }

        if (!business.know) {
            objectErrors = Object.assign({}, objectErrors, {
                errorKnow: "Por favor seleccione una opción",
            });
            checked = false;
        }

        if (!business.data) {
            objectErrors = Object.assign({}, objectErrors, {
                errorData: "falta la plantilla de empleados",
            });
            checked = false;
        }

        if (!business.checkbox) {
            objectErrors = Object.assign({}, objectErrors, {
                errorCheckbox: "debes aceptar los terminos y condiciones",
            });
            checked = false;
        }

        if (!business.password) {
            objectErrors = Object.assign({}, objectErrors, {
                errorPassword: "falta la contraseña",
            });
            checked = false;
        }

        if (business.passwordRepeat) {
            if (business.password !== business.passwordRepeat) {
                objectErrors = Object.assign({}, objectErrors, {
                    errorPasswordRepeat: "las contraseñas no coinciden",
                });
                checked = false;
            }
        } else {
            objectErrors = Object.assign({}, objectErrors, {
                errorPasswordRepeat: "falta la contraseña",
            });
            checked = false;
        }

        setErrorsBusiness(objectErrors);

        objectErrors = {};

        if (checked) {
            const url = "/api/business";
            try {
                const response = await axios.post(url, business);
                console.log(response.data.status);
                if (response.data.status === "ok") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Empresa registrada satisfactoriamente",
                        showConfirmButton: false,
                        timer: 2000,
                    });

                    sessionStorage.setItem("token", response.data.token);
                    setLogin({
                        identification: business.RUC,
                        password: business.password,
                    });
                    setBusiness({});
                    setUser({});
                    setregister(false);
                } else if (response.data.status === "errorPersonal") {
                    console.log(response.data.message);
                } else {
                    const message = response.data.message;

                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    if (message === "El correo ya ha sido registrado") {
                        objectErrors = Object.assign({}, objectErrors, {
                            errorEmail: message,
                        });
                    } else if (message === "el correo es invalido") {
                        objectErrors = Object.assign({}, objectErrors, {
                            errorEmail: message,
                        });
                    } else if (message === "el RUC ya ha sido registrado") {
                        objectErrors = Object.assign({}, objectErrors, {
                            errorRUC: message,
                        });
                    }

                    setErrorsBusiness(objectErrors);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Falta algún dato",
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    const onSubmitLogin = async (e) => {
        e.preventDefault();

        let validate = true;
        let err = {};

        if (!login.password) {
            err = Object.assign({}, err, { error: "Falta la contraseña" });
            validate = false;
        }

        if (!login.email) {
            err = Object.assign({}, err, { error: "Falta el email" });
            validate = false;
        }

        setErrorsLogin(err);

        if (validate) {
            const url = "/api/authenticate";

            try {
                const response = await axios.post(url, login);
                console.log(response);
                if (response.data.status === "ok") {
                    if (response.data.type === "ok_user") {
                        sessionStorage.setItem("tokenUser", response.data.id);
                        router.push("/usuario");
                    } else {
                        if (response.data.type === "ok_business") {
                            sessionStorage.setItem(
                                "tokenBusiness",
                                response.data.id
                            );
                            router.push("/empresa");
                        }
                    }
                } else {
                    if (response.data.message === "El usuario no existe") {
                        console.log(response.data.message);
                        err = Object.assign({}, err, {
                            error: response.data.message,
                        });
                    } else if (
                        response.data.message === "Contraseña invalida"
                    ) {
                        console.log(response.data.message);
                        err = Object.assign({}, err, {
                            error: response.data.message,
                        });
                    } else {
                        console.log(response.data.message);
                    }

                    setErrorsLogin(err);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const ChangeRegLog = () => {
        setRegLog(!regLog);
    };

    return (
        <Layout>
            {register ? (
                <RegisterAll
                    changeRegister={changeRegister}
                    ChangeText={ChangeText}
                    onSubmitBusinessRegister={onSubmitBusinessRegister}
                    onSubmitPersonalRegister={onSubmitPersonalRegister}
                    user={user}
                    onChangeBusiness={onChangeBusiness}
                    readExcel={readExcel}
                    business={business}
                    errors={errors}
                    errorsBusiness={errorsBusiness}
                    cleanInputFile={cleanInputFile}
                />
            ) : (
                <div className="content">
                    <div className="diente1"></div>
                    {regLog ? (
                        <div className="form reg">
                            <h2>
                                REGISTRO
                                {router.query.afiliacion ? (
                                    <>
                                        <br />{" "}
                                        {router.query.afiliacion
                                            .replaceAll("-", " ")
                                            .toUpperCase()}
                                    </>
                                ) : null}
                            </h2>
                            <p>
                                Ingrese un email iniciar el proceso de registro.
                            </p>
                            <Registro
                                changeRegister={changeRegister}
                                ChangeText={ChangeText}
                                user={user}
                                errors={errors}
                                errorsBusiness={errorsBusiness}
                                ChangeRegLog={ChangeRegLog}
                            />
                        </div>
                    ) : (
                        <div className="form">
                            <h2>INGRESO</h2>
                            <p>
                                Identifiquese con su email y contraseña y podrá
                                acceder a los contenidos del portal.
                            </p>
                            <Ingreso
                                onSubmitLogin={onSubmitLogin}
                                ChangeTextLogin={ChangeTextLogin}
                                login={login}
                                errorsLogin={errorsLogin}
                                ChangeRegLog={ChangeRegLog}
                            />
                        </div>
                    )}
                    <div className="diente2"></div>
                </div>
            )}

            <style jsx>{`
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 4fr 1fr;
                }

                .diente1,
                .diente2 {
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .diente1 {
                    background-image: url("/img/diente-registro.png");
                }

                .diente2 {
                    background-image: url("/img/diente-ingresar.png");
                }

                .linea {
                    background-color: var(--puntoRojo);
                    height: 60%;
                    align-self: center;
                }

                .form {
                    height: 300px;
                    align-self: center;
                    justify-self: center;
                    display: grid;
                    grid-template-rows: 1fr 1fr 3fr;
                    width: 350px;
                }

                h2 {
                    font-size: 30px;
                    color: #333333aa;
                    font-weight: 610;
                }

                p {
                    color: #333333aa;
                    font-size: 14px;
                }

                @media screen and (max-width: 1200px) {
                    .content {
                        grid-template-columns: 0.5fr 2fr 2px 2fr 0.5fr;
                    }
                }

                @media screen and (max-width: 1000px) {
                    .content {
                        margin-top: 100px;
                        grid-template-columns: 1fr 4fr 1fr;
                        grid-template-rows: 1fr 2px 1fr;
                        height: 800px;
                    }

                    .linea {
                        grid-column: 2/3;
                        grid-row: 2/3;
                        width: 60%;
                        justify-self: center;
                    }

                    .diente1 {
                        grid-column: 1/2;
                        grid-row: 1/4;
                    }

                    .diente2 {
                        grid-column: 3/4;
                        grid-row: 1/4;
                    }

                    .reg {
                        grid-row: 3/4;
                    }
                }

                @media screen and (max-width: 600px) {
                    .content {
                        margin-top: 100px;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 2px 1fr;
                        height: 800px;
                        position: relative;
                    }

                    .diente1 {
                        z-index: -1;
                        position: absolute;
                        left: 0;
                        top: 35%;
                        width: 100px;
                        height: 200px;
                    }

                    .diente2 {
                        z-index: -1;
                        position: absolute;
                        right: 0;
                        top: 40%;
                        width: 100px;
                        height: 200px;
                    }
                }

                @media screen and (max-width: 400px) {
                    .form {
                        width: 300px;
                    }
                }

                @media screen and (max-width: 340px) {
                    .content {
                        margin-top: 50px;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Ingresar;
