import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/Services/GraphicDesigning.json";
import LogoDesignImage from "../../images/svg/Services/GraphicDesigning/LogoDesign.svg";
import OfficeKitImage from "../../images/svg/Services/GraphicDesigning/OfficeKit.svg";
import PromoVideosImage from "../../images/svg/Services/GraphicDesigning/PromoVideos.svg";
import SocialMediaImage from "../../images/svg/Services/GraphicDesigning/SocialMedia.svg";

function GraphicDesigning() {
  return (
    <div>
      <div className="row services_service dfa jcca aica services_first bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={LogoDesignImage}
            alt="Logo Design"
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontaine cw">
          <h1 className="services_service_heading fw-700">
            {data.LogoDesign.heading}
          </h1>
          <br />
          <p>{data.LogoDesign.para1}</p>
          <p>{data.LogoDesign.para2}</p>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb tala btn-font fs-14 fw-500">
              Contact Us
              <ArrowRightAltIcon fontSize="default" />
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="row services_service dfa jcca aica">
          <div className="col-lg-6 tala order-2 order-md-1">
            <h1 className="services_service_heading fw-700">
              {data.OfficeKits.heading}
            </h1>
            <br />
            <p>{data.OfficeKits.para1}</p>
            <ul>
              {data.OfficeKits.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <p>{data.OfficeKits.para2}</p>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue tala btn-font fs-14 fw-500">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image "
              src={OfficeKitImage}
              alt="Office Kit"
            />
          </div>
        </div>
      </div>
      <div className="row services_service dfa jcca aica services_third bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={PromoVideosImage}
            alt="Promotional Videos"
          />
        </div>
        <div className="col-lg-6 tala cw">
          <h1 className="services_service_heading fw-700">
            {data.PromoVideos.heading}
          </h1>
          <br />
          <p>{data.PromoVideos.para1}</p>
          <p>{data.PromoVideos.para2}</p>

          <ul>
            {data.PromoVideos.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
          <p>{data.PromoVideos.para3}</p>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb tala btn-font fs-14 fw-500">
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
            <p>{data.SMM.para1}</p>
            <p>{data.SMM.para2}</p>
            <ul>
              {data.SMM.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <p>{data.SMM.para3}</p>
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
              alt="Social Media Management"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicDesigning;
