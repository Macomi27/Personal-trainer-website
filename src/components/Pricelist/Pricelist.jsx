import React from 'react';
import './Pricelist.css'

const Pricelist = () => {
    return(
        <div className="price-list-sec">
            <div className="pricelist-title">
                    <div className="pricelist-animation"></div>
                    <h2>price list</h2>
                </div>
            <div className="price-list">
        <div className="single-training">
            <p>Single training</p>
            <p>$150</p>
            <p>Fusce eu molestie ligula</p>
            <p>Integer metus odio</p>
            <p>Dictum ut tincidunt eget</p>
            <button>add to cart</button>
        </div>
        <div className="package-8">
            <p>Package of 8 workouts</p>
            <p>$1100</p>
            <p>Fusce eu molestie ligula</p>
            <p>Integer metus odio</p>
            <p>Dictum ut tincidunt eget</p>
            <button>add to cart</button>
        </div>
        <div className="package-12">
            <p>Package of 12 workouts</p>
            <p>$1500</p>
            <p>Fusce eu molestie ligula</p>
            <p>Integer metus odio</p>
            <p>Dictum ut tincidunt eget</p>
            <button>add to cart</button>
        </div>
        </div>
        <div className="see-more">
            <button>see more</button>
        </div>
        </div>
    )
}

export default Pricelist;