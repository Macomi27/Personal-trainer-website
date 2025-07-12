import React from 'react'
import './Offer.css'
import ptImage from '../assets/PERSONAL-TRAINING_home.webp'
import ocImage from '../assets/ONLINE-COOPERATION.webp'
import dcImage from '../assets/DIETARY-CONSULTATION.webp'


const Offer = () => {
    return(
        <div className="offer-section">
            <div className="offer-animation"></div>
            <h2>Offer</h2>
            <div className="offer-content">
                <div className="personal-training">
                    <div>
                        <a href="/"><img className="pt-image" src={ptImage} alt="" /></a>
                    </div>
                    <h4>personal training</h4>
                    <p>Sed id dui id orci porttitor luctus sit amet a quam. Donec viverra, mi quis semper facilisis.</p>
                </div>

                <div className="online-collab">
                    <div>
                        <a href="/"><img src={ocImage} alt=""  className="oc-image"/></a>
                    </div>
                    <h4>online collaboration</h4>
                    <p>I Integer in purus non est vehicula fringilla. Vestibulum quis convallis erat, ut maximus nisl.</p>
                </div>

                <div className="dietary-consultation">
                    <div>
                        <a href="/"><img className="dc-image" src={dcImage} alt="" /></a>
                    </div>
                    <h4>dietary consultation</h4>
                    <p>Maecenas varius congue dui, non sodales nulla ullamcorper vitae. Duis at erat ultrices, faucibus quam et, porta massa.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer;