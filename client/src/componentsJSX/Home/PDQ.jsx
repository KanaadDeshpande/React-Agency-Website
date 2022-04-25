import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { NavLink } from "react-router-dom";

function PDQ(props) {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="d-flex justify-content-between text-left">
          <div className="row">
            <div className="left pane col-lg-7">
              <h1 className="PDQ_heading fw-800 tala cw">{props.content}</h1>

              <br />
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
            <div className="right pane d-flex col-lg-5">
              <img src={props.image} className="PDQ_img" alt="Illustech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDQ;
