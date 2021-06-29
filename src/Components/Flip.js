import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { Typography, Grid } from "@material-ui/core";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import { Colors } from "../Theme/color.constants";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";

const Flip = ({ data }) => {
  const classes = useStyles();

  const { whiteColor } = Colors;
  const { devSec, vertical, name, detail, supportSub, VertSec, badge } =
    classes;
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { image, title, description, buttonLabel, buttonLink } = data;
  //   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ flexGrow: 1 }}
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
            <div className={supportSub}>
              <CustomImage
                alt="icon"
                width="100%"
                height="100%"
                src={image}
                className={badge}
              />
            </div>
            <div>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={name}
                gutterBottom
              >
                {title}
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            className={devSec}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={name}
                gutterBottom
              >
                {title}
              </Typography>
            </div>
            <div>
              <Typography
                variant="subtitle2"
                className={detail}
                paragraph={true}
              >
                {description}
              </Typography>
            </div>
            <div>
              <CustomButton size="small">
                <NavLink
                  to={buttonLink}
                  style={{
                    marginLeft: "10px",
                    textDecoration: "none",
                    color: whiteColor,
                  }}
                >
                  {buttonLabel}
                </NavLink>
              </CustomButton>
            </div>
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
    fill: PropTypes.string,
    // icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
  }),
};

export default Flip;
