import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

const ChangePass = (props) => {

    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [err, setErr] = useState({})

    const submit = async e => {
        e.preventDefault()

        if (password && repeatPass && password === repeatPass) {
            const URL_USER_PASSWORD = '/api/users'
            await Axios.put(URL_USER_PASSWORD, {
                _id: props._id,
                password,
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Contraseña Actualizada',
                showConfirmButton: false,
                timer: 2000
            })
            props.change()
        } else {
            let err_list = {}
            if (!password) err_list = Object.assign({}, err_list, {password: 'campo vacio*'})
            if (!repeatPass) err_list = Object.assign({}, err_list, {repeatPass: 'campo vacio*'})
            if (repeatPass && password && repeatPass !== password) err_list = Object.assign({}, err_list, {notMatch: 'No coinciden*'})
            setErr(err_list)
        }
        
    }

    return (
        <div className="content">

            <section>
                <svg onClick={(e) => { props.change(e) }} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>
                <h3>Actualice su contraseña</h3>
                <form>
                    <label>
                        Contraseña: <br />
                        <input type="password" name="firstName" onChange={e => setPassword(e.target.value)}/>
                        {err.password ? <p>{err.password}</p> : ''}
                    </label>
                    <label>
                        Repita la contraseña: <br />
                        <input type="password" name="lastName" onChange={e => setRepeatPass(e.target.value)}/>
                        {err.repeatPass ? <p>{err.repeatPass}</p> : ''}
                    </label>
                    {err.notMatch ? <p>{err.notMatch}</p> : ''}
                    <br/>
                    <button type="submit" onClick={submit}>Actualizar</button>
                </form>
            </section>

            <style jsx>{`
            
                .content {
                    z-index: 1000;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background: #33333366;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }    

                section {
                    background: white;
                    position: relative;
                    border-radius: 30px;
                    padding: 30px;
                }    

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform .5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                h3 {
                    margin: 30px 0;
                    text-align: center;
                    font-weight: 400;
                }
                
                form {
                    display: grid;
                    position: relative
                }

                label {
                    margin: 10px auto;
                    color: var(--mainColor);
                    font-weight: 600;
                    position: relative
                }

                p {
                    position: absolute;
                    color: var(--puntoRojo);
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                }

                input {
                    displya: inline-block;
                    outline: none;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                button {
                    align-self: center;
                    justify-self: center;
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
            
            `}</style>

        </div>
    )
}

export default ChangePass
