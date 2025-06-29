import React from "react";
// import PriceList from "../../pages/pricelist/PriceList";
import "./PriceCategory.css"

const pricingPlans = [
    {
    title: "Package of 8 workouts",
    price: "$1100",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: false,
  },

  {
    title: "Single training",
    price: "$150",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: true,
  },

  {
    title: "Package of 12 workouts",
    price: "$1500",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: false,
  },
];

const TrainingPack = () => {
  return (
    <section className="price-section">
      <h2 className="sec-head">TRAINING PACKAGES</h2>
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
    </section>
  );
};

export default TrainingPack;
