import {
  Badge,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import exc from "../../images/svg/Pricing/Excluded.svg";
import inc from "../../images/svg/Pricing/Included.svg";
import "../../styles/StartUpPlans.css";

const useStyles = makeStyles({
  root: {
    minWidth: "29vw",
    borderRadius: 0,
    margin: "0 10px",
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 125,
    backgroundColor: "yellow",
    fontSize: 18,
    padding: "20px",
    borderRadius: "0",
  },
}))(Badge);

function StartUpPlans() {
  const classes = useStyles();

  return (
    <div className="plans-main-container">
      <h1 className="plans-heading cw fw-700 fs-48 taca">Startup Plans</h1>
      <p className="plans-p fw-400 taca cw fs-24">
        Select the package as per your startup goals with a dedicated business
        analyst
      </p>
      <div className="pricing-plans-card dfa jcca">
        <StyledBadge badgeContent="@ Flat 11% Off" className="badge">
          <Card className={classes.root} style={{ backgroundColor: "#662E9B" }}>
            <CardContent>
              <Typography
                variant="h5"
                className="cw tala"
                style={{ fontWeight: "700" }}
              >
                Silver
              </Typography>

              <Typography
                className="dfa cw tala pricing-2"
                style={{ flexDirection: "column" }}
              >
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Single page website
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Facebook website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Instagram website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Business Logo
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Excluded"
                    className="pricing-included-excluded"
                  />
                  Social Media Management
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Excluded"
                    className="pricing-included-excluded"
                  />
                  SEO
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Excluded"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>( Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Excluded"
                    className="pricing-included-excluded"
                  />
                  Google Adwords (PPC)
                </div>
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <button className="plans-dark-button" type="submit">
                START NOW
              </button>
            </CardActions>
          </Card>
        </StyledBadge>
        <StyledBadge badgeContent="@ Flat 18% Off" className="badge">
          <Card className={classes.root} style={{ backgroundColor: "#007F5F" }}>
            <CardContent>
              <Typography
                variant="h5"
                className="cw tala"
                style={{ fontWeight: "700" }}
              >
                Gold
              </Typography>

              <Typography
                className="dfa cw tala pricing-2"
                style={{ flexDirection: "column" }}
              >
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Multi pages website (4-5)
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Facebook website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Instagram website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Business Logo
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Social Media Management
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  SEO
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>( Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Google Adwords (PPC)
                </div>
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <button className="plans-dark-button" type="submit">
                START NOW
              </button>
            </CardActions>
          </Card>
        </StyledBadge>
        <StyledBadge badgeContent="@ Flat 21% Off" className="badge">
          <Card className={classes.root} style={{ backgroundColor: "#DD5703" }}>
            <CardContent>
              <Typography
                variant="h5"
                className="cw tala"
                style={{ fontWeight: "700" }}
              >
                Platinum
              </Typography>

              <Typography
                className="d-flex cw tala pricing-2"
                style={{ flexDirection: "column" }}
              >
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Professional ecommerce site
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Facebook website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Instagram website traffic generation
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Business Logo
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Social Media Management
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  SEO
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>( Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Google Adwords (PPC)
                </div>
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <button className="plans-dark-button" type="submit">
                START NOW
              </button>
            </CardActions>
          </Card>
        </StyledBadge>
      </div>
    </div>
  );
}

export default StartUpPlans;
