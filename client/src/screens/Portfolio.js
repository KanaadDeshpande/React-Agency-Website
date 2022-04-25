import React from "react";
import "../styles/Portfolio/Portfolio.css";
import CS from "../images/svg/Portfolio/ComingSoon.svg";

function Portfolio() {
  return (
    <div className="portfolio-outer-div bgcdb dfa jcca fdca aica">
      <h1 className="portfolio-title">Portfolio</h1>
      <h2 className="portfolio-title">Coming Soon...</h2>
      <img src={CS} alt="" className="portfolio-image" />
      {/* </div> */}
    </div>
  );
}

export default Portfolio;
