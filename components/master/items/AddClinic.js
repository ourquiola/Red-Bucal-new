import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";

const AddClinic = (props) => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setData(Object.assign({}, data, { [e.target.name]: e.target.value, identifications: props.identifications, RUC: props.RUC}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        let errors = {}
        let validate = true

        if (!data.name) {
            errors = Object.assign({}, errors, {errorName: 'Falta el nombre'})
            validate = false
        }
        
        if (!data.phone) {
            errors = Object.assign({}, errors, {errorphone: 'Falta el telefono'})
            validate = false            
        }
        
        if (!data.password) {
            errors = Object.assign({}, errors, {errorpassword: 'Falta la contraseña'})
            validate = false            
        }
        
        if (!data.passwordRepeat) {
            errors = Object.assign({}, errors, {errorpasswordRepeat: 'Falta la contraseña'})
            validate = false            
        }

        if (data.password && data.passwordRepeat && data.password !== data.passwordRepeat) {
            errors = Object.assign({}, errors, {errorpasswordIgual: 'las contraseñas no coinciden'})
            validate = false            
        }
        
        if (!data.addres) {
            errors = Object.assign({}, errors, {erroraddres: 'Falta la dirección'})
            validate = false            
        }

        if (!data.provincia) {
            errors = Object.assign({}, errors, {errorprovincia: 'Falta la provincia'})
            validate = false            
        }

        if (!data.corregimiento) {
            errors = Object.assign({}, errors, {errorcorregimiento: 'Falta el corregimiento'})
            validate = false            
        }

        if (!data.email) {
            errors = Object.assign({}, errors, {erroremail: 'Falta el email'})
            validate = false            
        }

        if (validate) {

            const url = '/api/admin'
            const result = await axios.post(url, data)

            if (result.data.status == 'ok') {

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Clínica agregada',
                    showConfirmButton: false,
                    timer: 1000
                })
                let clinicAdded = [...props.clinicList]
                clinicAdded.push(result.data.clinic)
                props.setClinicList(clinicAdded)
                props.changeAddUser()

            } else {

                if (result.data.message === 'el correo es invalido') {

                    errors = Object.assign({}, errors, {erroremail: result.data.message})

                } else if (result.data.message === 'El correo ya ha sido registrado') {
                    
                    errors = Object.assign({}, errors, {erroremail: result.data.message})
                    
                } else if (result.data.message === 'nombre ya registrado') {

                    errors = Object.assign({}, errors, {errorName: result.data.message})
                    
                }

            }

        }

        setErrors(errors)

    }

    return (
        <div className="content">
            <form onSubmit={onSubmit}>
                <svg onClick={props.changeAddUser} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>
                <label>
                    NOMBRE DE LA CLINICA: <br />
                    <input onChange={onChange} type="text" name="name" placeholder="" />
                    {errors.errorName ? <p>{errors.errorName}</p> : null}
                </label>
                <label>
                    TELEFÓNO: <br />
                    <input onChange={onChange} type="number" name="phone" placeholder="" />
                    {errors.errorphone ? <p>{errors.errorphone}</p> : null}
                </label>
                <label>
                    CONTRASEÑA: <br />
                    <input onChange={onChange} type="password" name="password" placeholder="" />
                    {errors.errorpassword ? <p>{errors.errorpassword}</p> : null}
                </label>
                <label>
                    REPITA LA CONTRASEÑA: <br />
                    <input onChange={onChange} type="password" name="passwordRepeat" placeholder="" />
                    {errors.errorpasswordRepeat ? <p>{errors.errorpasswordRepeat}</p> : null}
                    {errors.errorpasswordIgual ? <p>{errors.errorpasswordIgual}</p> : null}
                </label>
                <label>
                    PROVINCIA: <br />
                    <input onChange={onChange} type="text" name="provincia" placeholder="" />
                    {errors.errorprovincia ? <p>{errors.errorprovincia}</p> : null}
                </label>
                <label>
                    CORREGIMIENTO: <br />
                    <input onChange={onChange} type="text" name="corregimiento" placeholder="" />
                    {errors.errorcorregimiento ? <p>{errors.errorcorregimiento}</p> : null}
                </label>
                <label>
                    DIRECCIÓN: <br />
                    <input onChange={onChange} type="text" name="addres" placeholder="" />
                    {errors.erroraddres ? <p>{errors.erroraddres}</p> : null}
                </label>
                <label>
                    CORREO: <br />
                    <input onChange={onChange} type="email" name="email" placeholder="" />
                    {errors.erroremail ? <p>{errors.erroremail}</p> : null}
                </label>
                <br />
                <button >Agregar</button>
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

                input, select {
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
                    cursor: pointer;
                    grid-column: 1/3;
                    justify-self: center;
                    outline: none;
                }
                    
            `}</style>
        </div>
    )
}

export default AddClinic