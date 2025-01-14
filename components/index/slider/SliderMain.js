import React, { useState, useEffect } from "react";
import Portada from './Portada'
import Portada2 from './Portada2'

const SliderMain = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const time = setTimeout(() => {
            if (slide <= 0) {
                setSlide(slide + 1);
            } else {
                setSlide(slide - 1);
            }
        }, 5000);
        return () => {
            clearTimeout(time);
        };
    }, [slide]);

    const selectSlide = (num) => {
        setSlide(num)
    }

    const filling = (num) => {
        return {
            background: num === slide ? "var(--mainColorClaro)" : "",
        };
    }

    return (
        <div className="content">
            <div className="select">
                <button
                    onClick={() => selectSlide(0)}
                    style={filling(0)}
                ></button>
                <button
                    onClick={() => selectSlide(1)}
                    style={filling(1)}
                ></button>
            </div>

            <ul>
                <li>
                    <Portada />
                </li>
                <li>
                    <Portada2 />
                </li>
            </ul>

            <style jsx>{`
                ul {
                    margin-left: ${slide === 0 ? "0%" : "-100%"};
                }
            `}</style>

            <style jsx>{`
                .content {
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    position: relative;
                    max-height: 630px;
                }

                .select {
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    position: absolute;
                    z-index: 30;
                    padding: 35px;
                }

                .content > ul {
                    display: grid;
                    height: 100vh;
                    width: 200%;
                    grid-template-columns: 1fr 1fr;
                    transition: margin-left 1.5s ease;
                }

                .content > ul > li {
                    list-style: none;
                    width: 100%;
                    height: 100vh;
                }

                button {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    border: 2px solid var(--mainColor);
                    border-radius: 50%;
                    outline: none;
                    background: none;
                    transition: background .5s;
                    margin: 3px;
                }

                button:hover {
                    background: var(--mainColorClaro);
                }

            `}</style>
        </div>
    );
};

export default SliderMain;
