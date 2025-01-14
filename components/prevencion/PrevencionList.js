import React, { useState, useEffect } from 'react'
import listPercentPrevencion from '../prevencion/list/listPercentPrevencion'

const PrevencionList = (props) => {

    const [columns, setColumns] = useState(false);

    useEffect(() => {
        
        if (listPercentPrevencion[props.list].list.length > 15) {
            setColumns(true)
        } else {
            setColumns(false)
        }

    })

    return (
        props.active
        ?
        <div className="content">
            <section>
                <svg onClick={() => { props.changeActive() }} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>
                <h3>{listPercentPrevencion[props.list].title}</h3>
                <ul>
                    {
                        listPercentPrevencion[props.list].list.map(percent => (
                            <li key={percent}>
                                {percent}
                            </li>
                        ))
                    }
                </ul>
                    {
                        listPercentPrevencion[props.list].exception
                            ?
                            <p>
                                {listPercentPrevencion[props.list].exception}
                            </p>
                            :
                            ''
                    }
            </section>

            <style jsx>{`

                .content {
                    z-index: 1000;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background-color: #333333aa;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }    

                section {
                    box-sizing: border-box;
                    position: relative;
                    padding: 40px;
                    background-color: white;
                    border-radius: 20px;
                    margin: 0 30px;
                }

                svg {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 30px;
                    color: var(--puntoRojo);
                    cursor: pointer;
                    transition: transform .5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                p {
                    text-align: center;
                    color: var(--mainColor)
                }

                li {
                    margin: 5px 5px;
                    padding-left: 20px;
                    list-style: none;
                    position: relative;
                    transition: color .5s;
                    color: var(--mainColorClaro);
                    font-weight: 400;
                }

                li:hover {
                    color: var(--miainColor);
                }

                li:hover:before {
                    background-color: rgba(255, 34, 17, 0.6);
                }

                ul {
                    ${columns ? 'display: grid;' : ''}
                    ${columns ? 'grid-template-columns: 1fr 1fr 1fr;' : ''}
                    ${columns ? 'height: 440px;' : ''}
                    overflow: auto;
                }

                li:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 6px;
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                    transition: color .5s;
                    background: var(--puntoRojo);
                }

                h3 {
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 25px;
                    margin: 10px 0;
                }

                @media screen and (max-width: 700px) {
                    ul {
                        ${columns ? 'grid-template-columns: 1fr 1fr;' : ''}
                    }
                }

                @media screen and (max-width: 450px) {
                    ul {
                        ${columns ? 'grid-template-columns: 1fr;' : ''}
                    }
                }
                
            `}</style>


        </div>
        :
        ''
    )
}

export default PrevencionList
