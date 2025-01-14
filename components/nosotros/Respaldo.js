import React from 'react'

const Respaldo = () => {
    return (
        <div className="content">
            <h2>RESPALDO</h2>
            <div className="linea"></div>
            <p>En alianza con nuestros clientes hemos logrado generar el valor agregado que nos caracteriza en nuestra visión en donde queremos cuidarte conectando sonrisas con una salud bucal más responsable.</p>

            <div className="imagenes">
                <img src="/img/logo16.png" alt=""/> 
                <img src="/img/logo42.png" alt=""/>                 
                <img src="/img/logo20.png" alt=""/>
                <img src="/img/logo17.png" alt=""/>
                <img src="/img/logo19.png" alt=""/>
                <img src="/img/logo22.png" alt=""/>
                <img src="/img/logo18.png" alt=""/>   
                <img src="/img/logo30.png" alt=""/> 
                <img src="/img/logo31.png" alt=""/> 
                <img src="/img/logo32.png" alt=""/>
                <img src="/img/logo33.png" alt=""/> 
                <img src="/img/logo34.png" alt=""/> 
                <img src="/img/logo35.png" alt=""/> 
                <img src="/img/logo36.png" alt=""/> 
                <img src="/img/logo37.png" alt=""/>
                <img src="/img/logo39.png" alt=""/> 
{/* En espera para corregir el tamaño
                <img src="/img/logo38.png" alt=""/> 
                <img src="/img/logo40.png" alt=""/>  
                <img src="/img/logo41.png" alt=""/> 
                <img src="/img/logo43.png" alt=""/> 
                <img src="/img/logo44.png" alt=""/> 
                <img src="/img/logo45.png" alt=""/> 
                <img src="/img/logo46.png" alt=""/> 
                <img src="/img/logo47.png" alt=""/>
                <img src="/img/logo48.png" alt=""/> 
                <img src="/img/logo49.png" alt=""/> 
    */}

            </div>

            <div className="dientes"></div>
            
            <style jsx>{`

                 .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-rows: 1fr 1.5fr 1.5fr;
                }
                img {
                    height: 40px;
                    display: flex;
                    justify-content: center;                    
                }

                .linea, h2 {
                    grid-row: 1/2;
                    grid-column: 1/2;
                }

                .linea {
                    position: relative;
                    background: #66666699;
                    height: 2px;
                    width: 350px;
                    justify-self: flex-end;
                    align-self: center;
                }

                .linea:before {
                    content: "";
                    position: absolute;
                    transform: translateY(-45%);
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: var(--secondColor);
                }

                h2 {
                    align-self: center;
                    justify-self: center;
                    color: var(--mainColor);
                    font-weight: 700;
                    font-size: 60px;
                }

                p {
                    grid-column: 1/2;
                    grid-row:2/3;
                    justify-self: center;
                    align-self: center;
                    text-align: center;
                    font-weight: 500;
                    width: 700px;
                    color: var(--mainColorClaro);
                }

                .imagenes {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                    grid-row-gap: 2rem;
                    grid-column-gap: 1/32rem;
                    margin-bottom: 2rem;
                }

                .dientes {
                    grid-column: 1/2;
                    grid-row:2/4;
                    background-image: url("/img/diente-horizontal.png");
                    background-size: auto 120%;
                    background-position: right;
                    width: 90px;
                }

            `}</style>
        </div>
    )
}

export default Respaldo
