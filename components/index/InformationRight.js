import React from 'react'

const InformationRight = () => {
    return (
        <section className="content">

            <div className="img"></div>

            <div className="info">
                <div className="img1"></div>
                <div className="text">
                    <h3>
                        <span className="nuestra">NUESTRA</span>
                        <span className="red">RED</span>
                    </h3>
                    <p>Te conectamos a una red única de clínicas odontológicas, que permite a sus afiliados acceder a una amplia cobertura dental a un precio muy accesible. Contamos con centros a nivel nacional, con especialistas idóneos que garantizan un servicio de calidad. 
                        <br/><br/>
                        En nuestras sucursales conseguirá un equipo integrado por distintas especialidades como ortodoncia, odontología general, diseño de sonrisa, odontopediatría, especialista en endodoncia, prótesis fija y removible, especialista en periodoncia y cirujanos maxilofaciales.
                    </p>
                </div>
                <div className="img2"></div>
                <div className="img3"></div>
            </div>

            <style jsx>{`
                
                .content {
                    margin-top: 100px;
                    height: 500px;
                    display: grid;
                    grid-template-columns: 2fr 2.1fr;
                }

                .img {
                    height: 100%;
                    width: 100%;
                    background-image: url("/img/tres-personas1.png");
                    background-size: auto 100%;
                }

                .info {
                    display: grid;
                    grid-template-columns: 1fr 4fr 1fr;
                }

                .img1 {
                    background-image: url("/img/punto2-recortada.png");
                    background-position: right;
                    background-repeat: no-repeat;
                    background-size: 130% auto;
                }

                .img2 {
                    grid-row: 1/2;
                    grid-column: 3/4;
                    background-image: url("/img/punta1-recortada.png");
                    background-repeat: no-repeat;
                    background-size: 130% auto;
                }

                .img3 {
                    grid-row: 1/2;
                    grid-column: 3/4;
                    background-image: url("/img/puntos4x3.png");
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: bottom;    
                }

                .text {
                    display: grid;
                    grid-template-rows: 2fr 2.5fr;
                }

                h3 {
                    display: grid;
                    justify-items: center;
                    color: var(--mainColor);
                }

                p {
                    position: relative;
                    color: var(--mainColorClaro);
                    font-weight: 500;
                    text-align: justify;
                }

                p:before {
                    position: absolute;
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                    top: 100px;
                    left: -70px;
                }

                p:after {
                    position: absolute;
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                    bottom: 40px;
                    right: 50px;
                }

                .nuestra {
                    position: relative;
                    align-self: flex-end;
                    font-size: 30px;
                    font-weight: 400;
                    letter-spacing: 5px;
                }

                .nuestra:before {
                    position: absolute;
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: var(--puntoRojo);
                    border-radius: 50%;
                    top: -40px;
                    left: -90px;
                }

                .red {
                    font-size: 90px;
                    margin-top: -30px;
                }
                
                @media screen and (max-width: 850px) {
                    .content {
                        display: none;
                    }
                }
                
                
            `}</style>
        </section>
    )
}

export default InformationRight
