import React from "react";
import Layout from "../../components/layout/Layout";
import Personal from "../../components/planes/Personal";
import LayoutForm from "../../components/form/LayoutForm";
import Banner from "../../components/planes/Banner";
import Empresas from "../../components/planes/empresarial/Empresas";
import Footer from "../../components/footer/Footer";
import EmpresasResponsive from "../../components/planes/empresarial/EmpresasResponsive";
import PersonalResponsive from "../../components/planes/PersonalResponsive";
import Social from "../../components/social/Social";
import Planes from "../../components/index/Planes";

const empresarial = () => {
    return (
        <Layout>
            <Social />
            <Empresas />
            <EmpresasResponsive />
            {/* <Personal 
                title="USD 1.00 + ITBMS"
                ubicacion=".5fr 5.5fr 6fr" 
                img="3/4" 
                text="2/3" 
                borde="1/2" 
                bordeJust="flex-start" 
                padding="padding-right: 80px;"
                diente="/img/medio-diente.png"
                dienteDirect="center right"
                imgBig="/img/operacion.png"
            />
            <PersonalResponsive imgBig="/img/operacion.png"/> */}
            <div className="plan">
                <Planes
                    title="PLAN EMPRESAS"
                    img="/img/odontologo-derecha.png"
                    position="3/5"
                    valor=""
                    fecha="MES"
                    colaborador="CONSÚLTENOS EL COSTO POR COLABORADOR"
                    tit1="Plan Red Bucal ® EMPRESAS:"
                    text1="Colocamos a su disposición un producto sencillo, que le permite ofrecer servicios preventivos y/o correctivos a sus colaboradores, para el cuidado de su salud bucal."
                />
            </div>
            <Banner />
            <LayoutForm
                diente="/img/diente-form2.png"
                fondo="/img/doctora.png"
            />
            <Footer />

            <style jsx>{`
                .plan {
                    display: grid;
                    justify-content: center;
                    margin: 2rem;
                }
            `}</style>
        </Layout>
    );
};

export default empresarial;
