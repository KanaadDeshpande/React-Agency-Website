import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data/CookiePolicy/CookiePolicy.json";

function Cookies() {
  return (
    <div className="bgcdb cw">
      <h1 className="cookie-title taca fs-48" style={{ fontWeight: "bold" }}>
        Cookies
      </h1>
      <br />
      <div className="container">
        {data.data.map((element) => {
          return (
            <div key={element.firstQuestion}>
              <h3>{element.firstQuestion}</h3>
              <p>{element.firstAnswerPartOne}</p>
              <p>{element.firstAnswerPartTwo}</p>
              <p>
                <strong>{element.firstAnswerPartThreeTitle}</strong>
                {element.firstAnswerPartThree}
              </p>
              <p>
                <strong>{element.firstAnswerPartFourTitle}</strong>
                {element.firstAnswerPartFour}
              </p>
              <br />
              <h3>{element.secondQuestion}</h3>
              <p>{element.secondAnswer}</p>
              <br />
              <h3>{element.thirdQuestion}</h3>
              <ul>
                <li>{element.thirdAnswerPointOne}</li>
                <li>{element.thirdAnswerPointTwo}</li>
                <li>{element.thirdAnswerPointThree}</li>
                <li>{element.thirdAnswerPointFour}</li>
              </ul>
              <br />
              <h3>{element.fourthQuestion}</h3>
              <p>{element.fourthAnswerPartOne}</p>
              <p>
                {element.fourthAnswerPartTwo}
                <NavLink to="/contact">
                  {element.fourthAnswerPartTwoLink}
                </NavLink>
              </p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cookies;
