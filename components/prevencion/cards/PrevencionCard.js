import React from 'react'
import Card from './Card'
import listPercentPrevencion from '../list/listPercentPrevencion'

const PrevencionCard = ({changeActive, changeList}) => {
    return (
        <div className="container">
           {
               listPercentPrevencion.map((list, i) => (
                   <Card list={list} index={i} changeActive={changeActive} changeList={changeList}/>
               ))
           }
           <style jsx>{`
           
               .container {
                   display: grid;
                   grid-template-columns: 1fr 1fr 1fr;
                   justify-items: center;
                   grid-gap: 30px;
                   margin: 100px;
               }


               @media screen and (max-width: 1140px) {
                    .container {
                        grid-template-columns: 1fr 1fr;
                    }
               }

               @media screen and (max-width: 740px) {
                    .container {
                        grid-template-columns: 1fr;
                        margin: 40px;
                    }
               }

               @media screen and (max-width: 670px) {
                    .container {
                        margin: 50px;
                    }
               }e
           
           `}</style>
        </div>
    )
}

export default PrevencionCard
