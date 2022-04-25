import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/Services/UIUX.json";
import AppDesignImage from "../../images/svg/Services/UIUX/AppDesign.svg";
import WebDesignImage from "../../images/svg/Services/UIUX/WebDesign.svg";

function UIUX() {
  return (
    <div>
      <div className="row services_service dfa jcca aica services_first bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={WebDesignImage}
            alt="Website Design"
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala">
          <h1 className="services_service_heading fw-700 cw">
            {data.WebDesign.heading}
          </h1>
          <br />
          <p className="cw">{data.WebDesign.para1}</p>
          <ul>
            {data.WebDesign.points.map((point) => (
              <li className="cw">{point}</li>
            ))}
          </ul>
          <p className="cw">{data.WebDesign.para2}</p>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb tala btn-font fs-500">
              Contact Us
              <ArrowRightAltIcon fontSize="default" />
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="row services_service dfa jcca aica">
          <div className="col-lg-6 services_service_content_container order-2 order-md-1">
            <h1 className="services_service_heading fw-700">
              {data.AppDesign.heading}
            </h1>
            <br />
            <p>{data.AppDesign.para1}</p>
            <p>{data.AppDesign.para2}</p>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue tala btn-font">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image "
              src={AppDesignImage}
              alt="Application Design"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIUX;
