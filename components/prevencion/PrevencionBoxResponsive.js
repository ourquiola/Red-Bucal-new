import React from 'react'
import PorcentajesPrevencion from './PorcentajesPrevencion'


const PrevencionBoxResponsive = (props) => {
    return (
        <div className="content">
            <div className="punto3 puntos"></div>
            <section className="cien">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 255, 255, 0.7)"
                    numero="100"
                    color="#333333dd"
                    grados="0"
                    sizeNum="200px"
                    arriba="-30px"
                    derecha="35px"
                    sizeText="35px"
                    hover="rgba(255, 255, 255, 0.8)"
                    changeActive={props.changeActive}
                    changeList={() => { props.changeList(0) }}
                />
            </section>
            <div className="punto1 puntos"></div>
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
                    changeList={() => { props.changeList(1) }}
                />
            </section>
            <div className="punto2 puntos"></div>
            <section className="sesenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 34, 17, 0.6)"
                    numero="60"
                    color="white"
                    grados="0"
                    sizeNum="120px"
                    arriba="-20px"
                    derecha="25px"
                    sizeText="25px"
                    hover="rgba(255, 34, 17, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => { props.changeList(2) }}
                />
            </section>
            <div className="punto4 puntos"></div>
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
                    changeList={() => { props.changeList(3) }}
                />
            </section>
            <div className="punto3 puntos"></div>
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
                    changeList={() => { props.changeList(4) }}
                />
            </section>
            <div className="punto4 puntos"></div>
            <section className="cuarenta">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 153, 0, 0.7)"
                    numero="40"
                    color="white"
                    grados="0"
                    sizeNum="100px"
                    arriba="-10px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 153, 0, 0.85)"
                    changeActive={props.changeActive}
                    changeList={() => { props.changeList(5) }}
                />
            </section>
            <div className="punto1 puntos"></div>
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
                    changeList={() => { props.changeList(6) }}
                />
            </section>
            <div className="punto3 puntos"></div>
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
                    changeList={() => { props.changeList(7) }}
                />
            </section>
            <div className="punto2 puntos"></div>
            <section className="veinte">
                <PorcentajesPrevencion
                    backgroundColor="rgba(255, 34, 17, 0.6)"
                    numero="20"
                    color="white"
                    grados="0"
                    sizeNum="110px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="20px"
                    hover="rgba(255, 34, 17, 0.75)"
                    changeActive={props.changeActive}
                    changeList={() => { props.changeList(8) }}
                />
            </section>

            <style jsx>{`

                .puntos {
                    width: 100%;
                    height: 3px;
                    background-color: var(--mainColor);
                    position: relative;
                }

                .punto1:before, .punto2:before, .punto3:before, .punto4:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-color: var(--mainColor);
                    border-radius: 50%;
                    transform: translate(-50%, 40%)
                }

                .punto1:before {
                    height: 15px;
                    width: 15px;
                }

                .punto2:before {
                    height: 25px;
                    width: 25px;
                }

                .punto3:before {
                    height: 20px;
                    width: 20px;
                }

                .punto4:before {
                    height: 30px;
                    width: 30px;
                }

                .punto1:after, .punto2:after, .punto3:after, .punto4:after {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: var(--mainColor);
                    border-top-left-radius: 100% 50%;
                    border-bottom-left-radius: 100% 50%;
                    transform: translateY(40%)
                }

                .punto1:after {
                    height: 30px;
                    width: 15px;
                }

                .punto3:after {
                    height: 40px;
                    width: 20px;
                }

                .punto2:after {
                    height: 15px;
                    width: 7.5px;
                }

                .punto4:after {
                    height: 25px;
                    width: 12.5px;
                }

                .content {
                    margin-top: 150px;
                    display: none;
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

                @media screen and (max-width: 500px) {
                    .content {
                        display: inline-block;
                        width: 100%;
                    }
                }
            
            `}</style>
        
        </div>
    )
}

export default PrevencionBoxResponsive
