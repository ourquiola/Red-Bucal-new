import React from 'react'

const ServicesUser = (props) => {
    return (
        <section>
            <label>
                LIMPIEZA DENTAL:
                <p>{props.data.service ? 'REALIZADO' : 'NO REALIZADO'}</p>
            </label>

            <style jsx>{`
                
                section {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }    

                label {
                    margin: 20px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }
                
            `}</style>
        </section>
    )
}

export default ServicesUser
