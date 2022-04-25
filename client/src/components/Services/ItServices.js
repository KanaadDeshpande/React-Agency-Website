import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/Services/ItServices.json";
import AppDevImage from "../../images/svg/Services/ItServices/AppDev.svg";
import SocialMediaImage from "../../images/svg/Services/ItServices/SocialMedia.svg";
import SoftwareDevImage from "../../images/svg/Services/ItServices/SoftwareDev.svg";
import WebDevImage from "../../images/svg/Services/ItServices/WebDev.svg";

function ItServices() {
  return (
    <div className="it_services">
      <div className="row services_service dfa jcca aica services_first bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={WebDevImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">
            {data.WebDev.heading}
          </h1>
          <br />
          <p>{data.WebDev.para1}</p>
          <p>{data.WebDev.para2}</p>
          <p>{data.WebDev.para3}</p>

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
              {data.AppDev.heading}
            </h1>
            <br />
            <p>{data.AppDev.para1}</p>
            <p>{data.AppDev.para2}</p>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue tala btn-font fs-500">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image "
              src={AppDevImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row services_service dfa jcca aica services_third bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={SoftwareDevImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">
            {data.SoftwareDev.heading}
          </h1>
          <br />
          <p>{data.SoftwareDev.para1}</p>
          <p>{data.SoftwareDev.para2}</p>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb btn_font">
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
              {data.SMM.heading}
            </h1>
            <br />
            <p>{data.SMM.para}</p>
            <ul>
              {data.SMM.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue tala btn-font fs-500">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image "
              src={SocialMediaImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItServices;
