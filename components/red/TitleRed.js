import React from "react";

const TitleRed = () => {
    return (
        <div className="content">
            <h1>
                <span className="nuestras">NUESTRAS</span>
                <span className="sedes">SEDES</span>
            </h1>

            <style jsx>{`
                :global(:root) {
                    --sizeTitle: 1;
                }

                h1 {
                    display: grid;
                    text-align: center;
                    color: var(--mainColor);
                }

                .nuestras {
                    font-weight: 100;
                    font-size: calc(65px * var(--sizeTitle));
                }

                .sedes {
                    margin-top: calc(-40px * var(--sizeTitle));
                    letter-spacing: calc(9px * var(--sizeTitle));
                    font-size: calc(90px * var(--sizeTitle));
                }

                .content {
                    margin-top: 120px;
                }

                @media screen and (max-width: 500px) {
                    :global(:root) {
                        --sizeTitle: 0.8;
                    }
                    h1 {
                        grid-row-gap: 10px;
                    }
                }

                @media screen and (max-width: 370px) {
                    h1 {
                        font-size: 60px;
                    }

                    .sedes {
                        margin-top: -30px;
                    }
                }
            `}</style>
        </div>
    );
};

export default TitleRed;
