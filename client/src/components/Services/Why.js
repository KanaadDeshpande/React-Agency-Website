import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 522, itemsToShow: 1 },
  { width: 769, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Why(props) {
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
        <div className="container-why">
          <h1 className="services_why_heading fw-700 my-5">
            {props.data[0].heading}
          </h1>
          <div className="row justify-content-between mb-3">
            {props.data[2].firstRow.map((point, index) => (
              <div className="col-lg-3" key={point.title}>
                <div className="services_why_title dfa">
                  <div className="number dfa jcca">
                    <img src={props.images[index]} alt={point.title} />
                  </div>{" "}
                  <div className="services_point_title dfa">{point.title}</div>
                </div>
                <p className="services_why_description fs-16 fw-400">
                  {point.content}
                </p>
              </div>
            ))}
          </div>
          <div className="row justify-content-between mb-5">
            {props.data[3].secondRow.map((point, index) => (
              <div className="col-lg-3" key={point.title}>
                <h3 className="services_why_title dfa">
                  <span className="number dfa">
                    <img src={props.images[index + 3]} alt={point.title} />
                  </span>{" "}
                  {point.title}
                </h3>
                <p className="services_why_description fs-16 fw-400">
                  {point.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="testimonials_container">
        <div className="contain">
          <h1 className="services_why_heading fw-700">
            {props.data[0].heading}
          </h1>
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
              {props.data[1].total.map((point, index) => (
                <div key={point.title}>
                  <img
                    src={props.images[index]}
                    alt="client satisfaction"
                    className="services_service_icons dfa jcca"
                  ></img>
                  <h3 className="services_why_title dfa">{point.title}</h3>
                  <p className="services_service_carousel_description">
                    {point.content}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
