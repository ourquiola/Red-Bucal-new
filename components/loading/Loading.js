import react, { useState } from 'react'

const loading = ({ color }) => {

    const [i, setI] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const style = item => {
        return {
            transform: `rotate(calc(36deg * ${item}))`,
            animationDelay: `calc(0.2s * ${item - 1})`
        }
    }

    return (
        <div className="loader">
            {
                i.map(item => (
                    <span key={item} style={style(item)}></span>
                ))
            }
            <style jsx>{`
                .loader {
                    height: 20px;
                    width: 20px;
                    position: relative;
                    margin: auto;
                    animation: animateBg 10s linear infinite;
                }

                span {
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    position: absolute;
                    animation: animate 2s linear infinite;
                }

                span::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 4px;
                    background: ${color ? color : 'var(--mainColor)'};
                    border-radius: 50%;
                }

                @keyframes animate {
                    0% {
                        opacity: 1
                    }

                    80% ,100% {
                        opacity: 0
                    }
                }
            `}</style>

        </div>
    )
}

export default loading
