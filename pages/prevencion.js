import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import PrevencionBox from "../components/prevencion/PrevencionBox";
import PrevencionList from "../components/prevencion/PrevencionList";
import PrevencionBoxResponsive from "../components/prevencion/PrevencionBoxResponsive";
import TitlePrevencion from "../components/prevencion/TitlePrevencion";
import PrevencionCard from "../components/prevencion/cards/PrevencionCard";
import Social from "../components/social/Social";

const prevencion = () => {
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
            <TitlePrevencion />
            <PrevencionList
                active={active}
                changeActive={changeActive}
                list={list}
            />
            <PrevencionCard
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

export default prevencion;
