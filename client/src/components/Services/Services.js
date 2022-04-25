import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAdwordsImage from "../../images/svg/Services/DigitalMarketing/GoogleAdwords.svg";
import LeadGenerationImage from "../../images/svg/Services/DigitalMarketing/LeadGeneration.svg";
import LinkedinMarketingImage from "../../images/svg/Services/DigitalMarketing/LinkedinMarketing.svg";
import SeoImage from "../../images/svg/Services/DigitalMarketing/SeoOptmisation.svg";

function Services() {
  return (
    <div>
      <div className="row services_service dfa jcca aica services_first bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img className="services_service_image " src={SeoImage} alt="" />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">SEO Optimization</h1>
          <br />
          <p>
            Illustech the best SEO services in India that help brands gain
            online visibility and maximizes ROI for your business growth. If you
            are missing out on the opportunities of having effective SEO
            strategies to increase your revenues, you can rely on us anytime for
            a customized solution as per business needs. Our custom SEO campaign
            targets on-page and off-page SEO including keyword research helping
            audience navigate you easily online.
          </p>
          <p>
            We are a top internet marketing company which focuses on delivering
            consistent SEO results.
          </p>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb">
              Contact Us
              <ArrowRightAltIcon fontSize="default" />
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="row services_service dfa jcca aica">
          <div className="col-lg-6 services_service_content_container order-2 order-md-1">
            <h1 className="services_service_heading fw-700">Google Adwords</h1>
            <br />
            <p>
              At Illustech, we manage your Google Ads account, targeting the
              relevant keywords driving buyers to your website. Our experts will
              develop effective paid search campaigns meeting your business
              goals with powerful tracking tools. Our goal is to create
              sustainable, creative and fruitful digital campaigns.
            </p>
            <p>Our various Services include:</p>
            <ul>
              <li>Keyword research and usage</li>
              <li>Competitive Analysis</li>
              <li>Video and image Ads creation</li>
              <li>Optimizing the landing pages</li>
              <li>PPC cost management</li>
              <li>PPC Monitoring</li>
              <li>Ad campaign modification and improvements</li>
              <li>Conversion tracking</li>
              <li>Monthly performance report</li>
            </ul>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="services_service_image "
              src={GoogleAdwordsImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row services_service dfa jcca aica services_third bgcdb">
        <div className="col-lg-6 services_service_image_container dfa jcca aica">
          <img
            className="services_service_image "
            src={LeadGenerationImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 services_service_content_bgcontainer fs-16 fw-400 tala cw">
          <h1 className="services_service_heading fw-700">Lead Generation</h1>
          <p>
            At illustech, our professionals take comprehensive efforts and
            strategies helping in better decision making to attract more leads.
          </p>
          <p>
            There are potential prospects who are likely to enquire from you.
            With proper digital marketing methods such as paid ads, social
            media, and content marketing, our experts will draw their interest
            and bring them directly to your business.
          </p>
          <p>Wondering how our lead generation services work?</p>
          <ul>
            <li>Audit & setting objectives</li>
            <li>Identify key decision makers</li>
            <li>Campaign implementation </li>
            <li>Results monitoring</li>
            <li>Reporting of campaign</li>
            <li>Strategy review from feedbacks</li>
          </ul>
          <br />
          <NavLink to="/contact">
            <button className="services_service_contact_btn dfa jcca aica services_contact_btn_light_blue cdb bgclb">
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
              LinkedIn Marketing
            </h1>
            <p>
              We offer LinkedIn Paid Advertising and the power of 500+ million
              active business users for your organization. Our team of LinkedIn
              Advertising specialists will be happy to assist you setup your
              account and manage your LinkedIn advertising campaigns especially
              for the B2B market.
            </p>
            <p>
              At illustech, we use advanced targeting methods and the powerful
              tools provided by LinkedIn to impact your lead generation efforts.
            </p>
            <p>Our linkedin marketing services include :</p>
            <ul>
              <li>Linkedin Ads audits</li>
              <li>Linkedin Ads Strategies</li>
              <li>Linkedin Ad Management</li>
              <li>Linkedin Retargeting</li>
              <li>Linkedin Ads audience</li>
            </ul>
            <br />
            <NavLink to="/contact">
              <button className="services_service_contact_btn dfa jcca aica services_contact_btn_dark_blue">
                Contact Us
                <ArrowRightAltIcon fontSize="default" />
              </button>
            </NavLink>
          </div>
          <div className="col-lg-6 order-1 order-md-2 services_service_image_container dfa jcca aica">
            <img
              className="services_service_image "
              src={LinkedinMarketingImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
