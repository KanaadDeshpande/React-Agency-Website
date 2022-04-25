import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Services/Services.css";

export function PDQView(props) {
  const [width, setWidth] = useState(window.innerWidth);
  let btnContent;

  width > 1023
    ? (btnContent = "Get In Touch With us")
    : (btnContent = "Get In touch");

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="services_pdq_main">
      <div className="row">
        <div className="fdca dfa jcca col-lg-5 col-sm-12">
          <h1 className="fw-800 fs-36 tala cw">{props.heading}</h1>
          <p className="fw-400 fs-24 tala cw">{props.desc}</p>
          <br />
          <NavLink to="/contact" className="services_pdq_nav-link">
            <button
              className="services_contact_btn fw-700 fs-14 dfa jcca aica"
              style={{ background: "#9AC5FE" }}
            >
              {btnContent}
              <ArrowRightAltIcon
                fontSize="default"
                className="services_arrow_icon"
              />
            </button>
          </NavLink>
        </div>
        <div className="services_pdq_image_container dfa jcca col-lg-7 col-sm-12 ">
          <img
            src={props.image}
            alt="Digital Marketing"
            className="services_pdq_image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PDQView;
