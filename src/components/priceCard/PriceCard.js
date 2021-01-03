import React from "react";
import "./Card.css";

const PriceCard = () => {
  return (
    <>
      <div className="pricing-cards">
        <div className="first-card card">
          <h3 className="title">Teams</h3>
          <p className="description first-card-description">
            All the apps and everything you need to secure your team.
          </p>
          <h4 className="price">
            $<span>3</span>
            .99
          </h4>
          <span className="biling-mode">per user monthly</span>
          <a className="try-btn">Try 1Password FREE</a>
        </div>
        <div className="second-card card">
          <h3 className="title">Business</h3>
          <p className="description first-card-description">
            Flexibility and control for your advanced business needs.
          </p>
          <h4 className="price">
            $<span>7</span>
            .99
          </h4>
          <span className="biling-mode">per user monthly</span>

          <a className="try-btn ">Try 1Password FREE</a>
          <div className="footer">
            <p>
              Includes free family accounts and access to Advanced Protection
            </p>
          </div>
        </div>
        <div className="third-card card">
          <h3 className="title">Business</h3>
          <p className="description first-card-description">
            Flexibility and control for your advanced business needs.
          </p>
          <ul>
            <li>Dedicated account manager</li>
            <li>Tailor-made setup training</li>
            <li>Onboard engineer</li>
          </ul>
          <a className="try-btn">Try 1Password FREE</a>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
