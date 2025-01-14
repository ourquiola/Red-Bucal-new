import React from 'react'

const PersonalResponsive = (props) => {
    return (
        <section className="content">

            <h2>PROFESIONALES</h2>
            <br />
            <div className="img"></div>

            <ul>
                <li>
                    <p>Nuestra misión es facilitar las visitas al odontólogo y que estas a su vez sean más serviciales y amigables para ustedes.</p>
                </li>
                <li>
                    <h5>Especialidades</h5>
                    <p>En nuestras sucursales afiliadas conseguirá un equipo altamente calificado integrado por distintas especialidades como ortodoncia, odontología general, diseño de sonrisa, odontopediatría, especialista en endodoncia, prótesis fija y removible, especialista en periodoncia, cirujanos maxilofaciales.</p>
                </li>
            </ul>

            <style jsx>{`

                :global(:root) {
                    --sizeInfo: 1;
                }
                
                .content {
                    width: 500px;
                    display: none;
                    margin: 50px auto;
                }

                h2 {
                    text-align: center;
                    font-size: 60px;
                    color: var(--mainColor);
                }

                .img {
                    height: 200px;
                    width: 100%;
                    background-image: url(${props.imgBig});
                    background-size: 100% auto;
                    background-position: center;
                }

                ul {
                    padding: 30px 20px;
                    letter-spacing: 1px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #333333;
                    position: relative;
                    background-image: url("/img/puntos8x3.png");
                    background-repeat: no-repeat;
                    background-size: 50px;
                    background-position: right top;
                }

                li {
                    list-style: none;
                }

                h5 {
                    position: relative;
                    font-size: 18px;
                    transform: translate(20px);
                }

                h5:before {
                    position: absolute;
                    content: "";
                    height: 17px;
                    width: 17px;
                    background: var(--puntoRojo);
                    top: 4px;
                    left: -20px;
                    border-radius: 50%;
                }

                p {
                    text-align: justify;
                    color: var(--mainColorClaro);
                    margin: 20px 0;
                }

                @media screen and (max-width: 850px) {

                    .content {
                        display: block;
                    }

                }

                @media screen and (max-width: 500px) {

                    .content {
                        width: 100%;
                    }

                }

                @media screen and (max-width: 420px) {

                    :global(:root) {
                        --sizeInfo: .8;
                    }

                }

                @media screen and (max-width: 480px) {

                    h2 {
                        font-size: 50px;
                    }

                }
                @media screen and (max-width: 480px) {

                    h2 {
                        font-size: 40px;
                    }

                }
                
            `}</style>
        </section>
    )
}

export default PersonalResponsive
