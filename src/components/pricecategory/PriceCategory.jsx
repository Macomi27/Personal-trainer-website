import React from "react";
import { Link } from "react-router-dom";
// import PriceList from "../../pages/pricelist/PriceList";
import "./PriceCategory.css"

const pricingPlans = [
  {
    title: "Single training",
    price: "$150",
    features: [
      "Fusce eu molestie ligula",
      "Integer metus odio",
      "Dictum ut tincidunt eget",
    ],
    highlighted: false,
  },
  {
    title: "Package of 8 workouts",
    price: "$1100",
    features: [
      "Fusce eu molestie ligula",
      "Integer metus odio",
      "Dictum ut tincidunt eget",
    ],
    highlighted: true,
  },
  {
    title: "Package of 12 workouts",
    price: "$1500",
    features: [
      "Fusce eu molestie ligula",
      "Integer metus odio",
      "Dictum ut tincidunt eget",
    ],
    highlighted: false,
  },
];

const PriceCategory = () => {
  return (
    <section className="price-section">
       <div className="section-header-inner">
        <div className="above-line"></div>
        <h1 className="sec-head">PRICE LIST</h1>
      </div>
      
      <div className="pricing-container">

        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="price">{plan.price}</p>

            <div className="pricing-features">
              {plan.features.map((feat, i) => (
                  <p key={i}>{feat}</p>
              ))}
            </div>

            <button 
              className={`pricing-button ${plan.highlighted ? "primary" : "secondary"}`}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      <Link to="/pricelist">
        <button className="see-more-btn">SEE MORE</button>
      </Link>
    </section>
  );
};

export default PriceCategory;
