import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CB from "../images/svg/CookieBanner.svg";
import "../styles/CookieBanner.css";

function CookieBanner() {
  const [style, setStyle] = useState({
    hide: false,
  });
  function cookieCreate() {
    document.cookie = "CookieBy=Illustech; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
      setStyle({ hide: true });
    } else {
      alert(
        "Cookie can't be set! Please unblock this site from the cookie setting of your browser."
      );
    }
  }
  useEffect(() => {
    let checkCookie = document.cookie.indexOf("CookieBy=Illustech");
    checkCookie !== -1 ? setStyle({ hide: true }) : setStyle({ hide: false });
  }, []);
  return (
    <div
      className="cookie-wrapper taca"
      style={style.hide ? { display: "none" } : null}
    >
      <div className="cookie-content">
        <img src={CB} alt="Cookie Banner" />
        <header className="cw fw-600 fs-24">Cookies</header>
        <p>We use cookies to make your experience better.</p>
        <div className="cookie-buttons">
          <NavLink to="/cookie-policy">
            <button className="cookie-item fs-16 fw-500 cw">Learn more</button>
          </NavLink>
          <button
            className="cookie-itemTwo fs-16 fw-500"
            onClick={cookieCreate}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
