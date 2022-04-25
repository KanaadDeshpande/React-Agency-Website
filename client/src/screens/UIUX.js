import React from "react";
import PDQView from "../components/Services/PDQView";
import Why from "../components/Services/Why";
import UI_UX from "../components/Services/UIUX";
import "../styles/Home/Home.css";
import "../styles/Services/Services.css";
import Image1 from '../images/svg/Services/UIUX/ResponsiveDesign.svg'
import Image2 from '../images/svg/Services/UIUX/HighSpeed.svg'
import Image3 from '../images/svg/Services/UIUX/CatchyCall.svg'
import Image4 from '../images/svg/Services/UIUX/AppealingImagery.svg'
import Image5 from '../images/svg/Services/UIUX/TechnicalSolutions.svg'
import Image6 from '../images/svg/Services/UIUX/ExtensiveTesting.svg'
import Image from "../images/svg/Services/UIUX/UIUX.svg";
import data from '../data/Services/UIUX.json'

function UIUX() {
  const images=[Image1, Image2, Image3, Image4, Image5, Image6]
    return (
      <div>
        <PDQView
          heading={data.PDQ.heading}
          desc={data.PDQ.desc}
          image={Image}
        />
        <Why data={data.Why} images={images}/>
        <UI_UX />
      </div>
    );
  }
  
  export default UIUX;
