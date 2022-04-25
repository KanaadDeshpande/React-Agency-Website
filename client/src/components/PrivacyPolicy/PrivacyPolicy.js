import React from "react";
import data from "../../data/PrivacyPolicy/PrivacyPolicy.json";

function PrivacyPolicy() {
  return (
    <div className="bgcdb cw">
      <h1 className="home_title dfa jcca aica taca">Privacy Policy</h1>
      <br />
      <div className="container">
        {data.data.map((element) => {
          return (
            <div key={element.title}>
              <h3 className="pp_title fw-400 tala">{element.title}</h3>
              {element.description && (
                <>
                  <p className="pp_description tala">{element.description}</p>
                </>
              )}
              {element.points && (
                <ul>
                  {element.points.map((point) => (
                    <li className="pp_list_item">{point}</li>
                  ))}
                </ul>
              )}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
