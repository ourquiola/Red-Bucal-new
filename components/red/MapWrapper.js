const MapWrapper = ({children}) => {
    return (
        <div className="container">

            {children}

            <style jsx>{`

                .container {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                }

                @media screen and (max-width: 800px) {
                    
                    .container {
                        grid-template-columns: 1fr;
                        margin: 0 30px;
                    }
                    
                }

                @media screen and (max-width: 500px) {
                    
                    .container {
                        margin: 0;
                    }
                    
                }

                @media screen and (max-width: 1000px) and (min-width: 800px) {
                    
                    .container {
                        
                    }
                    
                }

            `}</style>
        </div>
    )
}

export default MapWrapper