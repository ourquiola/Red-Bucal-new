import Axios from "axios"
import { useEffect, useState } from "react"
import AddClinic from "./AddClinic"
import ClinicList from "./ClinicList"

const Clinics = () => {

    const [info, setInfo] = useState(false)
    const [clinicList, setClinicList] = useState([])

    useEffect(() => {
        getClinics()
    }, [])

    const getClinics = async () => {
        const url = '/api/getClinics?all=true'
        const response = await Axios.get(url)
        setClinicList(response.data.message)
    }

    const changeAddUser = () => {
        setInfo(!info)
    }

    return <section className="container">
        <h3>LISTA DE CLINICAS</h3>
        <ClinicList clinicList={clinicList}/>
        <button onClick={changeAddUser}>Agregar clinica</button>
        {
            info 
            ?
            <AddClinic changeAddUser={changeAddUser} setClinicList={setClinicList} clinicList={clinicList}/>
            :
            null
        }

        <style jsx>{`

            section {
                align-self: center;
                display: grid;
                justify-items: center;
            }   

            button {
                background-color: var(--mainColor);
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                outline: none;
                cursor: pointer;
            }

            h3 {
                color: var(--mainColor);
            } 

        `}</style>
    </section>
}

export default Clinics