import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import AM from "../../images/svg/About/AccountsManaged.svg";
import MC from "../../images/svg/About/MarketingCampaigns.svg";
import PDQV from "../../images/svg/About/PDQView.svg";
import SC from "../../images/svg/About/SatisfiedCustomers.svg";
import WC from "../../images/svg/About/WebsitesCreated.svg";
import "../../styles/About/About.css";
import "../../styles/About/PDQView.css";

function PDQView() {
  return (
    <>
      <Box className="outer-box jcca bgcdb bgc cw aica dfa fdra">
        <Box p={1}>
          <h1 className="ml fw-700">About IllusTech</h1>
          <p className="wid ml pfs">
            Think of us as a partner wired to act beyond the responsibilities of
            a typical digital marketing company to help businesses grow. We
            consult, strategize &amp; execute to deliver real time results.
          </p>
          <br />
          <br />
          <div>
            <Button className="bfs-main bgclb">
              <NavLink to="/contact">
                <strong className="cdb">
                  GET IN TOUCH WITH US{" "}
                  <ArrowRightAltIcon
                    fontSize="default"
                    className="arrow_icon aica"
                  />
                </strong>
              </NavLink>
            </Button>
          </div>
        </Box>
        <Box p={1} className="inner-image">
          <img
            src={PDQV}
            style={{ width: "100%", height: "100%" }}
            alt="Teamwork"
            className="pdq-img"
          />
        </Box>
      </Box>
      <div className="div-rectangle dfa jcca">
        <Box className="box-rectangle dfa" maxWidth="70%">
          <Box
            maxWidth="50%"
            style={{ justifyContent: "flex-end" }}
            className="sub-box dfa"
          >
            <Box p={1} className="taca">
              <div className="dfa aica jcca">
                <img src={SC} alt="Satisfied Customers" />
              </div>
              <h1 className="rect-headings fw-700 taca">100+</h1>
              <span className="rect-description dfa aica jcca taca">
                Satisfied Customers
              </span>
            </Box>
            <Box p={1} className="taca">
              <div className="dfa aica jcca">
                <img src={AM} alt="Accounts Managed" />
              </div>
              <h1 className="rect-headings fw-700 taca">100+</h1>
              <span className="rect-description dfa aica jcca taca">
                Accounts Managed
              </span>
            </Box>
          </Box>
          <Box
            maxWidth="55%"
            style={{ justifyContent: "flex-start" }}
            className="sub-box dfa"
          >
            <Box p={1} className="taca">
              <div className="dfa aica jcca">
                <img src={MC} alt="Marketing Campaigns" />
              </div>
              <h1 className="rect-headings fw-700 taca">100+</h1>
              <span className="rect-description dfa aica jcca taca">
                Marketing Campaigns
              </span>
            </Box>
            <Box p={1} className="taca">
              <div className="dfa aica jcca">
                <img src={WC} alt="Websites Created" />
              </div>
              <h1 className="rect-headings fw-700 taca">100+</h1>
              <span className="rect-description dfa aica jcca taca">
                Websites Created
              </span>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default PDQView;
