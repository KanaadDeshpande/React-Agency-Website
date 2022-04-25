import "@fontsource/montserrat";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import BL from "../images/svg/Footer/BehanceLogo.svg";
import FL from "../images/svg/Footer/FacebookLogo.svg";
import IL from "../images/svg/Footer/InstagramLogo.svg";
import LL from "../images/svg/Footer/LinkedInLogo.svg";
import TL from "../images/svg/Footer/TwitterLogo.svg";
import "../styles/Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: "#0f1b2e",
    padding: "40px",
  },
  drawer: {
    backgroundColor: "#0F1B2E",
    flexWrap: "wrap",
  },
  divider: {
    height: 2,
    backgroundColor: "#BAB8B8",
    margin: "30px 0",
  },
  subFlex: {
    flexWrap: "wrap",
    width: "50%",
    justifyContent: "space-around",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={`${classes.background} footer`}>
      <div className={classes.root}>
        <div className={`${classes.drawer} dfa jcsba cw`}>
          <div className={`${classes.subFlex} subFlex dfa`}>
            <div className="mid">
              <Typography
                variant="h4"
                style={{ fontWeight: "bold" }}
                className="font-size-reduction"
              >
                IllusTech
              </Typography>
              <div>Your Path To Digital Growth</div>
              <br />
              <br />
              <div className="flexing jcsba dfa">
                <img
                  src={BL}
                  alt="BL"
                  className="responsive-footer-icon-padding"
                />
                <img
                  src={FL}
                  alt="FL"
                  className="responsive-footer-icon-padding"
                />
                <img
                  src={IL}
                  alt="IL"
                  className="responsive-footer-icon-padding"
                />
                <img src={LL} alt="LL" className="canBeDeleted" />
                <img src={TL} alt="TL" className="canBeDeleted" />
              </div>
            </div>
            <div className="mid">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold" }}
                className="font-size-reduction"
              >
                About IllusTech
              </Typography>
              <div>Company</div>
              <div>Career</div>
              <div>Blogs</div>
              <div>Events</div>
              <div>Trust &amp; Security</div>
            </div>
          </div>
          <div className={`${classes.subFlex} dfa subFlex`}>
            <div className="mid">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold" }}
                className="font-size-reduction"
              >
                Our Services
              </Typography>
              <div>IT Services</div>
              <div>Graphic Designing</div>
              <div>Digital Marketing</div>
              <div>UI/UX Designing</div>
              <div>Startup Planning</div>
            </div>
            <div className="mid">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold" }}
                className="font-size-reduction"
              >
                Branches
              </Typography>
              <div>Nagpur</div>
              <div>Mumbai</div>
              <div>Pune</div>
              <div>Bangalore</div>
              <div>SF California</div>
            </div>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className="jcsba dfa">
        <div>
          <span className="copyright-text">Copyright &copy; IllusTech</span>
        </div>
        <div>
          <span className="copyright-text">Privacy Policy</span>
          <span className="copyright-text">Terms &amp; Conditions</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
