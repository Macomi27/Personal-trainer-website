import React from "react";
import "./Worth.css";
import worthImage from '../assets/worth.webp'

const Worth = () => {
    return(
        <div className="worth-it-sec">
            <div className="worth-it-container">
                <div className="worth-title worth1">
                    <div className="worth-animation"></div>
                    <h2>why is it worth ?</h2>
                </div>
                <div className="way worth2"> 
                    <p className="way-heading"><span className="digit">#1 </span>You will introduce healthy habits into your life.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis nisi at volutpat commodo. Nunc a lacus quam. Nam non volutpat turpis. Suspendisse finibus in libero in feugiat.</p>
                </div>
                <div className="way worth3">
                    <p className="way-heading"><span className="digit">#2 </span>You will find the best way to reach your destination.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis nisi at volutpat commodo. Nunc a lacus quam. Nam non volutpat turpis. Suspendisse finibus in libero in feugiat.</p>
                </div>
                <div className="way worth4">
                    <p className="way-heading"><span className="digit">#3 </span>You will be given nutritional advice to help you achieve your goal faster.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis nisi at volutpat commodo. Nunc a lacus quam. Nam non volutpat turpis. Suspendisse finibus in libero in feugiat.</p>
                </div>
                <div className="worth-img worth5">
                    <img src={worthImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Worth;