import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/Home/WhoWeAre.json";
import wwa from "../../images/svg/Home/WhoWeAre/WhoWeAreHome.svg";

function WhoWeAre() {
  return (
    <div className="wwa_main_container">
      <div className="wwa_padding">
        <h1 className="home_title dfa jcca aica taca white-title">
          Who We Are
        </h1>
      </div>
      <div style={{ width: "100%" }}>
        <Box className="wwa_box" p={1}>
          <Box p={1} className="wwa_svg_container">
            <img src={wwa} alt="Who We Are" />
          </Box>
          <Box p={1} flexGrow={1} className="wwa_description cw">
            <p>{data.para1}</p>
            <br />
            <p className="hide">{data.para2}</p>
            <div className="wwo-button">
              <Button className="bfs-main bgclb">
                <NavLink to="/about">
                  <strong className="cdb">
                    LEARN MORE{" "}
                    <ArrowRightAltIcon
                      fontSize="default"
                      className="arrow_icon aica"
                    />
                  </strong>
                </NavLink>
              </Button>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default WhoWeAre;
