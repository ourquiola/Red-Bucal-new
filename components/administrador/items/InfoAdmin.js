import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import axios from "axios";

const InfoAdmin = (props) => {

    const [info, setInfo] = useState({})

    useEffect(() => {
        
        let inf = {}

        inf.RUCRUCChange = props.data.RUC
        inf.RUC = props.data.RUC
        inf.businessPhone = props.data.businessPhone
        inf.businessAdress = props.data.businessAdress
        inf.businessMail = props.data.businessMail

        setInfo(inf)

    }, []);

    const onchange = (e) => {
        setInfo(Object.assign({}, info, { [e.target.name]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const url = '/api/editBusinessData'
        try {

            const result = await axios.put(url, info)
            if (result.data.status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Información actualizada',
                    showConfirmButton: false,
                    timer: 1000
                })
                props.changeData(result.data.data);
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                ESTADO: <br/>
                <p>{props.data.state ? "ACTIVO" : "INACTIVO"}</p>
            </label>
            <label>
                EMPLEADOS: <br/>
                <p>{props.data.identifications.length}</p>
            </label>
            <label>
                RUC: <br/>
                <input type="text" name="RUCChange" value={info.RUC} onChange={onchange}/>
            </label>
            <label>
                CELULAR: <br/>
                <input type="number" name="businessPhone" value={info.businessPhone} onChange={onchange}/>
            </label>
            <label>
                DIRECCIÓN: <br/>
                <input type="text" name="businessAdress" value={info.businessAdress} onChange={onchange}/>
            </label>
            <label>
                CORREO: <br/>
                <input type="email" name="businessMail" value={info.businessMail} onChange={onchange}/>
            </label>
            <button>Actualizar</button>

            <style jsx>{`
                
                form {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }    

                label {
                    margin: 10px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }

                input {
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
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
                }
                
                @media screen and (max-width: 500px) {

                    form {
                        grid-template-columns: 1fr;
                        margin: 50px 0 0 100px; 
                    }

                }

            `}</style>
        </form>
    )
}

export default InfoAdmin
