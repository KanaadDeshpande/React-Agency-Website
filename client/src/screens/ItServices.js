import React from "react";
import PDQView from "../components/Services/PDQView";
import Why from "../components/Services/Why";
import IT from "../components/Services/ItServices";
import "../styles/Home/Home.css";
import "../styles/Services/Services.css";
import Image from "../images/svg/Services/ItServices/ItServices.svg";
import Image1 from '../images/svg/Services/ItServices/SecuredInfo.svg'
import Image2 from '../images/svg/Services/ItServices/EffectiveData.svg'
import Image3 from '../images/svg/Services/ItServices/CustomerSupport.svg'
import Image4 from '../images/svg/Services/ItServices/NoComplexities.svg'
import Image5 from '../images/svg/Services/ItServices/MarketOptimisation.svg'
import Image6 from '../images/svg/Services/ItServices/ComprehensiveMonitoring.svg'
import data from '../data/Services/ItServices.json'

function ItServices() {
  const images=[Image1, Image2, Image3, Image4, Image5, Image6]
    return (
      <div>
        <PDQView
          heading={data.PDQ.heading}
          desc={data.PDQ.desc}
          image={Image}
        />
        <Why data={data.Why} images={images}/>
        <IT />
      </div>
    );
  }
  
  export default ItServices;
