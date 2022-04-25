import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import Testimony from "../../componentsJSX/Home/Testimony.jsx";
import data from "../../data/Home/Testimonials.json";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Testimonials() {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(data.testimonials.length);
    }
  };
  return (
    <div className="testimonials_container">
      <div className="contain">
        <h1 className="home_title dfa jcca aica taca text-center">
          {data.heading}
        </h1>
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
            {data.testimonials.map((test, index) => {
              return (
                <Testimony
                  content={test.content}
                  author={test.author}
                  img={test.img}
                  key={index}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="dfa jcca">
        <NavLink to="/portfolio" className="tdna">
          <Button className="wwa-button-font-color cw bgcdb fs-14 fw-700">
            <strong>
              View Our Portfolio
              <ArrowRightAltIcon
                fontSize="default"
                className="arrow_icon aica"
              />
            </strong>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Testimonials;
