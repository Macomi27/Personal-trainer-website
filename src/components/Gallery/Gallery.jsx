import React from 'react';
import './Gallery.css'
import gal1 from '../assets/gallery1.webp'
import gal2 from '../assets/gallery2.webp'
import gal3 from '../assets/gallery3.webp'
import gal4 from '../assets/gallery4.webp'
import gal5 from '../assets/gallery5.webp'

const Gallery = () => {
    return(
        <div className="gallery-sec">
            <div className="gal-title">
                <div className="gal-animation"></div>
                <h2>gallery</h2>
            </div>
            <div className="gal-grid">
                <div className="gal1 gal-img">
                    <img src={gal1} alt="" />
                </div>
                <div className="gal2 gal-img">
                    <img src={gal2} alt="" />
                </div>
                <div className="gal3 gal-img">
                    <img src={gal3} alt="" />
                </div>
                <div className="gal4 gal-img">
                    <img src={gal4} alt="" />
                </div>
                <div className="gal5 gal-img">
                    <img src={gal5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery;