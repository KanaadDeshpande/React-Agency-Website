import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { Link } from "react-router-dom";
import fa from "../../images/svg/About/FutureAspirations.svg";
import "../../styles/About/About.css";
import "../../styles/About/FutureAspirations.css";

function FutureAspirations() {
  return (
    <div className="fa-main-container bgcdb">
      <div className="width-100">
        <h1 className="fa-heading fw-700 cw" style={{ paddingBottom: "10px" }}>
          Future Aspirations
        </h1>
        <Box className="dfa">
          <div className="fa-img dfa jcca">
            <img src={fa} alt="Future Aspirations" />
          </div>

          <Box
            p={1}
            className="fa-description fs-16 fw-500 tala cw dfa jcca"
            flexDirection="column"
            alignItems="left"
          >
            <p className="fa-p">
              <h1
                className="fa-sub-heading dfa fa-heading fw-700 cw"
                style={{ paddingBottom: "10px" }}
              >
                Vision
              </h1>
              Our vision is to run mission-oriented systems with the latest
              technological innovations to deliver better business outcomes and
              new heights of performance, competitiveness and journey for our
              customers in the most transparent way
            </p>
            <p className="fa-p">
              <h1
                className="fa-sub-heading fa-heading fw-700 cw"
                style={{ paddingBottom: "10px" }}
              >
                Mission
              </h1>
              We understand the pain point and make the brand experience
              brighter by imparting visibility, profitability and effectiveness
              with our 360-degree digital solutions built on the latest
              technologies.
            </p>
            <div className="fa-button dfa">
              <Link to="/contact" className="tdna">
                <Button className="bfs-main bgclb cdb">
                  <strong>
                    GET IN TOUCH WITH US{" "}
                    <ArrowRightAltIcon
                      fontSize="default"
                      className="arrow_icon"
                    />
                  </strong>
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default FutureAspirations;
