import { AppBar, Button, Drawer, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AD from "../images/svg/Navbar/ApplicationDevelopment.svg";
import FA from "../images/svg/Navbar/ForApplications.svg";
import FW from "../images/svg/Navbar/ForWebsites.svg";
import GA from "../images/svg/Navbar/GoogleAdwords.svg";
import LG from "../images/svg/Navbar/LeadGeneration.svg";
import LM from "../images/svg/Navbar/LinkedInMarketing.svg";
import LD from "../images/svg/Navbar/LogoDesign.svg";
import MoS from "../images/svg/Navbar/MaintenanceOfServices.svg";
import OK from "../images/svg/Navbar/OfficeKit.svg";
import PV from "../images/svg/Navbar/PromotionalVideos.svg";
import SO from "../images/svg/Navbar/SEOOptimization.svg";
import SMM from "../images/svg/Navbar/SocialMediaManagement.svg";
import SD from "../images/svg/Navbar/SoftwareDevelopment.svg";
import WD from "../images/svg/Navbar/WebDevelopment.svg";
import "../styles/Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: "#0f1b2e",
  },
  title: {
    flexGrow: 1,
  },
  navBtn: {
    textTransform: "initial",
  },
  drawer: {
    padding: "20px 40px",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#0F1B2E",
    flexDirection: "row",
  },
  closeBtn: {
    position: "fixed",
    right: 40,
    top: 0,
    fontSize: 60,
    height: 24,
    width: "24px !important",
    margin: "0 !important",
    background: "#0f1b2e",
    zIndex: 1000,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [open, setOpen] = useState({
    open: false,
    type: "top",
  });

  function toggleDrawer(type, bool) {
    setOpen({
      open: bool,
      type: type,
    });
  }

  function resize(width) {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });
  function clickmefkpls() {
    const servicesDropdown = document.getElementById("servicesDropdown");
    servicesDropdown.classList.toggle("servicesShow");
  }

  function toolbarSpanStyle(width) {
    return {
      width: width,
      height: 2,
      backgroundColor: "#fff",
      margin: 5,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        {Number(windowSize.width) > 1160 ? (
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/">IllusTech</NavLink>
            </Typography>
            <Button className={`${classes.navBtn} navbar-font fw-400 fs-18 cw`}>
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button
              className={`${classes.navBtn} navbar-font fw-400 fs-18 cw`}
              onClick={() => {
                toggleDrawer("top", true);
              }}
            >
              Services
            </Button>

            <Button className={`${classes.navBtn} navbar-font fw-400 fs-18 cw`}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </Button>
            <Button className={`${classes.navBtn} navbar-font fw-400 fs-18 cw`}>
              {" "}
              <NavLink to="/about">About</NavLink>
            </Button>
            <Button className={`${classes.navBtn} navbar-font fw-400 fs-18 cw`}>
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </Toolbar>
        ) : (
          <Toolbar className="dfa jcca aica">
            <Typography variant="h5" className={classes.title}>
              <NavLink to="/">IllusTech</NavLink>
            </Typography>

            <span
              onClick={() => {
                toggleDrawer("top", true);
              }}
              style={{
                cursor: "pointer",
                right: 0,
                flexDirection: "column",
                alignItems: "flex-end",
              }}
              className="dfa jcca"
            >
              <hr style={toolbarSpanStyle(34)}></hr>
              <hr style={toolbarSpanStyle(20)}></hr>
              <hr style={toolbarSpanStyle(28)}></hr>
            </span>
          </Toolbar>
        )}
      </AppBar>
      <Drawer
        anchor={open.type}
        open={open.open}
        onClose={() => {
          toggleDrawer("top", false);
        }}
        onOpen={() => {
          toggleDrawer("top", true);
        }}
      >
        {Number(windowSize.width) > 1160 ? (
          <div className={`${classes.drawer} main-drawer-div dfa cw`}>
            <div
              className={classes.closeBtn}
              onClick={() => toggleDrawer("top", false)}
            >
              &times;
            </div>
            <div
              className="mid"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/IT-Services">
                <Typography variant="h5">IT Services</Typography>
                <div>
                  <span className="span">
                    <img src={WD} alt="Web Development" />
                  </span>{" "}
                  Web Development
                </div>
                <div>
                  <span className="span">
                    <img src={AD} alt="App Development" />
                  </span>{" "}
                  Application Development
                </div>
                <div>
                  <span className="span">
                    <img src={SD} alt="Software Development" />
                  </span>{" "}
                  Software Development
                </div>
                <div>
                  <span className="span">
                    <img src={MoS} alt="Maintenance of Services" />
                  </span>{" "}
                  Maintenance of Services
                </div>
              </NavLink>
            </div>
            <div
              className="mid"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/graphic-designing">
                <Typography variant="h5">Graphic Designing</Typography>
                <div>
                  <span className="span">
                    <img src={LD} alt="Logo Design" />
                  </span>{" "}
                  Logo Design
                </div>
                <div>
                  <span className="span">
                    <img src={OK} alt="Office Kit" />
                  </span>{" "}
                  Office Kit
                </div>
                <div>
                  <span className="span">
                    <img src={PV} alt="Promotional Videos" />
                  </span>{" "}
                  Promotional Videos
                </div>
                <div>
                  <span className="span">
                    <img src={SMM} alt="Social Media Management" />
                  </span>{" "}
                  Social Media Management
                </div>
              </NavLink>
            </div>
            <div
              className="mid"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/digital-marketing">
                <Typography variant="h5">Digital Marketing</Typography>
                <div>
                  <span className="span">
                    <img src={SO} alt="SEO Optimization" />
                  </span>{" "}
                  SEO Optimization
                </div>
                <div>
                  <span className="span">
                    <img src={GA} alt="Google Adwords" />
                  </span>{" "}
                  Google Adwords
                </div>
                <div>
                  <span className="span">
                    <img src={LG} alt="Lead Generation" />
                  </span>{" "}
                  Lead Generation
                </div>
                <div>
                  <span className="span">
                    <img src={LM} alt="LinkedIn Marketing" />
                  </span>{" "}
                  LinkedIn Marketing
                </div>
              </NavLink>
            </div>
            <div>
              <div
                className="mid"
                style={{ height: "50%", marginTop: 0 }}
                onClick={() => {
                  toggleDrawer("top", false);
                }}
              >
                <NavLink to="/UI-UX">
                  <Typography variant="h5">UI/UX Designing</Typography>
                  <div>
                    <span className="span">
                      <img src={FW} alt="For Websites" />
                    </span>{" "}
                    For Websites
                  </div>
                  <div>
                    <span className="span">
                      <img src={FA} alt="For Applications" />
                    </span>{" "}
                    For Applications
                  </div>
                </NavLink>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <div>
                  <Button className="bfs">
                    <NavLink to="/plans">
                      <strong>STARTUP PLANS &rarr;</strong>
                    </NavLink>
                  </Button>
                </div>
                <div>
                  <Button className="bfs">
                    <NavLink to="/bundles">
                      <strong>BUNDLES &rarr;</strong>
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${classes.drawer} main-drawer-div dfa cw`}>
            <div
              className={classes.closeBtn}
              onClick={() => toggleDrawer("top", false)}
            >
              &times;
            </div>
            <Typography
              variant="h5"
              className="main-drawer-item"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/">Home</NavLink>
            </Typography>

            <Typography
              onClick={clickmefkpls}
              variant="h5"
              className="servicesItem main-drawer-item"
              id="servicesItem"
            >
              Services
            </Typography>

            <div
              id="servicesDropdown"
              className="servicesDropdown"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <Typography variant="h6" className="servicesDropdownItem">
                <NavLink to="/IT-services">IT Services</NavLink>
              </Typography>
              <Typography variant="h6" className="servicesDropdownItem">
                <NavLink to="/graphic-designing">Graphic Designing</NavLink>
              </Typography>
              <Typography variant="h6" className="servicesDropdownItem">
                <NavLink to="/digital-marketing">Digital Marketing</NavLink>
              </Typography>
              <Typography variant="h6" className="servicesDropdownItem">
                <NavLink to="/UI-UX">UI/UX</NavLink>
              </Typography>
            </div>
            <Typography
              variant="h5"
              className="main-drawer-item"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/portfolio">Portfolio</NavLink>
            </Typography>
            <Typography
              variant="h5"
              className="main-drawer-item"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/about">About</NavLink>
            </Typography>
            <Typography
              variant="h5"
              className="main-drawer-item"
              onClick={() => {
                toggleDrawer("top", false);
              }}
            >
              <NavLink to="/contact">Contact Us</NavLink>
            </Typography>
            <div>
              <Button
                className="bfs"
                onClick={() => {
                  toggleDrawer("top", false);
                }}
              >
                <NavLink to="/plans">
                  <strong>STARTUP PLANS &rarr;</strong>
                </NavLink>
              </Button>
            </div>
            <div>
              <Button
                className="bfs"
                onClick={() => {
                  toggleDrawer("top", false);
                }}
              >
                <NavLink to="/bundles">
                  <strong>BUNDLES &rarr;</strong>
                </NavLink>
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default Navbar;
