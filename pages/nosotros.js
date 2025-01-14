import React from "react";
import Layout from "../components/layout/Layout";
import SobreNosotros from "../components/nosotros/SobreNosotros";
import Respaldo from "../components/nosotros/Respaldo";
import NuestrosClientes from "../components/nosotros/NuestrosClientes";
import Footer from "../components/footer/Footer";
import Social from "../components/social/Social";

const Nosotros = () => {
    return (
        <Layout>
            <Social />
            <SobreNosotros />
            {/* <Respaldo /> */}
            <NuestrosClientes />
            <Footer />
        </Layout>
    );
};

export default Nosotros;
