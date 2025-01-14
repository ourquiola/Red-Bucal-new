import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import DescuentosBox from "../components/descuentos/DescuentosBox";
import DescuentosList from "../components/descuentos/DescuentosList";
import DescuentosBoxResponsive from "../components/descuentos/DescuentosBoxResponsive";
import TitleDescuentos from "../components/descuentos/TitleDescuentos";
import DescuentosCard from "../components/descuentos/cards/DescuentosCard";
import Social from "../components/social/Social";

const beneficios = () => {
    const [list, setList] = useState(0);
    const [active, setActive] = useState(false);

    const changeActive = () => {
        setActive(!active);
    };

    const changeList = (num) => {
        setList(num);
    };

    return (
        <Layout>
            <Social />
            <TitleDescuentos />
            <DescuentosList
                active={active}
                changeActive={changeActive}
                list={list}
            />
            <DescuentosCard
                changeActive={changeActive}
                changeList={changeList}
            />
            {/* <DescuentosBox
                changeActive={changeActive}
                changeList={changeList}
            />
            <DescuentosBoxResponsive
                changeActive={changeActive}
                changeList={changeList}
            /> */}
            <Footer />
        </Layout>
    );
};

export default beneficios;
