import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import gti from "../../images/svg/About/GoodToIconic.svg";
import "../../styles/About/About.css";
import "../../styles/About/GoodToIconic.css";

function GoodToIconic() {
  return (
    <div className="gti-main-container bgcdb">
      <h1 className="gti-heading fw-700 cw">
        What Turns A ‘GOOD’ Brand Into ‘ICONIC’ Brand
      </h1>
      <div>
        <Box className="gti-box">
          <h1 className="gti-heading-responsive cdb fw-700 gti-heading">
            What Turns A ‘GOOD’ Brand Into ‘ICONIC’ Brand
          </h1>
          <Box
            p={1}
            className="gti-description fs-16 fw-500 taja cw dfa"
            flexDirection="column"
          >
            <p className="gti-p">
              We believe that Good brands are built on benefits, and Iconic
              brands are always built on a purpose. Our digital solutions are
              communicated with a purpose-driven attitude that can define the
              below questions :
            </p>
            <List className="gti-p">
              <ListItem>- What to communicate ? (Right Message)</ListItem>
              <ListItem>
                - Who are we communicating to ? (Target Audience)
              </ListItem>
              <ListItem>- Why are we communicating ? (Purpose)</ListItem>
            </List>
            <p className="gti-p">
              Whether it’s a competitive market or with all the hustle-bustle
              ideas in your head, Illustech makes the startups from rags to
              riches with a purpose and seamless efforts that are always vital
              with any kind of business. We uphold a decent connection with our
              valuable clients where we take responsibility for our offerings
              while standing out in the crowd as a unique agency. Our new
              journey has been a great mentor that helped us grow better and
              reach greater heights faster. Discover web analytics, Online
              Marketing Mix, Digital Marketing, Facebook Pixel, Marketing
              Channels and SEO. All your digital marketing essentials are
              incorporated based on insight-driven strategies, and our team
              caters to you the desired move to improve the overall business
              profitable returns.
            </p>
            <div className="gti-button">
              <Button className="fs-14 fw-700 cdb bfs-main cw bgclb">
                <strong>
                  GET IN TOUCH WITH US{" "}
                  <ArrowRightAltIcon
                    fontSize="default"
                    className="arrow_icon"
                  />
                </strong>
              </Button>
            </div>
          </Box>
          <div className="gti-img">
            <img
              src={gti}
              alt="What Turns A ‘GOOD’ Brand Into ‘ICONIC’ Brand"
            />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default GoodToIconic;
