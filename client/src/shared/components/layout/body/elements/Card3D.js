import React, {useRef, useEffect} from 'react';
import './card3D.scss'

function Card3D() {
    const card=useRef(null)
    function handleClick(){

        card.current.classList.toggle("rotated")


    }
        return (
            <div>
                <div className="cards-wrapper">
                    <div className="card-container">
                        <div onClick={handleClick} ref={card} className="card3d">
                            <div className="card-contents card-front">
                                <div className="card-depth">
                                    <h2>Click card</h2>
                                    <hr/>
                                        <p>For 3D rotation</p>
                                </div>
                            </div>
                            <div className="card-contents card-back">
                                <div className="card-depth">
                                    <h2>Click card again</h2>
                                    <hr/>
                                        <p>To turn back</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Card3D;