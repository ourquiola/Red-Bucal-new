import React from "react";

const ErrorsFileExcel = ({ errorsFile, setshowFileError }) => {
    return (
        <div className="content">
            <section>
                <svg onClick={() => { setshowFileError(false) }} viewBox="0 0 512 512">
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>
                <div className="file-error center">
                    <p>Fila en el excel</p>
                    <p>Error</p>
                </div>
                <hr />
                <div className="wrapper">
                    {errorsFile.map((err) => (
                        <div className="file-error">
                            <p className="center">{err?.row}</p>
                            <div>
                                {err?.errorId ? <p>{err?.errorId}</p> : null}
                                {err?.errorName ? <p>{err?.errorName}</p> : null}
                                {err?.errorDate ? <p>{err?.errorDate}</p> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .content {
                    top: 0;
                    left: 0;
                    position: fixed;
                    background: #33333388;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    z-index: 1200;
                }

                svg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 30px;
                    color: var(--puntoRojo);
                    margin: 20px;
                    cursor: pointer;
                }

                section {
                    position: relative;
                    background: white;
                    padding: 30px;
                    border-radius: 30px;
                }

                .wrapper {
                    height: 200px;
                    overflow: auto;
                }

                .file-error {
                    display: grid;
                    grid-template-columns: 1fr 4fr 1fr;
                }

                .center {
                    text-align: center
                }

                p {
                    margin: 5px 0;
                }
            `}</style>
        </div>
    );
};

export default ErrorsFileExcel;
