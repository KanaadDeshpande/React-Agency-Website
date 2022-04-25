import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import wwo from "../../images/svg/About/WhatWeOffer.svg";
import "../../styles/About/About.css";
import "../../styles/About/WhatWeOffer.css";

function WhatWeOffer() {
  return (
    <div className="wwo-main-container bgcw">
      <h1 className="wwo-heading fw-700 cdb">What We Offer</h1>
      <div style={{ width: "100%" }}>
        <Box className="wwo-box">
          <div className="wwo-img">
            <img src={wwo} alt="What We Offer" />
          </div>
          <h1 className="wwo-heading-responsive cdb wwo-heading fw-700">
            What We Offer
          </h1>
          <Box
            p={1}
            className="wwo-description fs-20 fw-500 taja cdb dfa"
            flexDirection="column"
          >
            <p className="wwo-p">
              Talking about Digital Marketing Services, we offer Web
              Development, SEO/SEM, Graphic Designing, Social Media Marketing
              and Email Marketing for customers across the nation. We suggest
              the best-in-line marketing plans.
            </p>
            <p className="wwo-p">
              Since there is no limit to what you can get designed at Illustech,
              we are a creative marketplace for custom graphic, logo, web and
              print designs with enthusiastic designers having creative flair
              and expertise to make it happen for you. With our graphic
              designing services,
            </p>
            <p className="wwo-p">
              With our focus on IT modernization including IT infrastructure,
              Web, App or Software development and maintenance of information
              technology; IT services in India, our technical experts deliver
              goal-driven innovative solutions to boost businesses ’ marketing
              efforts and offline advertisements.
            </p>
            <div className="wwo-button">
              <NavLink to="/about" className="tdna">
                <Button className="wwa-button-font-color fs-14 fw-700 bgcdb cw">
                  <strong>
                    Learn More{" "}
                    <ArrowRightAltIcon
                      fontSize="default"
                      className="arrow_icon"
                    />
                  </strong>
                </Button>
              </NavLink>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default WhatWeOffer;
