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
    minWidth: "25vw",
    borderRadius: 0,
    margin: "0 14px",
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

function BundlePlans() {
  const classes = useStyles();

  return (
    <div className="plans-main-container">
      <h1 className="plans-heading cw fw-700 fs-48 taca">Bundles</h1>
      <p className="plans-p fw-400 taca cw fs-24">
        Affordable plans for Small and Online Businesses
      </p>
      <div className="pricing-plans-card dfa jcca">
        <StyledBadge badgeContent="@ Flat 11% Off" className="badge">
          <Card
            className={classes.root}
            style={{ backgroundColor: "#662E9B", paddingBottom: "20px" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                className="cw tala fw-700"
                gutterBottom
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
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  Social Media Management
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  SEO
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>(Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  Facebook Lead Generation
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  Instagram Lead Generation
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Exclusive"
                    className="pricing-included-excluded"
                  />
                  Mobile App Development
                </div>
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <button className="plans-dark-button" type="submit">
                BOOK NOW
              </button>
            </CardActions>
          </Card>
        </StyledBadge>
        <StyledBadge badgeContent="@ Flat 18% Off" className="badge">
          <Card className={classes.root} style={{ backgroundColor: "#007F5F" }}>
            <CardContent>
              <Typography
                variant="h5"
                className="cw tala fw-700"
                gutterBottom
                style={{ fontWeight: "700" }}
              >
                Gold
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
                  <span>(Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={exc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Google Adwords (PPC)
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>(Logo, Envelope, Business Card and Letterhead )</span>
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
                BOOK NOW
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
                gutterBottom
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
                  <span>(Logo, Envelope, Business Card and Letterhead )</span>
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Google Adwords (PPC)
                </div>
                <div className="fs-14">
                  <img
                    src={inc}
                    alt="Inclusive"
                    className="pricing-included-excluded"
                  />
                  Office Kits &nbsp;
                  <span>(Logo, Envelope, Business Card and Letterhead )</span>
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
                BOOK NOW
              </button>
            </CardActions>
          </Card>
        </StyledBadge>
      </div>
    </div>
  );
}

export default BundlePlans;
