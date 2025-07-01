import React from "react";
import "./PriceCategory.css"

const pricingPlans = [
    {
    title: "Monthly Plan",
    price: "$250",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: false,
  },

  {
    title: "Dietary Consultation",
    price: "$50",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: true,
  },

  {
    title: "3 months Plan",
    price: "$600",
    features: [
      "Lorem ipsum dolor sit amet", 
      "Consectetur adipiscing elit", 
      "Integer diam leo",
    ],
    highlighted: false,
  },
];

const DietryConsult = () => {
  return (
    <section className="price-section">
      <div className="section-header-inner">
        <div className="above-line"></div>
        <h1 className="sec-head">DIETARY CONSULTATION</h1>
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
    </section>
  );
};

export default DietryConsult;
