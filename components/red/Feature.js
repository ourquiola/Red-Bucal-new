import React from 'react'

const Feature = (props) => {
    return (
        <section className="content">

            <img src={props.img} alt=""/>
            <h2>{props.titulo}</h2>
            <div className="doble">
                <p>Ortodoncia</p>
                <p>Odontología general</p>
                <p>Diseño de sonrisa</p>
                <p>Blanqueamiento dental</p>
                <p>Profilaxis dental</p>
                <p>Radiografía panorámica</p>
                <p>Odontopediatría</p>
                <p>Especialista en endodoncia</p>
                <p>Prótesis fija y removible</p>
                <p>Especialista en periodoncia</p>
                <p>Implantes dentales</p>
            </div>

            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-rows: 2fr 1fr 4fr;
                    justify-items: center;
                    align-items: center;
                }

                .amarilloLine {
                    display: none;
                    background-color: var(--amarillo);
                    width: 100%;
                    height: 100%;
                }

                .doble {
                    margin: 20px 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                p:before {
                    content: '';
                    position: absolute;
                    left: -20px;
                    top: 25%;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: var(--amarillo);
                }

                h2 {
                    padding:5px 0;
                    width: 100%;
                    text-align: center;
                    background-color: var(--amarillo);
                    color: var(--mainColor);
                }

                p {
                    color: white;
                    font-size: 13px;
                    margin: 0 40px 20px;
                    text-align: justify;
                    position: relative;
                }

                img {
                    height: 65px;
                }

                @media screen and (max-width: 1010px) {
                    .content {
                        grid-template-rows: 2fr 1fr 4fr 10px;
                    }

                    .amarilloLine {
                        display: block;
                    }
                }
                
                @media screen and (max-width: 480px) {

                    .doble {
                        grid-template-columns: 1fr;
                    }

                    .content {
                        grid-template-rows: 100px 40px 4fr 3px;
                    }

                }

            `}</style>
        </section>
    )
}

export default Feature
