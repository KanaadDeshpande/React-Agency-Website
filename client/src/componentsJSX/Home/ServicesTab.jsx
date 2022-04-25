import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";

function ServicesTab(props) {
  return (
    <div>
      <div>
        <div className="service-tab">
          <div className="d-flex justify-content-between text-left">
            <div className="row">
              <div className="left col-lg-6">
                <h1 className="Tab_heading cw fs-28">{props.tabHeading}</h1>
                <br></br>
                <p className="description cw fs-20">{props.description}</p>
                <br />
                <ul className="unordered-list">
                  {props.points.map((point, index) => (
                    <li className="cw" key={point.subheading}>
                      <div className="list-container">
                        <img
                          src={props.icons[index]}
                          alt="SEO"
                          className="sub-icon"
                        />
                        <p className="subheading fw-400 tala">
                          <span className="main-heading tala">
                            {point.subheading}
                          </span>
                          <br />
                          <span className="subheading fw-400 tala">
                            {point.content}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <br />
                <div>
                  <Button className="bfs-main bgclb">
                    <NavLink to={props.link}>
                      <strong className="cdb">
                        LEARN MORE{" "}
                        <ArrowRightAltIcon
                          fontSize="default"
                          className="arrow_icon aica"
                        />
                      </strong>
                    </NavLink>
                  </Button>
                </div>
              </div>
              <div className="right d-flex">
                <img
                  src={props.mainsvg}
                  className="services_svg"
                  alt="Illustech"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesTab;
