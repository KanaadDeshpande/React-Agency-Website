import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import wwa from "../../images/svg/About/WhoWeAre.svg";
import "../../styles/About/About.css";
import "../../styles/About/WhoWeAre.css";

function WhoWeAre() {
  return (
    <div className="wwa-main-container bgcw">
      <h1 className="wwa-heading fw-700 cdb dfa jcca aica">Who We Are</h1>
      <div style={{ width: "100%" }}>
        <Box className="dfa">
          <div className="wwa-img dfa jcca">
            <img src={wwa} alt="Who We Are" />
          </div>
          <h1 className="wwa-heading-responsive fw-700 cdb wwa-heading">
            Who We Are
          </h1>
          <Box
            p={1}
            className="wwa-description fs-20 fw-500 cdb taca dfa"
            flexDirection="column"
          >
            <p className="wwa-p" style={{ textAlign: "left" }}>
              Illustech is the most significant player in the Indian digital
              ecosystem with a mission to impart visibility, profitability and
              effectiveness with our 360-degree digital solutions. Formed in
              2019, the company is based in Nagpur and managed by an experienced
              team of professionals who have served the industry to research
              various business models and build brands brick by brick.
            </p>
            <br />
            <p className="wwa-p" style={{ textAlign: "left" }}>
              Illustech is a full-service digital marketing company in India
              that provides tailored digital solutions to increase leads, Sales
              and Revenue with any type of promotional activity done via the
              web. Focusing on illustration and technologies - ILLUSTECH was
              formed to always offer high-end digital services with speed and
              agility. Our specialized services include digital marketing,
              graphic designing and IT Services to help brands assess current
              technologies for strategizing in future with accurate information
              related to their target audience.
            </p>
            <div className="wwo-button">
              <NavLink to="/about" className="tdna">
                <Button className="wwa-button-font-color fs-14 fw-700 cw bgcdb">
                  <strong>Learn More&rarr;</strong>
                </Button>
              </NavLink>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default WhoWeAre;
