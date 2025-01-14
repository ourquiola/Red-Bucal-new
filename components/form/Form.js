import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const Form = () => {

    const [data, setData] = useState({});

    const onSubmit = async e => {
        e.preventDefault()
        const url = '/api/email/sendMail'
        const result = await axios.post(url,data)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Correo enviado',
            showConfirmButton: false,
            timer: 2000
        })
        console.log(result)
    }

    const onChangeData = (e) => {
        setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
    }

    return (
        <form>
            <h4>Déjanos un mensaje</h4>
            <label className="nombre">Nombre
                <input type="text" name="name" onChange={onChangeData}/>
            </label>
            <label className="telefono">Teléfono
                <input type="number" name="phone" onChange={onChangeData}/>
            </label>
            <label className="email">Email
                <input type="text" name="email" onChange={onChangeData}/>
            </label>
            <label className="mensaje">Mensaje
                <textarea name="message" onChange={onChangeData}></textarea>
            </label>

            <button type="submit" onClick={onSubmit}>Enviar</button>

            <style jsx>{`

                form {
                    height: 85%;
                    background: white;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 2fr 1fr;
                    border: 1px solid rgb(0, 165, 207, .1);
                    z-index: 10;
                    box-shadow: 0px 15px 12px 1px #33333355;
                }

                h4 {
                    grid-column: 1/3;
                    align-self: center;
                    margin: 0 20px;
                    color: var(--mainColor);
                }
                .mensaje {
                    grid-column: 1/3;
                    margin-top: 5px;
                }

                label {
                    margin: 0 20px;
                    display: grid;
                    grid-template-rows: 30px 1fr;
                    color: var(--mainColorClaro);
                    font-size: 14px;
                    font-weight: 500;
                }

                input, textarea {
                    display: block;
                    border: 1px solid #33333333;
                    border-radius: 4px;
                    width: 100%;
                }   

                button {
                    color: white;
                    background: var(--puntoAzul);
                    margin: 0 20px;
                    align-self: center;
                    height: 40px;
                    border: 1px solid #33333333;
                    border-radius: 4px;
                    outline: none;
                    transition: background .3s;
                    cursor: pointer;
                }

                button:hover {
                    background: var(--botonesHover);
                }

                .email {
                    grid-column: 1/3;
                }


                @media screen and (max-width: 800px) {

                    form {
                        height: 100%;
                    }
                }
            
            `}</style>
        </form>
    )
}

export default Form
