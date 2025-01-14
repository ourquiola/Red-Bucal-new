import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from "axios";
import Layout from '../components/layout/Layout'
import NavUsuario from '../components/usuario/NavUsuario'
import InformationUser from '../components/usuario/items/InformationUser'
import BillingUser from '../components/usuario/items/BillingUser'
import ServicesUser from '../components/usuario/items/ServicesUser'
import RecordUser from '../components/usuario/items/RecordUser'
import ChangePass from '../components/usuario/ChangePass';
import Swal from 'sweetalert2'

const usuario = () => {

    const router = useRouter()

    const [select, setSelect] = useState(0);
    const [data, setData] = useState({});
    const [changePassword, setChangePassword] = useState(false)

    const onClick = (selector) => {
        setSelect(selector)
    }

    const closeChangePass = () => {
        setChangePassword(false)
    }

    const get = async () => {
        if (sessionStorage.getItem('tokenUser')) {
            const url = '/api/session'
            const result = await axios.get(url)
            console.log(result);
            if (result.data.data.user._id === sessionStorage.getItem('tokenUser')) {
                const {user} = result.data.data
                setData(user)
                if (user.mustChangePass) {
                    setChangePassword(true)
                }
            } else {
                router.replace("/")
            }
        } else {
            router.replace("/")
        }
    } 

    useEffect(() => {
        get()
    }, [])

    const changeTour = async (email) => {
        try {
            const url= '/api/tour'
            const result = await axios.post(url, {email})
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        if(data.tour) {
            Swal.fire({
                position: 'center',
                icon: 'question',
                title: 'Facturación',
                text: 'Puedes realizar la activación de tu cuenta de forma fisica o virtual',
                showConfirmButton: true
            })
            changeTour(data.email)
        }

    }, [data]);

        return (
    
            <Layout>
                <NavUsuario onClick={onClick} select={select} data={data}>
                    {
                        changePassword
                        ?
                        <ChangePass change={closeChangePass} _id={data._id}/>
                        :
                        ''
                    }
                    {
                        select === 0 ? <InformationUser data={data} /> : 
                        select === 1 ? <BillingUser data={data} setData={setData} /> :
                        select === 2 ? <ServicesUser data={data}/> :
                        select === 3 ? <RecordUser  data={data}/> :
                        'cuatro' 
                    }
                </NavUsuario>
            </Layout>
        )
}

export default usuario
