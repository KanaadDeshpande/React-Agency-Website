import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/Services/DigitalMarketing.json";
import GoogleAdwordsImage from "../../images/svg/Services/DigitalMarketing/GoogleAdwords.svg";
import LeadGenerationImage from "../../images/svg/Services/DigitalMarketing/LeadGeneration.svg";
import LinkedinMarketingImage from "../../images/svg/Services/DigitalMarketing/LinkedinMarketing.svg";
import SeoImage from "../../images/svg/Services/DigitalMarketing/SeoOptmisation.svg";

function DigitalMarketing() {
  return (
    <div>
      <div className="row services_service dfa jcca aica services_first bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={SeoImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">
            {data.SEO.heading}
          </h1>
          <br />
          <p>{data.SEO.para1}</p>
          <p>{data.SEO.para2}</p>
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
              {data.GoogleAdwords.heading}
            </h1>
            <br />
            <p>{data.GoogleAdwords.para1}</p>
            <p>{data.GoogleAdwords.para2}</p>
            <ul>
              {data.GoogleAdwords.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn  dfa jcca aica services_contact_btn_dark_blue tala btn-font fs-14 fw-500">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image"
              src={GoogleAdwordsImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row services_service dfa jcca aica services_third bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="col-lg-11 services_service_image "
            src={LeadGenerationImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">
            {data.LeadGen.heading}
          </h1>
          <br />
          <p>{data.LeadGen.para1}</p>
          <p>{data.LeadGen.para2}</p>
          <p>{data.LeadGen.para3}</p>
          <ul>
            {data.LeadGen.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
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
              {data.LinkedInMarketing.heading}
            </h1>
            <br />
            <p>{data.LinkedInMarketing.para1}</p>
            <p>{data.LinkedInMarketing.para2}</p>
            <p>{data.LinkedInMarketing.para3}</p>
            <ul>
              {data.LinkedInMarketing.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue ">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="col-lg-11 services_service_image "
              src={LinkedinMarketingImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
