import React from 'react'
import PorcentajesPrevencion from './PorcentajesPrevencion'

const PrevencionBox = (props) => {
    return (
        
        <div className="content">
            <div className="horizontal1 horizontal"></div>
            <div className="horizontal2 horizontal">
                <div className="circulo"></div>
            </div>
            <div className="horizontal3 horizontal">
                <div className="circulos"></div>
            </div>
            <div className="vertical1 horizontal"></div>
            <div className="vertical2 horizontal">
                <div className="circulosResponsive"></div>
            </div>
            <div className="vertical3 horizontal"></div>
            <section className="cien">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 255, 255, 0.7)"
                    numero="100"
                    color="#333333dd"
                    grados="-90deg"
                    sizeNum="200px"
                    arriba="-30px"
                    derecha="35px"
                    sizeText="35px"
                    hover="rgba(255, 255, 255, 0.8)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(0)}}
                />
            </section>
            <section className="ochenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(17, 136, 204, 0.6)"
                    numero="80"
                    color="white"
                    grados="0deg"
                    sizeNum="150px"
                    arriba="-30px"
                    derecha="25px"
                    sizeText="30px"
                    hover="rgba(17, 136, 204, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(1)}}
                />
            </section>
            <section className="sesenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 34, 17, 0.6)"
                    numero="60"
                    color="white"
                    grados="-90deg"
                    sizeNum="120px"
                    arriba="-20px"
                    derecha="25px"
                    sizeText="25px"
                    hover="rgba(255, 34, 17, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(2)}}
                />
            </section>
            <section className="ciencuetaYCinco">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 153, 0, 0.7)"
                    numero="55"
                    color="white"
                    grados="0deg"
                    sizeNum="120px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 153, 0, 0.85)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(3)}}
                />
            </section>
            <section className="cincuenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 255, 255, 0.733)"
                    numero="50"
                    color="#333333dd"
                    grados="0deg"
                    sizeNum="80px"
                    arriba="-10px"
                    derecha="15px"
                    sizeText="15px"
                    hover="rgba(255, 255, 255, 0.8)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(4)}}
                />
            </section>
            <section className="cuarenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 153, 0, 0.7)"
                    numero="40"
                    color="white"
                    grados="-90deg"
                    sizeNum="100px"
                    arriba="-10px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 153, 0, 0.85)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(5)}}
                />
            </section>
            <section className="treinta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 34, 17, 0.6)"
                    numero="30"
                    color="white"
                    grados="0deg"
                    sizeNum="90px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 34, 17, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(6)}}
                />
            </section>
            <section className="Veinticinco">
                <PorcentajesPrevencion
                    backgroundColor="rgba(17, 136, 204, 0.6)"
                    numero="25"
                    color="white"
                    grados="0deg"
                    sizeNum="110px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="25px"
                    hover="rgba(17, 136, 204, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(7)}}
                />
            </section>
            <section className="veinte">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 34, 17, 0.6)"
                    numero="20"
                    color="white"
                    grados="-90deg"
                    sizeNum="110px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 34, 17, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => {props.changeList(8)}}
                />
            </section>

            <style jsx>{`
                
                .content {
                    height: calc(900px * var(--sizeP) * 1.2);
                    width: 100%;
                    display: grid;
                    grid-template-columns: 2fr 3px 1fr 3px 1fr 3px 1fr;
                    grid-template-rows: 3px 1.3fr 3px 1fr 3px 1fr;
                }

                .horizontal {
                    background-color: var(--mainColor);
                    position: relative;
                }

                .horizontal1 {
                    grid-column: 1/8;
                    grid-row: 1/2;
                }

                .horizontal1:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(35px * var(--sizeP) * 1.2);
                    height: calc(35px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    bottom: 0;
                    transform: translate(-40%, 40%);
                }

                .horizontal1:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 100% 50%;
                    border-bottom-left-radius: 100% 50%;
                    width: calc(15px * var(--sizeP) * 1.2);
                    height: calc(30px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateY(40%);
                }

                .horizontal2 {
                    grid-column: 2/8;
                    grid-row: 3/4;
                }

                .horizontal2:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(35px * var(--sizeP) * 1.2);
                    height: calc(35px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    bottom: 0;
                    transform: translate(-40%, 40%);
                }

                .horizontal2:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 100% 50%;
                    border-bottom-left-radius: 100% 50%;
                    width: calc(15px * var(--sizeP) * 1.2);
                    height: calc(30px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateY(40%);
                }

                .horizontal3 {
                    grid-column: 2/8;
                    grid-row: 5/6;
                }

                .horizontal3:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(20px * var(--sizeP) * 1.2);
                    height: calc(20px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    bottom: 0;
                    transform: translate(-40%, 40%);
                }

                .horizontal3:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 100% 50%;
                    border-bottom-left-radius: 100% 50%;
                    width: calc(25px * var(--sizeP) * 1.2);
                    height: calc(50px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateY(40%);
                }

                
                .circulos:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(25px * var(--sizeP) * 1.2);
                    height: calc(25px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 33.3%;
                    bottom: 0;
                    transform: translate(50%, 40%);
                }
                
                .circulos:after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(30px * var(--sizeP) * 1.2);
                    height: calc(30px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 66.6%;
                    bottom: 0;
                    transform: translate(50%, 40%);
                }

                .vertical1 {
                    grid-column: 2/3;
                    grid-row: 1/7;
                }

                .vertical1:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(25px * var(--sizeP) * 1.2);
                    height: calc(25px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    top: 0;
                    transform: translate(-40%, -40%);
                }

                .vertical1:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 50% 100%;
                    border-top-right-radius: 50% 100%;
                    width: calc(40px * var(--sizeP) * 1.2);
                    height: calc(20px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateX(40%);
                }

                .vertical2 {
                    grid-column: 4/5;
                    grid-row: 3/7;
                }

                .vertical2:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(15px * var(--sizeP) * 1.2);
                    height: calc(15px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    top: 0;
                    transform: translate(-40%, -40%);
                }

                .vertical2:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 50% 100%;
                    border-top-right-radius: 50% 100%;
                    width: calc(25px * var(--sizeP) * 1.2);
                    height: calc(12.5px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateX(40%);
                }

                .circulosResponsive {
                    display: none;
                }

                .circulosResponsive:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(20px * var(--sizeP) * 1.2);
                    height: calc(20px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    top: 33.3%;
                    transform: translate(-40%, -40%);
                }

                .circulosResponsive:after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(25px * var(--sizeP) * 1.2);
                    height: calc(25px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 33.3%;
                    transform: translate(40%, 50%);
                }

                .vertical3 {
                    grid-column: 6/7;
                    grid-row: 1/7;   
                }

                .vertical3:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(35px * var(--sizeP) * 1.2);
                    height: calc(35px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    left: 0;
                    top: 0;
                    transform: translate(-40%, -40%);
                }

                .vertical3:after {
                    content: '';
                    position: absolute;
                    border-top-left-radius: 50% 100%;
                    border-top-right-radius: 50% 100%;
                    width: calc(40px * var(--sizeP) * 1.2);
                    height: calc(20px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 0;
                    bottom: 0;
                    transform: translateX(40%);
                }

                .circulo:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: calc(20px * var(--sizeP) * 1.2);
                    height: calc(20px * var(--sizeP) * 1.2);
                    background-color: var(--mainColor);
                    right: 33.3%;
                    bottom: 0;
                    transform: translate(50%, 40%);
                }

                .cien {
                    grid-column: 1/2;
                    grid-row: 2/7;
                    background-image: url("/img/descuentos30.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .ochenta {
                    grid-column: 3/6;
                    background-image: url("/img/descuentos40.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .sesenta {
                    background-image: url("/img/descuentos30.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .ciencuetaYCinco {
                    background-image: url("/img/descuentos40.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .cincuenta {
                    background-image: url("/img/descuentos50.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .cuarenta {
                    background-image: url("/img/descuentos20.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .treinta {
                    background-image: url("/img/descuentos20.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .Veinticinco {
                    background-image: url("/img/descuentos30.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .veinte {
                    background-image: url("/img/descuentos40.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                @media screen and (max-width: 850px) {
                    .content {
                        grid-template-columns: 2fr 3px 1fr 3px 1fr;
                        grid-template-rows: 3px 1.3fr 3px 1fr 3px 1fr 3px 1fr;
                    }
                    .sesenta {
                        grid-column: 1/2;
                        grid-row: 8/9;
                    }
                    .cuarenta {
                        grid-column: 3/4;
                        grid-row: 8/9;
                    }
                    .veinte {
                        grid-column: 5/6;
                        grid-row: 8/9;
                    }
                    .horizontal1 {
                        grid-column: 1/6;
                    }
                    .horizontal2, .horizontal3 {
                        grid-column: 2/6;
                    }

                    .vertical1 {
                        grid-row: 1/9;
                    }

                    .vertical2 {
                        grid-row: 3/9;
                    }

                    .vertical3 {
                        grid-row: 7/8;
                        grid-column: 1/6;
                    }

                    .vertical3:after {
                        border-top-left-radius: 100% 50%;
                        border-bottom-left-radius: 100% 50%;
                        border-top-right-radius: 0;
                        width: calc(20px * var(--sizeP) * 1.2);
                        height: calc(40px * var(--sizeP) * 1.2);
                        transform: translateY(40%);
                    }

                    .circulo, .circulos {
                        display: none;
                    }

                    .circulosResponsive {
                        display: inline-block;
                    }
                }

                @media screen and (max-width: 500px) {
                    .content {
                        display: none;
                    }
                }
                 
            `}</style>
        </div>
    )
}

export default PrevencionBox
