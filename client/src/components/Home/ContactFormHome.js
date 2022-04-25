import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ContactFormImage from "../../images/svg/Home/ContactFormHome/ContactFormHome.svg";

function ContactFormHome() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    <div className="contact_form_main">
      <div className="home_contact_form_inner_div">
        <h1 className="home_title dfa jcca aica taca">Get In Touch</h1>
        <div className="row form-container">
          <div className="col-lg-5 contact_form_svg_container order-md-2 order-2">
            <img
              src={ContactFormImage}
              alt=""
              className="contact-form-svg"
            ></img>
          </div>
          <div className="col-lg-6 form-side order-1 order-md-1">
            <form onSubmit={handleSubmit}>
              <p className="contact_form_question">
                What services do you need?
              </p>
              <div className="row checkbox_container">
                <FormControlLabel
                  control={<Checkbox name="checkedA" color="primary" />}
                  label="IT Services"
                  className="contact_form_checkbox"
                  onChange={() => {
                    if (services.includes("IT Services")) {
                      setServices(services.filter((i) => i !== "IT Services"));
                    } else {
                      setServices((s) => [...s, "IT Services"]);
                    }
                  }}
                />
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Digital Marketing"
                  className="contact_form_checkbox"
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
                <FormControlLabel
                  control={<Checkbox name="checkedC" color="primary" />}
                  label="Graphic Designing"
                  className="contact_form_checkbox"
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
                  control={<Checkbox name="checkedD" color="primary" />}
                  label="UI/UX Designing"
                  className="contact_form_checkbox"
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

              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <Form.Group controlId="Name">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <Form.Group controlId="Phone Number">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <Form.Group controlId="Email">
                    <Form.Label className="form-label">Email ID</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-sm-12 text-area-container">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12 justify-content-end">
                  <button className="dark_button submit_button" type="submit">
                    Send Message{" "}
                    <ArrowRightAltIcon
                      fontSize="default"
                      className="arrow_icon"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormHome;
