import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CookieBanner from "../src/components/CookieBanner";
import Cookies from "../src/components/Cookies";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import About from "./screens/About";
import Bundles from "./screens/Bundles";
import Contact from "./screens/Contact";
import DigitalMarketing from "./screens/DigitalMarketing";
import GraphicDesigning from "./screens/GraphicDesigning";
import Home from "./screens/Home";
import ItServices from "./screens/ItServices";
import Plans from "./screens/Plans";
import Portfolio from "./screens/Portfolio";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Services from "./screens/Services";
import UIUX from "./screens/UIUX";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      document.cookie = `latitude=${position.coords.latitude}`;
      document.cookie = `longitude=${position.coords.longitude}`;
    });
    if (!document.cookie.includes("uniqueid")) {
      document.cookie = `uniqueid=${uuidv4()}`;
    }
  });
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/digital-marketing" component={DigitalMarketing} />
            <Route path="/IT-services" component={ItServices} />
            <Route path="/graphic-designing" component={GraphicDesigning} />
            <Route path="/UI-UX" component={UIUX} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/plans" component={Plans} />
            <Route path="/bundles" component={Bundles} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/cookies" component={Cookies} />
          </div>
        </div>
        <CookieBanner />
        <Footer />
      </Router>
    </>
  );
}

export default App;
