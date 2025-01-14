import Axios from "axios"
import { useEffect, useState } from "react"

const AfiliadosList = ({ name, setToggleAfiliados }) => {

    const [afiliados, setafiliados] = useState([])
    const [filter, setFilter] = useState({})
    const [activeFilter, setActiveFilter] = useState(true)
    const [typeFilter, setTypeFilter] = useState('users');

    useEffect(() => {
        getAfiliados('users')
    }, [])

    useEffect(() => {

        if (filter.start && filter.end) {
            const start = filter.start.split('-').map(num => Number(num))
            const end = filter.end.split('-').map(num => Number(num))
            const restDate = [end[0] - start[0], end[1] - start[1], end[2] - start[2]]

            if (restDate[0] >= 0) {
                if (restDate[1] >= 0) {
                    if (restDate[2] >= 0) {
                        setActiveFilter(false)
                    } else {
                        setActiveFilter(true)
                        console.log('el intervalo de tiempo no es valido')
                    }
                } else {
                    setActiveFilter(true)
                    console.log('el intervalo de tiempo no es valido')
                }
            } else {
                setActiveFilter(true)
                console.log('el intervalo de tiempo no es valido')
            }

            console.log(restDate)

        }

    }, [filter])

    const onChangeFliter = e => {

        setFilter(Object.assign({}, filter, { [e.target.name]: e.target.value }))

    }

    const getAfiliados = async (type = '') => {
        const url = `/api/getClinics?type=${type}&name=${name}`
        const response = await Axios.get(url)
        setafiliados(response.data.message)
        setTypeFilter(type)
    }

    const onSubmitFilter = async e => {
        e.preventDefault()
        const url = `/api/getClinics?type=${typeFilter}&name=${name}&start=${filter.start}&end=${filter.end}`
        const response = await Axios.get(url)
        setafiliados(response.data.message)
    }

    const formarISODate = (ISOdate) => {

        const date = new Date(ISOdate)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const download = async () => {
        const url = '/api/download'
        const response = await Axios.post(url, {
            afiliacion: name
        })
        if (response.data.status === 'ok') {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            let fileName

            if (name === '') {
                fileName = 'RED BUCAL'
            } else {
                fileName = name
            }

            fileName.replace(/ /, '-')

            link.href = url
            link.setAttribute('href', `/excels/${fileName}.zip`)
            link.setAttribute('download', `${fileName}.zip`)
            document.body.appendChild(link)
            link.click()
        } else {
            console.log('erro')
        }
        console.log(response.data)
    }

    return <div className="container">

        <section>
            <h3>AFILIADOS A {name.toUpperCase()}</h3>
            <svg className="close" onClick={() => setToggleAfiliados(false)} viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
            </svg>
            <p>Seleccione las fechas para realizar el filtro:</p>
            <form onSubmit={onSubmitFilter}>
                <label>
                    <span>Desde: </span>
                    <input type="date" name="start" onChange={onChangeFliter} />
                </label>
                <label>
                    <span>Hasta: </span>
                    <input type="date" name="end" onChange={onChangeFliter} />
                </label>
                <button disabled={activeFilter}>filtrar</button>
            </form>
            <div className="buttons-waraper">
                <button onClick={() => getAfiliados('users')} disabled={typeFilter === 'users' ? true : false}>usuarios afiliados</button>
                <button onClick={() => getAfiliados('bussines')} disabled={typeFilter === 'bussines' ? true : false}>empresas afiliadas</button>
            </div>
            <div className="info">
                <span className="inscripciones">numero de afiliados: {afiliados.length}</span>
                <button className="download-button" onClick={download}>
                    <svg className="download-icon" viewBox="-23 0 512 512.00072" width="512pt">
                        <g fill="currentColor" id="surface1">
                            <path d="M 348.945312 221.640625 L 348.945312 124.746094 C 348.945312 121.972656 347.664062 119.410156 345.851562 117.382812 L 237.21875 3.308594 C 235.191406 1.175781 232.308594 0 229.429688 0 L 57.195312 0 C 25.398438 0 0 25.929688 0 57.730469 L 0 383.414062 C 0 415.214844 25.398438 440.71875 57.195312 440.71875 L 193.148438 440.71875 C 218.863281 483.402344 265.605469 512 318.851562 512 C 399.738281 512 465.792969 446.265625 465.792969 365.273438 C 465.902344 294.523438 415.105469 235.40625 348.945312 221.640625 Z M 240.101562 37.457031 L 312.984375 114.179688 L 265.710938 114.179688 C 251.625 114.179688 240.101562 102.550781 240.101562 88.464844 Z M 57.195312 419.375 C 37.242188 419.375 21.34375 403.367188 21.34375 383.414062 L 21.34375 57.730469 C 21.34375 37.667969 37.242188 21.34375 57.195312 21.34375 L 218.757812 21.34375 L 218.757812 88.464844 C 218.757812 114.394531 239.78125 135.523438 265.710938 135.523438 L 327.601562 135.523438 L 327.601562 218.863281 C 324.402344 218.757812 321.839844 218.4375 319.066406 218.4375 C 281.824219 218.4375 247.570312 232.738281 221.746094 255.148438 L 86.222656 255.148438 C 80.351562 255.148438 75.550781 259.949219 75.550781 265.816406 C 75.550781 271.6875 80.351562 276.488281 86.222656 276.488281 L 201.898438 276.488281 C 194.320312 287.160156 188.023438 297.832031 183.117188 309.570312 L 86.222656 309.570312 C 80.351562 309.570312 75.550781 314.371094 75.550781 320.242188 C 75.550781 326.109375 80.351562 330.914062 86.222656 330.914062 L 176.179688 330.914062 C 173.511719 341.585938 172.125 353.429688 172.125 365.273438 C 172.125 384.480469 175.859375 403.476562 182.582031 419.484375 L 57.195312 419.484375 Z M 318.960938 490.765625 C 249.8125 490.765625 193.574219 434.527344 193.574219 365.378906 C 193.574219 296.230469 249.703125 239.992188 318.960938 239.992188 C 388.214844 239.992188 444.34375 296.230469 444.34375 365.378906 C 444.34375 434.527344 388.109375 490.765625 318.960938 490.765625 Z M 318.960938 490.765625 " />
                            <path d="M 86.222656 223.027344 L 194.320312 223.027344 C 200.191406 223.027344 204.992188 218.222656 204.992188 212.355469 C 204.992188 206.484375 200.191406 201.683594 194.320312 201.683594 L 86.222656 201.683594 C 80.351562 201.683594 75.550781 206.484375 75.550781 212.355469 C 75.550781 218.222656 80.351562 223.027344 86.222656 223.027344 Z M 86.222656 223.027344 " />
                            <path d="M 373.59375 363.136719 L 329.738281 410.410156 L 329.738281 293.882812 C 329.738281 288.011719 324.933594 283.210938 319.066406 283.210938 C 313.195312 283.210938 308.394531 288.011719 308.394531 293.882812 L 308.394531 410.410156 L 264.214844 363.136719 C 260.160156 358.871094 253.332031 358.550781 249.0625 362.605469 C 244.792969 366.660156 244.472656 373.382812 248.53125 377.652344 L 310.957031 444.773438 C 312.984375 446.90625 315.757812 448.1875 318.746094 448.1875 C 321.734375 448.1875 324.507812 446.90625 326.535156 444.773438 L 389.070312 377.652344 C 393.125 373.382812 392.910156 366.554688 388.640625 362.605469 C 384.265625 358.550781 377.652344 358.871094 373.59375 363.136719 Z M 373.59375 363.136719 " />
                        </g>
                    </svg>
                </button>
            </div>
            <ul>
                <li>
                    <p>NOMBRE</p>
                    <p>ID</p>
                    <p>INSCRIPCIÓN</p>
                </li>
                <div className="linea"></div>
                <div className="content">

                    {
                        afiliados
                            ?
                            afiliados.map((item, index) => (
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <span>{item.identification ? item.identification : item.RUC}</span>
                                    <span>{formarISODate(item.date)}</span>
                                </li>
                            ))
                            :
                            <li>
                                La clinica no cuenta con afiliados
                            </li>
                    }
                </div>
            </ul>

        </section>

        <style jsx>{`

            .container {
                top: 0;
                left: 0;
                position: fixed;
                background: #33333388;
                height: 100vh;
                width: 100%;
                display: grid;
                align-items: center;
                justify-items: center;
                z-index: 1100;
            }

            section {
                position: relative;
                align-self: center;
                grid-column-gap: 10px;
                margin: 0 50px;
                background: white;
                padding: 30px;
                border-radius: 30px;
            }

            .buttons-waraper {
                display: flex;
                justify-content: space-around;
            }

            .info {
                display: flex;
                justify-content: space-between;
            }

            .download-button {
                height: 42px;
                align-self: center;
            }

            .download-icon {
                width: 25px;
                color: white;
            }

            h3 {
                margin: 20px;
            }

            .close {
                position: absolute;
                top: 0;
                right: 0;
                width: 30px;
                color: var(--puntoRojo);
                margin: 20px;
                cursor: pointer;
            }

            .linea {
                grid-column: 1/4;
                height: 2px;
                background: var(--puntoRojo);
            }

            li {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 2rem;
                margin: 10px 0;
            }

            .content {
                max-height: 300px;
                overflow: auto;
            }

            p {
                text-align: center;
                color: var(--mainColor);
                font-weight: bold;
            }

            button {
                cursor: pointer;
                border: none;
                background-color: var(--mainColor);
                color: white;
                padding: 10px;
                border-radius: 5px;
                transition: background-color .5s;
            }

            button:disabled {
                cursor: default;
                background-color: #091C4755;
            }
            form {
                margin: 20px 0;
                display: flex;
                justify-content: space-around;
            }

            input {
                padding: 6px;
                border: none;
                cursor: pointer;
                outline: none;
            }

            .inscripciones {
                display: block;
                margin: 20px 0;
            }

            span {
                font-weight: 600;
            }

        `}</style>
    </div>
}

export default AfiliadosList