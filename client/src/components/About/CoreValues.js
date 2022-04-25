import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import BI from "../../images/svg/About/BusinessIntegrity.svg";
import CSR from "../../images/svg/About/CorporateSocialResponsibility.svg";
import CP from "../../images/svg/About/CreatePositivity.svg";
import KAI from "../../images/svg/About/KnowledgeAndInnovation.svg";
import TS from "../../images/svg/About/TeamSpirit.svg";
import Tr from "../../images/svg/About/Transparency.svg";
import "../../styles/About/About.css";
import "../../styles/About/CoreValues.css";

const breakPoints = [
  { width: 600, itemsToShow: 1 },
  { width: 800, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CoreValues() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  const carouselRef = useRef(null);
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
  return width > 1200 ? (
    <div className="padding">
      <h1 className="core-heading fw-700 fs-48 cdb taca">Our Core Values</h1>
      <Box className="dfa" p={1} m={1} marginBottom="0">
        <Box p={1} className="width-eight">
          <img src={CP} alt="Create Positivity" />
        </Box>
        <Box
          p={1}
          className="width-thirty-five"
          style={{ marginRight: "20px" }}
        >
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Create Positivity
          </h1>
          <p className="cvtaj fs-16">
            Illus-Technicians stand with pride. When the going gets tough, and
            the tough gets going, we find a way to overcome it with
            determination and positivity by saying - YES. WE CAN! We work in an
            environment where fun is equally important in the daily routine and
            spread smiles all over with great energy throughout.
          </p>
        </Box>
        <Box p={1} className="width-eight margin-left-seventy-five">
          <img src={TS} alt="Team Spirit" />
        </Box>
        <Box p={1} className="width-thirty-five" flexShrink={1}>
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Team Spirit
          </h1>
          <p className="cvtaj fs-16">
            Team spirit meaning friendship, generosity and fairness in
            collective benefits of the work and willingness to support other
            members even during the most challenging times ever. With teamwork,
            the company members get a sense of accomplishment in search of
            better and greater efficiency.
          </p>
        </Box>
      </Box>
      <Box className="dfa" p={1} m={1} marginBottom="0" marginTop="0">
        <Box p={1} className="width-eight">
          <img src={BI} alt="Business Integrity" />
        </Box>
        <Box
          p={1}
          className="width-thirty-five"
          style={{ marginRight: "20px" }}
        >
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Business Integrity
          </h1>
          <p className="cvtaj fs-16">
            We refuse to opt for any kind of underhanded method to boost the
            business gains or advantages. Illustechicians understand that a lack
            of integrity in business dealings will be penalized and hamper the
            growth of everyone involved. In the end, we believe that goodwill is
            the highest reward.
          </p>
        </Box>
        <Box p={1} className="width-eight margin-left-seventy-five">
          <img src={Tr} alt="Transparency" />
        </Box>
        <Box p={1} className="width-thirty-five" flexShrink={1}>
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Transparency
          </h1>
          <p className="cvtaj fs-16">
            Illustech is an honest workplace where people allow themselves to
            be, and all the information is shared with customers in the most
            transparent way possible. We believe transparency adds value to the
            business by making things accessible to everyone in several ways and
            increasing loyalty.
          </p>
        </Box>
      </Box>
      <Box className="dfa" p={1} m={1} bgcolor="background.paper" marginTop="0">
        <Box p={1} className="width-eight">
          <img src={CSR} alt="Corporate Social Responsibility" />
        </Box>
        <Box
          p={1}
          className="width-thirty-five"
          style={{ marginRight: "20px" }}
        >
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Corporate Social Responsibility
          </h1>
          <p className="cvtaj fs-16">
            Whether we operate and whatever economic situations are responsible
            citizens, we support the communities and respect our work
            environment. Illustech builds the future by living the CSR values
            and delivers excellent outcomes most sustainably.
          </p>
        </Box>
        <Box p={1} className="width-eight margin-left-seventy-five">
          <img src={KAI} alt="Knowledge &amp; Innovation" />
        </Box>
        <Box p={1} className="width-thirty-five" flexShrink={1}>
          <h1
            style={{ marginTop: "0px" }}
            className="core-subheader fw-700 fs-24"
          >
            Knowledge &amp; Innovation
          </h1>
          <p className="cvtaj fs-16">
            Our thought leadership and ongoing learning in web marketing help us
            influence everyone involved positively and effectively. We believe
            in investing in our team’s knowledge and development proactively and
            innovational upgrades for consistent results.
          </p>
        </Box>
      </Box>
      <div className="cv-button dfa aica jcca">
        <Button className="wwa-button-font-color fs-14 fw-700">
          <NavLink to="/contact">
            <strong>GET IN TOUCH WITH US </strong>
            <ArrowRightAltIcon fontSize="default" className="arrow_icon" />
          </NavLink>
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <div className="testimonials_container">
        <div className="contain">
          <h1 className="core-heading fw-700 taca">Our Core Values</h1>
          <div className="carocontainer">
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={3000}
              ref={carouselRef}
              onPrevStart={onPrevStart}
              onNextStart={onNextStart}
              disableArrowsOnEnd={false}
            >
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={CP} alt="Create Positivity" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Create Positivity
                  </h1>
                  <p className="cvtaj fs-16">
                    Illus-Technicians stand with pride. When the going gets
                    tough, and the tough gets going, we find a way to overcome
                    it with determination and positivity by saying - YES. WE
                    CAN! We work in an environment where fun is equally
                    important in the daily routine and spread smiles all over
                    with great energy throughout.
                  </p>
                </Box>
              </Box>
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={TS} alt="Team Spirit" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Team Spirit
                  </h1>
                  <p className="cvtaj fs-16">
                    Team spirit meaning friendship, generosity and fairness in
                    collective benefits of the work and willingness to support
                    other members even during the most challenging times ever.
                    With teamwork, the company members get a sense of
                    accomplishment in search of better and greater efficiency.
                  </p>
                </Box>
              </Box>
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={BI} alt="Business Integrity" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Business Integrity
                  </h1>
                  <p className="cvtaj fs-16">
                    We refuse to opt for any kind of underhanded method to boost
                    the business gains or advantages. Illustechicians understand
                    that a lack of integrity in business dealings will be
                    penalized and hamper the growth of everyone involved. In the
                    end, we believe that goodwill is the highest reward.
                  </p>
                </Box>
              </Box>
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={Tr} alt="Transparency" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Transparency
                  </h1>
                  <p className="cvtaj fs-16">
                    Illustech is an honest workplace where people allow
                    themselves to be, and all the information is shared with
                    customers in the most transparent way possible. We believe
                    transparency adds value to the business by making things
                    accessible to everyone in several ways and increasing
                    loyalty.
                  </p>
                </Box>
              </Box>
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={CSR} alt="Corporate Social Responsibility" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Corporate Social Responsibility
                  </h1>
                  <p className="cvtaj fs-16">
                    Whether we operate and whatever economic situations are
                    responsible citizens, we support the communities and respect
                    our work environment. Illustech builds the future by living
                    the CSR values and delivers excellent outcomes most
                    sustainably.
                  </p>
                </Box>
              </Box>
              <Box
                className="dfa jcca aica taca fdca"
                style={{
                  width: "100%",
                }}
              >
                <Box p={1}>
                  <img src={KAI} alt="Knowledge &amp; Innovation" />
                </Box>
                <Box p={1}>
                  <h1
                    style={{ marginTop: "0px" }}
                    className="core-subheader fw-700 fs-24"
                  >
                    Knowledge &amp; Innovation
                  </h1>
                  <p className="cvtaj fs-16">
                    Our thought leadership and ongoing learning in web marketing
                    help us influence everyone involved positively and
                    effectively. We believe in investing in our team’s knowledge
                    and development proactively and innovational upgrades for
                    consistent results.
                  </p>
                </Box>
              </Box>
            </Carousel>
          </div>
          <div className="cv-button dfa jcca">
            <Button className="wwa-button-font-color fs-14 fw-700">
              <strong>
                GET IN TOUCH WITH US{" "}
                <ArrowRightAltIcon fontSize="default" className="arrow_icon" />
              </strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
