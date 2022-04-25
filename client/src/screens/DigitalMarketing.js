import React from "react";
import PDQView from "../components/Services/PDQView";
import Why from "../components/Services/Why";
import DM from "../components/Services/DigitalMarketing";
import "../styles/Home/Home.css";
import "../styles/Services/Services.css";
import Image from "../images/svg/Services/DigitalMarketing/DigitalMarketing.svg";
import Image1 from "../images/svg/Services/DigitalMarketing/MaximumRoi.svg";
import Image2 from "../images/svg/Services/DigitalMarketing/TargetedMarketing.svg";
import Image3 from "../images/svg/Services/DigitalMarketing/QuantifySuccess.svg";
import Image4 from "../images/svg/Services/DigitalMarketing/RevenueBoost.svg";
import Image5 from "../images/svg/Services/DigitalMarketing/MeasurableResults.svg";
import Image6 from "../images/svg/Services/DigitalMarketing/CustomerEngagement.svg";
import data from "../data/Services/DigitalMarketing.json";

function DigitalMarketing() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  return (
    <div>
      <PDQView heading={data.PDQ.heading} desc={data.PDQ.desc} image={Image} />
      <Why data={data.Why} images={images} />
      <DM />
    </div>
  );
}

export default DigitalMarketing;
