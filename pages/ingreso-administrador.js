import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import Ingreso from '../components/registro-ingreso/Ingreso'
import axios from "axios"



const Ingresar = () => {


    const [login, setLogin] = useState({});
    const [errorsLogin, setErrorsLogin] = useState({});


    const ChangeTextLogin = e => {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }))
    }

    const router = useRouter()

    const onSubmitLogin = async e => {
        e.preventDefault()

        let err = {}
        let validate = true;

        if (!login.password) {
            err = Object.assign({}, err, { error: 'Falta la contraseña' })
            validate = false
        }

        if (!login.email) {
            err = Object.assign({}, err, { error: 'Falta la cedula' })
            validate = false
        }

        setErrorsLogin(err)

        if (validate) {
            const url = '/api/adminAthenticate'

            try {
                const response = await axios.post(url, login)
                console.log(response);
                if ( response.data.status === 'ok') {
                    if (response.data.type === 'ok_admin') {
                        sessionStorage.setItem('tokenAdmin', response.data.id)
                        router.push('/administrador')
                    } else {
                        if (response.data.type === 'ok_master') {
                            sessionStorage.setItem('tokenMaster', response.data.id)
                            router.push('/master')
                        }
                    }
                } else {

                    if (response.data.message === 'El usuario no existe') {
                        console.log(response.data.message);
                        err = Object.assign({}, err, { error: response.data.message })
                    } else if (response.data.message === 'Contraseña invalida') {
                        console.log(response.data.message);
                        err = Object.assign({}, err, { error: response.data.message })
                    } else {
                        console.log(response.data.message);
                    }

                    setErrorsLogin(err)
                }

            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <Layout>

            <div className="content">

                <div className="diente1"></div>
                <div className="form">
                    <h2>INGRESO <br/> ADMINISTRADOR</h2>
                    <p>Identifiquese con su email y contraseña.</p>
                    <Ingreso type="admin" onSubmitLogin={onSubmitLogin} ChangeTextLogin={ChangeTextLogin} login={login} errorsLogin={errorsLogin}/>
                </div>
                <div className="diente2"></div>

            </div>

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 4fr 1fr;
                }    

                .diente1, .diente2 {
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
                    text-align: center;
                }

                p {
                    color: #333333aa;
                    font-size: 14px;
                }
                
                
            `}</style>

        </Layout>
    )
}

export default Ingresar
