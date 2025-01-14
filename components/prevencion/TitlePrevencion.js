import React from "react";

const TitlePrevencion = () => {
    return (
        <div className="content">
            <h1>
                <span className="delgado">
                    A TRAVÉS DE NUESTROS PLANES GOZARÁ DE
                </span>
                <span className="grueso">BENEFICIOS DE SALUD PREVENTIVA</span>
            </h1>

            <style jsx>{`
                :global(:root) {
                    --sizeTitlebenef: 0.7;
                }

                .content {
                    margin-top: 150px;
                }

                h1 {
                    display: grid;
                    text-align: center;
                    color: var(--mainColor);
                    margin: 50px 0;
                }

                .normal {
                    font-weight: 100;
                    font-size: calc(25px * var(--sizeTitlebenef));
                }

                .delgado {
                    font-weight: 100;
                    font-size: calc(65px * var(--sizeTitlebenef));
                }

                .grueso {
                    margin-top: calc(-30px * var(--sizeTitlebenef));
                    letter-spacing: calc(3px * var(--sizeTitlebenef));
                    font-size: calc(90px * var(--sizeTitlebenef));
                }

                .plan {
                    display: grid;
                    justify-content: center;
                    margin: 2rem;
                    font-size: calc(20px * var(--sizeTitlebenef));
                }


                @media screen and (max-width: 930px) {
                    --sizeTitlebenef: 0.5;
                }

                @media screen and (max-width: 690px) {
                    --sizeTitlebenef: 0.3;
                    h1 {
                        grid-row-gap: 5px;
                    }
                }
            `}</style>
        </div>
    );
};

export default TitlePrevencion;
