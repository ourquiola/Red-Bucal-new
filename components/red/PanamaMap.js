import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const PanamaMap = (props) => {
    const [viewPort, setViewPort] = useState({
        latitude: 8.708158,
        longitude: -79.757642,
        width: "100%",
        height: "75vh",
        zoom: 8.7,
    });

    const [myPosition, setMyPosition] = useState({
        /* 8.587050, -79.319817 */
        latitude: 8.58705,
        longitude: -79.319817,
    });

    const [dentro, setDentro] = useState(false);

    useEffect(() => {
        const width = screen.width;

        if (width < 460) {
            setViewPort(
                Object.assign({}, viewPort, {
                    width: undefined + "px",
                    zoom: 8,
                })
            );
        } else {
            setViewPort(
                Object.assign({}, viewPort, { width: undefined + "px" })
            );
        }

        /* const succeed = (pos) => {

            let latitude = pos.coords.latitude
            let longitude = pos.coords.longitude

            
            if (latitude > -83.034849 && latitude < -77.158126 && longitude < 9.638075 && longitude > 7.172350) {
                setMyPosition({
                    latitude,
                    longitude
                })
                setDentro(true)
            }
            console.log('mi latitud' + pos.coords.latitude)
            console.log('mi longitud' + pos.coords.longitude)
        } 
        
        const failure = (err) => {
            console.log(err)
        }
        
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maxinumAge: 0
        }
        
        navigator.geolocation.getCurrentPosition(
            succeed, failure, options
        ) */
        /* izquierda -> -83.034849 */
        /* derecha -> -77.158126 */
        /* arriba -> 9.638075 */
        /* abajo -> 7.172350 */
    }, []);

    return (
        <div className="content">
            <ReactMapGl
                {...viewPort}
                mapboxApiAccessToken={process.env.TOKEN_MAP}
                onViewportChange={(viewPort) => {
                    setViewPort(viewPort);
                }}
                mapStyle="mapbox://styles/sebas-ar/ck82lxiwb1a581iqwvh1ab3m3"
            >
                {props.location.map((loc) => (
                    <Marker
                        key={loc.id}
                        latitude={loc.latitude}
                        longitude={loc.longitude}
                    >
                        <button
                            style={{
                                backgroundColor: loc.color,
                                height: loc.id === props.clinic ? "50px" : "",
                                width: loc.id === props.clinic ? "50px" : "",
                                transform:
                                    loc.id === props.clinic
                                        ? "translate(-40%, -40%)"
                                        : "",
                            }}
                            onClick={() => {
                                props.changeClinic(loc.id);
                                window.open(loc.url, "_blank");
                            }}
                        >
                            <img src="/img/diente-form.png" alt="diente" />
                        </button>
                    </Marker>
                ))}

                {/* <Marker
                    latitude={myPosition.latitude}
                    longitude={myPosition.longitude}
                >
                    <button className="userBtn">
                        <svg className="user" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                        </svg>
                        <div className="text">
                            <p>{dentro ? 'Usted está aquí' : 'Usted no se encuentra en panamá'}</p>
                        </div>
                    </button>

                </Marker> */}
            </ReactMapGl>

            <style jsx>{`

                .userBtn {
                    background: #777777;
                    position: relative;
                    height: 25px;
                    width: 25px;
                    transform: translate(-40%, -40%);
                }

                .userBtn:hover .text {
                    opacity: 1;
                }

                @keyframes ocultar {
                    0% {
                        opacity: 1
                    }

                    100% {
                        opacity: 0
                        height: 0;
                        width: 0;
                        font-size: 0;
                    }
                }

                .text {
                    position: absolute;
                    top: ${dentro ? "-20px" : "-30px"};
                    left: ${dentro ? "-110px" : "-220px"};
                    background: #777777;
                    padding: 6px 6px;
                    border-radius: 15px;
                    
                }

                .content {
                    width: 100%;
                    display: grid;
                    justify-items: center;
                }

                .user {
                    width: 50%;
                }

                button {
                    z-index: 1;
                    ${
                        viewPort.zoom > 7.5
                            ? viewPort.zoom < 11.315332227113439
                                ? "height:" +
                                  viewPort.zoom * (viewPort.zoom - 7.5) +
                                  "px;"
                                : viewPort.zoom < 14.130664454226876
                                ? "height:" +
                                  (viewPort.zoom * (viewPort.zoom - 7.5) -
                                      (viewPort.zoom * (viewPort.zoom - 7.5)) /
                                          2) +
                                  "px;"
                                : "height:" +
                                  (viewPort.zoom * (viewPort.zoom - 7.5) -
                                      (viewPort.zoom * (viewPort.zoom - 7.5)) /
                                          1.5) +
                                  "px;"
                            : "height: 10px;"
                    }
                    ${
                        viewPort.zoom > 7.5
                            ? viewPort.zoom < 11.315332227113439
                                ? "width:" +
                                  viewPort.zoom * (viewPort.zoom - 7.5) +
                                  "px;"
                                : viewPort.zoom < 14.130664454226876
                                ? "width:" +
                                  (viewPort.zoom * (viewPort.zoom - 7.5) -
                                      (viewPort.zoom * (viewPort.zoom - 7.5)) /
                                          2) +
                                  "px;"
                                : "width:" +
                                  (viewPort.zoom * (viewPort.zoom - 7.5) -
                                      (viewPort.zoom * (viewPort.zoom - 7.5)) /
                                          1.5) +
                                  "px;"
                            : "width: 10px;"
                    }
                    border: none;
                    cursor: pointer;
                    color: white;
                    border-radius: 50%;
                    outline: none;   
                    transition: height .5s, width .5s, transform .5s ease-in;           
                } 

                button:hover {
                    z-index: 10;
                    ${
                        viewPort.zoom < 11.315332227113439
                            ? "transform: translate(-40%,-40%);"
                            : ""
                    }
                    height: 50px;
                    width: 50px;
                }

                img {
                    width: 60%;
                }
                
            `}</style>
        </div>
    );
};

export default PanamaMap;
