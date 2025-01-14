import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../loading/Loading";

const PagoVirtual = (props) => {
    const [data, setData] = useState({
        cardType: "-",
    });
    const [err, setErr] = useState({});
    const [load, setLoad] = useState(false);

    const onChange = (e) => {
        if (e.target.name === "expMonth") {
            if (e.target.value.length <= 2)
                setData(
                    Object.assign({}, data, { [e.target.name]: e.target.value })
                );
        } else if (e.target.name === "expYear") {
            if (e.target.value.length <= 2)
                setData(
                    Object.assign({}, data, { [e.target.name]: e.target.value })
                );
        } else if (e.target.name === "cvv") {
            if (e.target.value.length <= 3)
                setData(
                    Object.assign({}, data, { [e.target.name]: e.target.value })
                );
        } else if (e.target.name === "phone") {
            setData(
                Object.assign({}, data, {
                    [e.target.name]: Number(e.target.value),
                })
            );
        } else {
            setData(
                Object.assign({}, data, { [e.target.name]: e.target.value })
            );
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        let enable = true;

        /* pruebas */
        /* const url = "https://sandbox.paguelofacil.com/rest/processTx/AUTH_CAPTURE/" */
        /* Produccion */
        const url =
            "https://secure.paguelofacil.com/rest/processTx/AUTH_CAPTURE/";

        const {
            email,
            phone,
            address,
            cardNumber,
            expMonth,
            expYear,
            cvv,
            firstName,
            lastName,
            cardType,
        } = data;

        const date = new Date();

        const finishDate = `${date.getDate()}/${date.getMonth() + 1}/${
            date.getFullYear() + 1
        }`;

        let payload = {
            /* produccion */
            cclw: "8322FDB3B17351C9B9C8EA8FE01874AA7F31F3BAC4695E9996FFC88912AB0E6D8938B03CA4935DCE3D4EAE90D67E09C43D76B583318C2872C62D03D87A8A7B60",
            /* pruebas */
            /* cclw: 'D17B05A095489D1176560B4666A283454185F353F401D0201CC5C16F92535DF6B1DEBA18E79442CC0D6F75FD024207680AFBDFD6CF015478BF30CBEF9160A08D', */
            amount: props.pago, //El monto o valor total de la transacción a realizar. NO PONER
            taxAmount: 0.00,
            email, //String MaxLength:100 Email del
            phone, //Numeric MaxLength:16 Teléfono del Tarjeta habiente,
            address, //String MaxLength:100 Dirección del Tarjeta,
            concept: "Su Plan de Red Bucal ha sido activado", //MaxLength:100 ;concepto de la transacción en proceso
            description: `Fecha de vigencia hasta el ${finishDate}`, //MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
            lang: "ES", //EN
            customFieldValues: [
                {
                    id: "idOrder",
                    nameOrLabel: "Nro de Orden",
                    value: "OD-2341233",
                },
                {
                    id: "idUser",
                    nameOrLabel: "User",
                    value: "351234",
                },
            ],
            cardInformation: {
                cardNumber,
                expMonth, //Mes de expiración de la tarjeta, siempre 2 dígitos
                expYear, //Numeric Ej.:02 Año de expiración de la tarjeta.
                cvv, //Código de Seguridad de la tarjeta Numeric MaxLength:3
                firstName, //String MaxLength:25 Nombre del tarjeta habiente
                lastName, //String MaxLength:25 Apellido del Tarjeta habiente
                cardType,
            },
        };

        if (
            cardType !== "-" &&
            firstName &&
            lastName &&
            phone &&
            address &&
            email &&
            cardNumber &&
            expMonth &&
            cvv &&
            expYear
        ) {
            try {
                const result = await axios.post(
                    url,
                    payload,
                    /* produccion */
                    {
                        headers: {
                            authorization: "QgVVaUukMlhuk1XtEGlLqbOtHhoQu349",
                            "content-type": "application/json",
                        },
                    }
                );
                /* quitar el negativo para que se realice el pago */
                if (result.data.success) {
                    /* quitar lo que esta despues del Or */
                    if (Number(result.data.data.totalPay)) {
                        let response;

                        if (props.type === "user") {
                            const URL_EDIT_USER_SERVICE = "/api/editUser";
                            response = await axios.put(URL_EDIT_USER_SERVICE, {
                                identification:
                                    props.data.identification || props.data.RUC,
                                state: props.data.state,
                            });
                        } else if (props.type === "empresa") {
                            const URL_EDIT_BUSSINES_SERVICE =
                                "/api/editBusiness";
                            response = await axios.put(
                                URL_EDIT_BUSSINES_SERVICE,
                                {
                                    identification: props.data.RUC,
                                    state: true,
                                    identifications: props.data.identifications,
                                }
                            );
                        }

                        props.setData(response.data.data);

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Pago realizado Satisfactoriamente",
                            showConfirmButton: false,
                            timer: 2000,
                        });

                        await axios.get(
                            `/api/emailpay?email=${props.data.email}
                            &name=${props.data.name}
                            &identification=${props.data.identification}
                            &start=${props.data.start}
                            &end=${props.data.end}
                            &plan=${props.data.plan}`
                        );

                        props.changeVirtual();
                        enable = false;
                    } else {
                        Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "Pago Fallido, no tienes fondos suficientes.",
                            showConfirmButton: false,
                            timer: 2500,
                        });
                    }
                } else {
                    console.log(result.data);
                    const { code } = result.data.headerStatus;

                    let errCode = {};

                    if (code === 605 || code == 607)
                        errCode = Object.assign({}, errCode, {
                            numberCard: "Número no valido*",
                        });
                    if (code === 606)
                        errCode = Object.assign({}, errCode, {
                            securityCode: "Código invalido*",
                        });
                    if (code === 608)
                        errCode = Object.assign({}, errCode, {
                            email: "Email invalido*",
                        }); //INVALID EMAIL
                    if (code === 609)
                        errCode = Object.assign({}, errCode, {
                            firstName: "nombre invalido*",
                        }); //INVALID NAM
                    if (code === 610)
                        errCode = Object.assign({}, errCode, {
                            lastName: "apellido invalido*",
                        }); //INVALID LAST NAM
                    if (code === 611)
                        errCode = Object.assign({}, errCode, {
                            phone: "celular invalido*",
                        }); //INVALID PHONE NUMBE
                    if (code === 612) {
                        Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "Al realizar 3 transacciones con la misma tarjeta y datos de procesamiento el sistema detecta que es posiblemente una transacción duplicada y solo permite hasta 3 intentos.\nPor favor vuelve a intentar en unos minutos.",
                            showConfirmButton: true,
                        });
                    }

                    setErr(errCode);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            let errFields = {};

            if (cardType === "-")
                errFields = Object.assign({}, errFields, {
                    type: "Campo vacio*",
                });
            if (!firstName)
                errFields = Object.assign({}, errFields, {
                    firstName: "Campo vacio*",
                });
            if (!lastName)
                errFields = Object.assign({}, errFields, {
                    lastName: "Campo vacio*",
                });
            if (!phone) {
                errFields = Object.assign({}, errFields, {
                    phone: "Campo vacio*",
                });
            } else if (String(phone).length > 16) {
                errFields = Object.assign({}, errFields, {
                    phone: "Maximo 16 digitos*",
                });
            }
            if (!address)
                errFields = Object.assign({}, errFields, {
                    address: "Campo vacio*",
                });
            if (!email)
                errFields = Object.assign({}, errFields, {
                    email: "Campo vacio*",
                });
            if (!cardNumber)
                errFields = Object.assign({}, errFields, {
                    numberCard: "Campo vacio*",
                });
            if (!expMonth) {
                errFields = Object.assign({}, errFields, {
                    month: "Campo vacio*",
                });
            } else if (expMonth <= 0 || expMonth >= 13) {
                errFields = Object.assign({}, errFields, {
                    month: "Mes invalido*",
                });
            } else if (expMonth.length < 2) {
                errFields = Object.assign({}, errFields, {
                    month: "Mes invalido deben ser dos digitos*",
                });
            }
            if (!expYear) {
                errFields = Object.assign({}, errFields, {
                    year: "Campo vacio*",
                });
            } else if (expYear.length < 2) {
                errFields = Object.assign({}, errFields, {
                    year: "Año invalido deben ser dos digitos*",
                });
            }
            if (!cvv)
                errFields = Object.assign({}, errFields, {
                    securityCode: "Campo vacio*",
                });

            setErr(errFields);
        }
        if (enable) setLoad(false);
    };
    /*  */
    return (
        <div className="content">
            <form onSubmit={onSubmit}>
                <svg
                    onClick={() => {
                        props.changeVirtual();
                    }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>

                <h3>PAGO VIRTUAL</h3>

                <label>
                    Nombre: <br />
                    <input type="text" name="firstName" onChange={onChange} />
                    {err.firstName ? <p>{err.firstName}</p> : ""}
                </label>
                <label>
                    Apellido: <br />
                    <input type="text" name="lastName" onChange={onChange} />
                    {err.lastName ? <p>{err.lastName}</p> : ""}
                </label>
                <label>
                    Celular: <br />
                    <input type="number" name="phone" onChange={onChange} />
                    {err.phone ? <p>{err.phone}</p> : ""}
                </label>
                <label>
                    dirección: <br />
                    <input type="text" name="address" onChange={onChange} />
                    {err.address ? <p>{err.address}</p> : ""}
                </label>
                <label>
                    Email: <br />
                    <input type="text" name="email" onChange={onChange} />
                    {err.email ? <p>{err.email}</p> : ""}
                </label>
                <label>
                    Tipo de Tarjeta: <br />
                    <select name="cardType" onChange={onChange}>
                        <option value="-">-</option>
                        <option value="VISA">VISA</option>
                        <option value="MASTERCARD">MASTERCARD</option>
                    </select>
                    {err.type ? <p>{err.type}</p> : ""}
                </label>
                <label>
                    Numero de tarjeta: <br />
                    <input
                        type="text"
                        name="cardNumber"
                        onChange={onChange}
                        placeholder="ej. 4916000000000000"
                    />
                    {err.numberCard ? <p>{err.numberCard}</p> : ""}
                </label>
                <label>
                    Mes de expiración: <br />
                    <input
                        type="text"
                        name="expMonth"
                        onChange={onChange}
                        placeholder="ej. 02"
                        value={data.expMonth ? data.expMonth : ""}
                    />
                    {err.month ? <p>{err.month}</p> : ""}
                </label>
                <label>
                    Año de expiración: <br />
                    <input
                        type="text"
                        name="expYear"
                        onChange={onChange}
                        placeholder="ej. 25"
                        value={data.expYear ? data.expYear : ""}
                    />
                    {err.year ? <p>{err.year}</p> : ""}
                </label>
                <label>
                    CVV: <br />
                    <input
                        type="text"
                        name="cvv"
                        onChange={onChange}
                        placeholder="ej. 003"
                        value={data.cvv ? data.cvv : ""}
                    />
                    {err.securityCode ? <p>{err.securityCode}</p> : ""}
                </label>

                <button type="submit" disabled={load}>
                    {load ? <Loading /> : "Pagar"}
                </button>
            </form>

            <style jsx>{`
                .content {
                    z-index: 1000;
                    background: #33333366;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    height: 100vh;
                }

                section {
                    display: grid;
                    grid-template-rows: 30px 1fr 1fr;
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

                h3 {
                    margin: 10px 0;
                    text-align: center;
                    font-weight: 400;
                    grid-column: 1/3;
                }

                form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    background: white;
                    border-radius: 30px;
                    padding: 30px;
                }

                label {
                    margin: 10px 10px;
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

                input,
                select {
                    displya: inline-block;
                    outline: none;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                select {
                    width: 100%;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
                }

                button {
                    grid-column: 1/3;
                    align-self: center;
                    justify-self: center;
                    margin-top: 10px;
                    border: none;
                    background: ${load ? "none" : "var(--mainColor)"};
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: ${load ? "auto" : "pointer"};
                }
            `}</style>
        </div>
    );
};

export default PagoVirtual;
