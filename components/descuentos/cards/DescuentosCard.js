import React from 'react'
import Card from './Card'
import listPercent from '../list/listPercent'

const DescuentosCard = ({changeActive, changeList}) => {
    return (
        <div className="container">
           {
               listPercent.map((list, i) => (
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
               }
           
           `}</style>
        </div>
    )
}

export default DescuentosCard
