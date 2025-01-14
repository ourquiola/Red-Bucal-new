import React, { useState, useEffect } from 'react'
import { scroller } from 'react-scroll';
import Layout from '../components/layout/Layout'
import MapWrapper from '../components/red/MapWrapper';

/* import SliderImg from '../components/red/SliderImg' */
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'
import LayoutInfoClinics from '../components/red/layout/LayoutInfoClinics'
import TitleRed from '../components/red/TitleRed';
/* import fetch from 'isomorphic-unfetch' */

/* DATOS DE LAS CLINICAS */
import location from '../components/red/locations/location'
import Social from '../components/social/Social';

//configuraciones del autoScroll
const setupScroll = {
    duration: 3000,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”,
    offset: -10
}

const Red = () => {

    const [clinic, setClinic] = useState(0);
    const [activate, setActivate] = useState(false)
    

    const changeClinic = (num) => {
        setClinic(num)
        scroller.scrollTo("info", setupScroll)
    }

    

    return (
        <Layout>
            <Social />
            <TitleRed />
            <MapWrapper>
                <LayoutInfoClinics name="info" clinic={clinic} location={location} activate={activate} setActivate={setActivate} changeClinic={changeClinic}/>
                <PanamaMap changeClinic={changeClinic} location={location} clinic={clinic}/>

            </MapWrapper>
            <br/>
            <br/>
            {/* <SliderImg location={location}/> */}
            <Footer />
        </Layout>
    )
}


export default Red
