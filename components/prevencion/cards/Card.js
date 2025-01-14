import React from 'react'

const Card = ({list, index, changeActive, changeList}) => {
    return (
       <section className="container">
           <header>
                <h3>{list.title}</h3>
           </header>
           <ul>
               {
                    list.list.map((li, i) => (
                        i <= 5 ? <li>{li}</li> : null
                    ))
               }
           </ul>
           {
                list.list.length > 5
                ?
                <span 
                    onClick={() => {
                    changeList(index)
                    changeActive()
                    }
                }>
                Ver Más</span>
                :
                null
           }

            <style jsx>{`
            
                header {
                    text-align: center;
                }

                h3 {
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 25px;
                    margin: 10px 0;
                }

                ul {
                    margin: 20px 0;
                    
                }

                span {
                    display: block;
                    text-align: center;
                    cursor: pointer;
                    color: var(--mainColor);
                    font-size: 15px;
                    text-decoration: underline;
                    font-weight: 700;
                    transition: transform .5s;
                }

                span:hover {
                    transform: scale(1.1);
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
            
            `}</style>
       </section> 
    )
}

export default Card
