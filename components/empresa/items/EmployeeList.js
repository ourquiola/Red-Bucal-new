import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import InfoUser from './usuario/InfoUser';
import AddUser from './usuario/AddUser';

const EmployeeList = (props) => {

    const [usuarios, setUsuarios] = useState({});
    const [info, setInfo] = useState(false)
    const [addUser, setAddUser] = useState(false);

    const changeAddUser = () => {
        setAddUser(!addUser)
    }
    
    const getData = async (identification) => {
        const url = `/api/getUser?identification=${identification}`
        const result = await axios.get(url)
        setUsuarios(result.data.message)
    }   

    const deleteUser = async (identification) => {
        const url = '/api/deleteUser'
        const identifications = props.data.identifications
        const RUC = props.data.RUC
        const tamaño = props.data.identifications.length
        console.log(identifications, identification, RUC, tamaño);
        const datos = {
            identification,
            identifications,
            RUC,
            tamaño,
        }
        console.log(datos);
        const result = await axios.post(url, datos)
        if (result.data.status) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Empleado eliminado',
                showConfirmButton: false,
                timer: 1000
            })
            props.changeData(result.data.message.value);
        }
    }

    const activeInfo = () => {
        setInfo(!info)
    }

    return (
        <section>
            {
                info ?
                    <InfoUser activeInfo={activeInfo} usuarios={usuarios}/>
                :
                ''

            }

            {
                addUser ?
                    <AddUser identifications={props.data.identifications} RUC={props.data.RUC} changeData={props.changeData} changeAddUser={changeAddUser}/>
                :
                ''
            }

            <div className="user">
                <div className="table">
                    <div className="cabecera">
                        <h5>USUARIO</h5>
                        <h5>ID</h5>
                        <h5>OPCIÓN</h5>
                    </div>
                    {
                        props.data.identifications ? 

                        props.data.identifications.map(user => (
                            <div key={user._id} className="content userID">
                                <p>{user.name}</p>
                                <p>{user.id}</p>
                                <div className="btns">
                                    <button className="selectionVer" onClick={() => {
                                        activeInfo()
                                        getData(user.id)
                                    }}>Ver</button>
                                    <br/>
                                    {/* <button className="selectionEliminar" onClick={ () => {
                                        deleteUser(user.id)
                                        console.log(user.id);
                                    }
                                    } >Eliminar</button> */}
                                </div>
                            </div>
                        ))
                        :
                        ''
                    }
                    {/* <div className="content">
                        <button className="agregar" onClick={changeAddUser}>Agregar</button>
                    </div> */}
                </div>
            </div>

            <style jsx>{`
            
                .btns {
                    display: grid;
                    grid-template-columns: 1frr;
                }

                .userID:hover p {
                    color: #091C47;
                }
                
                section {
                    height: 300px;
                    align-self: center;
                    margin: 0 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    overflow: auto;
                }

                form {
                    justify-self: center;
                    margin: 20px 0;
                }

                input::placeholder {
                    padding: 10px 0;
                    color: var(--mainColorClaro);
                    font-weight: 600;
                }

                input, button {
                    outline: none;
                    padding: 10px 10px;
                    border: 1px solid #33333344;
                }

                input {
                    color: var(--mainColor);
                    border-right: none; 
                    border-radius: 5px 0 0 5px;
                }

                .buscar {
                    border-left: none; 
                    cursor: pointer;
                    background-color: var(--mainColor);
                    color: white;
                    border-radius: 0 5px 5px 0;
                }

                .linea {
                    background: var(--puntoRojo);
                    grid-column: 1/3;
                }

                .user {
                    grid-column: 1/3;
                    padding-top: 20px;
                    width: 90%;
                    justify-self: center;
                }

                .table {
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                }

                .cabecera, .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .cabecera {
                    text-align: center;
                }

                h5 {
                    color: var(--mainColor);
                }

                .content {
                    color: var(--mainColorClaro);
                    margin: 5px 0;
                }

                .selectionVer {
                    border: none;
                    background-color: var(--puntoAzul);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                }

                .selectionEliminar {
                    border: none;
                    background-color: var(--puntoRojo);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                }

                .selectionVer:hover, .agregar:hover {
                    background-color: var(--botonesHover);
                }

                .selectionEliminar:hover {
                    background-color: var(--botonesRegistro);
                }

                .agregar {
                    grid-column: 1/4;
                    border: none;
                    background-color: var(--puntoAzul);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                    width: 100px;
                    justify-self: center;
                }

                
            `}</style>
        </section>
    )
}

export default EmployeeList
