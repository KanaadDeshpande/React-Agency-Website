import React from "react";
import PDQView from "../components/About/PDQView";
import WhoWeAre from "../components/About/WhoWeAre";
import GoodToIconic from "../components/About/GoodToIconic";
import WhatWeOffer from "../components/About/WhatWeOffer";
import Team from "../components/About/Team";
import FutureAspirations from "../components/About/FutureAspirations";
import CoreValues from "../components/About/CoreValues";

function About() {
  return (
    <>
      <PDQView />
      <WhoWeAre />
      <GoodToIconic />
      <WhatWeOffer />
      <Team />
      <FutureAspirations />
      <CoreValues />
    </>
  );
}

export default About;
