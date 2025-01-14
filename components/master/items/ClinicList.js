import { useState } from "react"
import AfiliadosList from "./AfiliadosList"

const ClinicList = ({clinicList}) => {

    
    const [toggleAfiliados, setToggleAfiliados] = useState(false)
    const [name, setName] = useState('') 
    
    return <div className="container">

        <p>Nombre</p>
        <p>email</p>
        <p>opcion</p>

        <div className="linea"></div>
        <div className="content">

            <span style={{fontWeight: '900'}}>RED BUCAL</span>
            <span style={{textAlign: 'center'}}>-</span>
            <button onClick={() => {
                setName('')
                setToggleAfiliados(!toggleAfiliados)
            }}>Ver afiliados</button>
        {
            clinicList.map(item => (
                <>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <button onClick={() => {
                        setName(item.name)
                        setToggleAfiliados(!toggleAfiliados)
                    }}>Ver afiliados</button>
                </>
            ))
        }
        </div>

        {
            toggleAfiliados
            ?
                <AfiliadosList setToggleAfiliados={setToggleAfiliados} name={name}/>
            :
                null

        }

        <style jsx>{`

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: .5rem 1rem;
                padding: .5rem;
                
            }

            .content {
                grid-column: 1/4;
                display: grid;
                grid-gap: .5rem 1rem;
                grid-template-columns: 1fr 1fr 1fr;
                max-height: 250px;
                overflow: auto;
            }

            .linea {
                grid-column: 1/4;
                background-color: var(--puntoRojo);
                width: 100%;
                height: 2px;
                margin: 10px 0;
            }

            p {
                text-align: center;
                color: var(--mainColor);
                font-weight: bold;
            }

            button {
                border: none;
                background-color: var(--mainColor);
                color: white;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            }

        `}</style>
    </div>
}

export default ClinicList