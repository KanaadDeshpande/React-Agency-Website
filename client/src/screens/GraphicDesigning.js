import React from "react";
import PDQView from "../components/Services/PDQView";
import Why from "../components/Services/Why";
import GD from "../components/Services/GraphicDesigning";
import "../styles/Home/Home.css";
import "../styles/Services/Services.css";
import Image from "../images/svg/Services/GraphicDesigning/GraphicDesigning.svg";
import Image1 from "../images/svg/Services/GraphicDesigning/KillsCompetition.svg";
import Image2 from "../images/svg/Services/GraphicDesigning/FirstImpressions.svg";
import Image3 from "../images/svg/Services/GraphicDesigning/RightMessage.svg";
import Image4 from "../images/svg/Services/GraphicDesigning/EaseNavigation.svg";
import Image5 from "../images/svg/Services/GraphicDesigning/BrandImage.svg";
import Image6 from "../images/svg/Services/GraphicDesigning/EffectiveCommunication.svg";
import data from '../data/Services/GraphicDesigning.json'

function GraphicDesigning() {
  const images=[Image1, Image2, Image3, Image4, Image5, Image6]
    return (
      <div>
        <PDQView
          heading={data.PDQ.heading}
          desc={data.PDQ.desc}
          image={Image}
        />
        <Why data={data.Why} images={images}/>
        <GD />
      </div>
    );
  }
  
  export default GraphicDesigning;
