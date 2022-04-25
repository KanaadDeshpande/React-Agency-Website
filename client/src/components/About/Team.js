import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Carousel from "react-elastic-carousel";
import Mustafa from "../../images/png/About/Team/Mustafa.png";
import Shreyas from "../../images/png/About/Team/Shreyas.png";
import Burhan from "../../images/png/About/Team/Burhan.png";
import Radha from "../../images/png/About/Team/Radha.png";
import Kanaad from "../../images/png/About/Team/Kanaad.png";
import Devashree from "../../images/png/About/Team/Devashree.png";
import "../../styles/About/About.css";
import "../../styles/About/Team.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  Card: {
    margin: "auto",
  },
  CardMedia: {
    width: "auto",
  },
});

function Team() {
  const classes = useStyles();
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="team-background">
      <h1 className="team-heading fs-48 fw-700 jcca taca">
        The Team Behind IllusTech
      </h1>
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        disableArrowsOnEnd={true}
        // outerSpacing={100}
        className="team-carousel"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Radha"
              image={Radha}
              title="Radha "
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Radha
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Super Cool Specialist Designer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Devashree"
              image={Devashree}
              title="Devashree "
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Devashree
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A magnificient ...?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Burhan"
              image={Burhan}
              title="Burhan"
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Burhan
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Fantastic App Developer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Mustafa"
              image={Mustafa}
              title="Mustafa"
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Mustafa
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Phenomenal Designer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shreyas"
              image={Shreyas}
              title="Shreyas"
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Shreyas
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h2">
                Super Awesome Backend Developer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Kanaad"
              image={Kanaad}
              title="Kanaad"
              className="img-height"
            />
            <CardContent>
              <Typography variant="h6" component="h4">
                Kanaad
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h2">
                Legendary Full Stack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel>
      ;
    </div>
  );
}

export default Team;
