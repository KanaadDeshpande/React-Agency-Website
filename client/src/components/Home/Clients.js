import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import Carousel from "react-elastic-carousel";
import data from "../../data/Home/Clients.json";
import "../../styles/About/About.css";
import "../../styles/About/Team.css";
import "../../styles/Home/Home.css";

export default function Clients() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="client-padding">
      <h1 className="team-heading fs-48 fw-700 jcca taca">Trusted By</h1>
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        disableArrowsOnEnd={true}
        className="team-carousel"
      >
        {data.tileData.map((test, index) => {
          return (
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={test.alt}
                  image={test.img}
                  className="car-img-height"
                />
              </CardActionArea>
            </Card>
          );
        })}
      </Carousel>
      ;
    </div>
  );
}
