import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useState } from "react";
import CI from "../../../src/images/svg/Contact/CallIcon.svg";
import Divider from "../../../src/images/svg/Contact/Divider.svg";
import LAI from "../../../src/images/svg/Contact/LargeArrowIcon.svg";
import LI from "../../../src/images/svg/Contact/LocationIcon.svg";
import MI from "../../../src/images/svg/Contact/MailIcon.svg";
import "../../../src/styles/Contact.css";

const CustomColorCheckbox = withStyles({
  root: {
    color: "#fff",
    "&$checked": {
      color: "#fff",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function ContactComponent() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      `csrftoken=${document.cookie.split(";")[3].substr(11)}`
    );
    var raw = JSON.stringify({
      name,
      phone,
      company,
      email,
      message,
      services: services.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setServices("");
    fetch("http://localhost:8000/api/contact/", requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="contact-main-container bgcdb">
      <h1 className="contact-heading taca cw" style={{ marginBottom: "50px" }}>
        Get In Touch
      </h1>
      <form className="contact-form dfa" onSubmit={handleSubmit}>
        <div style={{ width: "60%" }} className="variable-width">
          <div className="d-flex form-main justify-content-between contact-form-padding flex-wrap">
            <div className="contact-form-form-inner-inner-div my-2 w-c">
              <label className="cw label-width contact-form-padding">
                Name <br />
                <input
                  type="text"
                  className="contact-form-input-size"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="cw label-width">
                Email <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="contact-form-form-inner-inner-div my-2 w-c">
              <label className="cw label-width contact-form-padding">
                Company <br />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
              <label className="cw label-width">
                Phone Number <br />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <span className="cw dfa contact-form-padding-checkbox">
              What services do you need?
            </span>
            <div className="dfa checkboxes flex-wrap">
              <div className="w-50">
                <FormControlLabel
                  control={<CustomColorCheckbox name="checkedA" />}
                  label="IT Services"
                  className="contact-form-checkbox cw w-c"
                  checked={services.includes("IT Services")}
                  onChange={() => {
                    if (services.includes("IT Services")) {
                      setServices(services.filter((i) => i !== "IT Services"));
                    } else {
                      setServices((s) => [...s, "IT Services"]);
                    }
                  }}
                />
                <FormControlLabel
                  control={<CustomColorCheckbox name="checkedB" />}
                  label="Digital Marketing"
                  className="contact-form-checkbox cw w-c"
                  checked={services.includes("Digital Marketing")}
                  onChange={() => {
                    if (services.includes("Digital Marketing")) {
                      setServices(
                        services.filter((i) => i !== "Digital Marketing")
                      );
                    } else {
                      setServices((s) => [...s, "Digital Marketing"]);
                    }
                  }}
                />
              </div>
              <div className="w-50">
                <FormControlLabel
                  control={<CustomColorCheckbox name="checkedC" />}
                  label="Graphic Designing"
                  checked={services.includes("Graphic Designing")}
                  className="contact-form-checkbox cw w-c"
                  onChange={() => {
                    if (services.includes("Graphic Designing")) {
                      setServices(
                        services.filter((i) => i !== "Graphic Designing")
                      );
                    } else {
                      setServices((s) => [...s, "Graphic Designing"]);
                    }
                  }}
                />
                <FormControlLabel
                  control={<CustomColorCheckbox name="checkedD" />}
                  label="UI/UX Designing"
                  checked={services.includes("UI/UX Designing")}
                  className="contact-form-checkbox cw w-c"
                  onChange={() => {
                    if (services.includes("UI/UX Designing")) {
                      setServices(
                        services.filter((i) => i !== "UI/UX Designing")
                      );
                    } else {
                      setServices((s) => [...s, "UI/UX Designing"]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }} className="contact-form-message">
            <div>
              <label className="cw label-width">
                Message
                <br />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
            </div>
            <br />
            <button className="light-button dfa jcca aica">
              Send Message
              <ArrowRightAltIcon fontSize="default" className="arrow_icon" />
            </button>
          </div>
        </div>
        <div className="contact-form-divider-padding dfa jcca aica">
          <img src={Divider} alt="Divider" />
        </div>
        <div
          style={{
            width: "30%",
            padding: 10,
            color: "#fff",
            textOverflow: "ellipsis",
          }}
          className="telegram-box"
        >
          <div style={{ minWidth: "50%" }}>
            <div className="contact-information d-flex">
              <img src={CI} alt="Contact Number" />
              <span className="cw contact-information-padding">
                +91 7020771770
              </span>
            </div>
            <div className="contact-information d-flex">
              <img src={MI} alt="Our Email" />
              <span className="cw contact-information-padding">
                info@illustech.in
              </span>
            </div>
            <div className="contact-information d-flex">
              <img src={LI} alt="We are from Nagpur" />
              <span className="cw contact-information-padding">
                Nagpur, India
              </span>
            </div>
          </div>
          <img
            src={LAI}
            className="p-4 telegram-image"
            alt="Large Arrow Icon"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactComponent;
