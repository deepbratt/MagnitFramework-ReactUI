import React from "react";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Grid } from "@material-ui/core";
import CustomImage from "./CustomImage";
import { NavLink } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";
import { Colors } from "../Theme/color.constants";
import CustomButton from "./CustomButton";

const Flip = ({ data }) => {
  const classes = useStyles();

  const { whiteColor } = Colors;
  const {
    devSec,
    vertical,
    name,
    detail,
    supportSub,
    contentRight,
    VertSec,
    badge,
  } = classes;
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { color, fill, icon, title, desc, redirect } = data;
  //   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <ReactCardFlip
          isFlipped={isFlipped}
          className={vertical}
          flipDirection="horizontal"
        >
          <Grid
            container
            className={VertSec}
            onMouseEnter={() => setIsFlipped(true)}
          >
            <Grid
              item={12}
              style={{ backgroundColor: color }}
              className={supportSub}
            >
              <CustomImage
                alt="icon"
                width="50px"
                height="50px"
                src={icon}
                style={{ filter: fill }}
                className={badge}
              />
            </Grid>
            <Grid item={12}>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={name}
                gutterBottom
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={devSec}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <Grid item={12} classNamw={contentRight}>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={name}
                gutterBottom
              >
                {title}
              </Typography>

              <Typography
                variant="subtitle2"
                className={detail}
                paragraph={true}
              >
                {desc}
              </Typography>
            </Grid>
            <Grid item={12}>
              <CustomButton size="small">
                <NavLink
                  to={redirect}
                  style={{
                    marginLeft: "10px",
                    textDecoration: "none",
                    color: whiteColor,
                  }}
                >
                  Read More
                </NavLink>
              </CustomButton>
            </Grid>
          </Grid>
        </ReactCardFlip>
      </div>
    </>
  );
};
Flip.defaultProps = {
  horizontal: false,
};

Flip.propTypes = {
  horizontal: PropTypes.bool,
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
  }),
};

export default Flip;
