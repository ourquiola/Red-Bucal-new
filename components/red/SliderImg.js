import React, { useState, useEffect } from 'react'

const SliderImg = (props) => {

    const [slider, setSlider] = useState(0);
    const [img, setImg] = useState([]);

    useEffect(() => {
        if (!slider) {
            setSlider(slider + 1)
        }
        const time = setInterval(() => {
            setSlider(slider + 1)
        }, 14000)
        return () => {
            clearInterval(time)
        };
    });

    useEffect(() => {
        if (props.location === 0) {
            setImg([
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
                '/img/doctor-2.png',
            ])
        } else if (props.location === 0) {
            setImg([
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
                '/img/operacion.png',
            ])
        } else if (props.location === 0) {
            setImg([
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
                '/img/dentist-2.png',
            ])

        } else {
            setImg([
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
                '/img/young-1.png',
            ])

        }
    }, [props.location]);


    return (
        <div className="content">
            <ul>

                <li className="first"><img src={img[0]} alt="" /></li>
                <li><img src={img[1]} alt="" /></li>
                <li><img src={img[2]} alt="" /></li>
                <li><img src={img[3]} alt="" /></li>
                <li><img src={img[4]} alt="" /></li>
                <li><img src={img[5]} alt="" /></li>
                <li><img src={img[6]} alt="" /></li>
                <li><img src={img[7]} alt="" /></li>
                <li><img src={img[8]} alt="" /></li>
                <li><img src={img[9]} alt="" /></li>

            </ul>

            <style jsx>{`
                
                ul {
                    margin-left: ${slider % 2 === 0 ? '-50%' : '0'};
                }    
                
            `}</style>

            <style jsx>{`

                img {
                    width: 100%;
                }
                
                .content {
                    margin: 50px 0;
                    height: 220px;
                    overflow: hidden;
                }    

                ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    transition: margin-left ease 14s;
                }

                .first {
                    margin: 0 10px 0 0;
                }

                li {
                    height: 220px;
                    width: 220px;
                    margin: 0 10px;
                    background: blue;
                    list-style: none;
                }

            
            `}</style>
        </div>
    )
}

export default SliderImg
