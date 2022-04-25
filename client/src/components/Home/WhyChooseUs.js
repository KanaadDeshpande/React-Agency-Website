import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import AffordablePricingImage from "../../images/svg/Home/WhyChooseUs/AffordablePricing.svg";
import ClientSatisfactionImage from "../../images/svg/Home/WhyChooseUs/ClientSatisfaction.svg";
import DedicatedProjectManagerImage from "../../images/svg/Home/WhyChooseUs/DedicatedProjectManager.svg";
import OmnichannelPersonalisationImage from "../../images/svg/Home/WhyChooseUs/OmnichannelPersonalisation.svg";
import PerformanceTrackingImage from "../../images/svg/Home/WhyChooseUs/PerformanceTracking.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function WhyChooseUs() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(5);
    }
  };

  if (width > 786) {
    return (
      <div>
        <h1 className="home_title dfa jcca aica taca my-5">Why Choose Us</h1>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-3 text-center mx-3">
              <img
                src={ClientSatisfactionImage}
                alt="client satisfaction"
                className="WCU_icons"
              ></img>
              <h3 className="WCU_title">Client Satisfaction</h3>
              <p>
                Yes, you heard it right! Customer satisfaction is and always
                will be our priority. With our crystal clear view and vision, we
                work hard to achieve the marketing goals.
              </p>
            </div>
            <div className="col-lg-3 text-center mx-5">
              <img
                src={AffordablePricingImage}
                alt="affordable pricing"
                className="WCU_icons"
              ></img>
              <h3 className="WCU_title">Affordable Pricing</h3>
              <p>
                We are a customer-centric digital marketing company that can
                help you acquire the online attention you need without breaking
                the bank. We also provide white label services that offer huge
                ROI for your SEO agency.
              </p>
            </div>
            <div className="col-lg-3 text-center mx-3">
              <img
                src={OmnichannelPersonalisationImage}
                alt="Omnichannel Personalisation"
                className="WCU_icons"
              ></img>
              <h3 className="WCU_title">Omnichannel Personalization</h3>
              <p>
                Around 70% of consumers require personalized brand experiences.
                Thus, we strive to develop customized internet marketing
                strategies and omnichannel personalization to boost brand
                loyalty.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 text-center mx-5">
              <img
                src={DedicatedProjectManagerImage}
                alt="Dedicated Project Manager"
                className="WCU_icons"
              ></img>
              <h3 className="WCU_title">Dedicated Project Manager</h3>
              <p>
                Illustechnicians understand the importance of a personal touch.
                That is why we provide a dedicated accounts manager to better
                coordinate and understand the business needs.
              </p>
            </div>
            <div className="col-lg-3 text-center mx-5">
              <img
                src={PerformanceTrackingImage}
                alt="Performance Tracking"
                className="WCU_icons"
              ></img>
              <h3 className="WCU_title">Performance Tracking</h3>
              <p>
                It is crucial to know if the planned strategies are working for
                your firm. We track the performance activities regularly- daily,
                weekly and monthly to determine strategies’ success
              </p>
            </div>
          </div>
        </div>
        <div className="dfa jcca aica">
          <NavLink to="/portfolio" className="tdna">
            <Button className="wwa-button-font-color fs-14 fw-700 cw bgcdb">
              <strong>
                Learn More{" "}
                <ArrowRightAltIcon fontSize="default" className="arrow_icon" />
              </strong>
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="testimonials_container">
        <div className="contain">
          <h1 className="home_title dfa jcca aica taca">Why Choose Us</h1>
          <div className="carocontainer">
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={5000}
              ref={carouselRef}
              onPrevStart={onPrevStart}
              onNextStart={onNextStart}
              disableArrowsOnEnd={false}
              transitionMs={1000}
            >
              <div className="taca aica">
                <img
                  src={ClientSatisfactionImage}
                  alt="client satisfaction"
                  className="WCU_icons"
                ></img>
                <h3 className="WCU_title">Client Satisfaction</h3>
                <p className="WCU_description">
                  Yes, you heard it right! Customer satisfaction is and always
                  will be our priority. With our crystal clear view and vision,
                  we work hard to achieve the marketing goals.
                </p>
              </div>
              <div className="taca aica">
                <img
                  src={AffordablePricingImage}
                  alt="affordable pricing"
                  className="WCU_icons"
                ></img>
                <h3 className="WCU_title">Affordable Pricing</h3>
                <p className="WCU_description">
                  We are a customer-centric digital marketing company that can
                  help you acquire the online attention you need without
                  breaking the bank. We also provide white label services that
                  offer huge ROI for your SEO agency.
                </p>
              </div>
              <div className="taca aica">
                <img
                  src={DedicatedProjectManagerImage}
                  alt="dedicated project manager"
                  className="WCU_icons"
                ></img>
                <h3 className="WCU_title">Dedicated Project Manager</h3>
                <p className="WCU_description">
                  Illustechnicians understand the importance of a personal
                  touch. That is why we provide a dedicated accounts manager to
                  better coordinate and understand the business needs.
                </p>
              </div>
              <div className="taca aica">
                <img
                  src={OmnichannelPersonalisationImage}
                  alt="Omnichannel Personalisation"
                  className="WCU_icons"
                ></img>
                <h3 className="WCU_title">Omnichannel Personalization</h3>
                <p className="WCU_description">
                  Around 70% of consumers require personalized brand
                  experiences. Thus, we strive to develop customized internet
                  marketing strategies and omnichannel personalization to boost
                  brand loyalty.
                </p>
              </div>
              <div className="taca aica">
                <img
                  src={PerformanceTrackingImage}
                  alt="Performance Tracking"
                  className="WCU_icons"
                ></img>
                <h3 className="WCU_title">Performance Tracking</h3>
                <p className="WCU_description">
                  It is crucial to know if the planned strategies are working
                  for your firm. We track the performance activities regularly-
                  daily, weekly and monthly to determine strategies’ success
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="dfa jcca">
          <NavLink to="/about" className="tdna">
            <Button className={"wwa-button-font-color fs-14 fw-700 cw bgcdb"}>
              <strong>
                Learn More{" "}
                <ArrowRightAltIcon fontSize="default" className="arrow_icon" />
              </strong>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
