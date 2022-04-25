import Avatar from "@material-ui/core/Avatar";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import React from "react";

function Testimony(props) {
  return (
    <div>
      <div className="testimonials dfa jcca">
        <div className="testimony text-justify">
          <div>
            <FormatQuoteIcon
              fontSize="large"
              className="rotateIcon quote_icon"
            />
          </div>
          {props.content}
          <div>
            <FormatQuoteIcon
              fontSize="large"
              className="quote_icon end-quote dfa"
            />
          </div>
          <div className="authorContainer">
            <Avatar alt="Remy Sharp" className="avatar" src={props.img} />
            <p
              className="author"
              dangerouslySetInnerHTML={{ __html: props.author }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
