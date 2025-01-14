import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import LayoutForm from '../components/form/LayoutForm'
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'
import location from '../components/red/locations/location'
import Social from '../components/social/Social'

const contacto = () => {

    const [clinic, setClinic] = useState(0);


    const changeClinic = (num) => {
        setClinic(num)
    }

    return (
        <Layout>
            <Social />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <PanamaMap changeClinic={changeClinic} location={location} clinic={clinic}/>
            <br/><br/><br/><br/>
            <LayoutForm diente="/img/diente-form1.png" fondo="/img/doctora.png" />
            <br/> <br/>
            <Footer />
        
        </Layout>
    )
}

export default contacto
