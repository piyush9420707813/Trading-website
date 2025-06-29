import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      

      <div className="container text-center py-5">
        <img
          src="media/images/largestBroker.svg"
          className="img-fluid mb-4"
          style={{ maxWidth: "600px" }}
          alt="Broker Dashboard"
        />

        <h1 className="display-4 fw-bold mb-3">Invest in everything</h1>
        <p className="fs-5 text-muted mb-4">
          Online platform to invest in stocks, mutual funds, and more.
        </p>

        <button className="btn btn-primary btn-lg mb-5">Sign up now</button>

        <div className="text-start px-3">
          <h2 className="fs-3 fw-semibold mb-3">Largest stock broker in India</h2>
          <ul className="fs-5">
            <li>₹0 brokerage on investments</li>
            <li>Direct mutual funds</li>
            <li>Advanced trading tools</li>
            <li>Trusted by millions</li>
          </ul>
        </div>

        <div className="text-start px-3 mt-5">
          <h2 className="fs-3 fw-semibold">Trust with confidence</h2>
          <p className="fs-6">
            No spam. No gimmicks. Just the cleanest, fastest stock trading experience on the internet.
          </p>
        </div>
      </div>

      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
}

export default HomePage;
