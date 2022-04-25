import React from "react";
import Clients from "../components/Home/Clients";
import ContactFormHome from "../components/Home/ContactFormHome";
import HomePDQ from "../components/Home/HomePDQ";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import WhoWeAre from "../components/Home/WhoWeAre";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import "../styles/Home/Home.css";

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HomePDQ />
      <Clients />
      <Services />
      <WhyChooseUs />
      <WhoWeAre />
      <Testimonials />
      <ContactFormHome />
    </div>
  );
}

export default Home;
