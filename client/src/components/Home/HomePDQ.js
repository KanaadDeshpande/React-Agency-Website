import React from "react";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import PDQ from "../../componentsJSX/Home/PDQ";
import data from "../../data/Home/HomePDQ.json";
import CreateImage from "../../images/svg/Home/PDQ/CreatePDQ.svg";
import Image from "../../images/svg/Home/PDQ/PDQ.svg";
import RoiImage from "../../images/svg/Home/PDQ/RoiPDQ.svg";
import SmartMirrorImage from "../../images/svg/Home/PDQ/SmartMirror.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  { width: 800, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

function HomePDQ() {
  const carouselRef = React.useRef(null);
  const images = [CreateImage, Image, SmartMirrorImage, RoiImage];
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(data.slides.length);
    }
  };

  return (
    <div className="HomePDQ_main width-100 ">
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={false}
        autoPlaySpeed={5000}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        showArrows={false}
        pagination={true}
        transitionMs={1500}
      >
        {data.slides.map((slide, index) => (
          <div className="each-slide" key={uuidv4()}>
            <div>
              <PDQ
                content={slide.content}
                image={images[index]}
                link={slide.link}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePDQ;
