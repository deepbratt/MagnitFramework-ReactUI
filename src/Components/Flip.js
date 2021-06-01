import React from "react";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, CardContent, Grid, Card } from "@material-ui/core";
import CustomImage from "./CustomImage";
import ReadMore from "./ReadMore";
import { NavLink } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";
import { Colors } from "../Theme/color.constants";
import CustomButton from "./CustomButton";
const Flip = ({ horizontal, data }) => {
  const classes = useStyles();
  
const { Harlequin } = Colors;
  const { card, devSec, devSub, contentRight } = classes;
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { color, fill, icon, title, desc, redirect } = data;
  //   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <ReactCardFlip
        style={{ flexGrow: 1, backgroundColor: "green" }}
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        <section
          className={devSec}
          style={{ backgroundColor: color, }}
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
        >
          <div>
            <CustomImage alt="icon" src={icon} style={{ filter: fill}} />
          </div>

          <div className={contentRight}>
            <Typography variant="subtitle2" style={{ color: color }}>
              <ReadMore text={desc} maxLines={2} />
              Learn More
            </Typography>
            <Typography color="textPrimary" variant="subtitle1" gutterBottom>
              {title}
            </Typography>
          </div>
        </section>

        <section
          className={devSec}
          style={{ backgroundColor: color }}
          onMouseLeave={() => setIsFlipped((prev) => !prev)}
        >
          <Typography color="textPrimary" variant="subtitle1" gutterBottom>
            {title}
          </Typography>

          <Typography variant="subtitle2" paragraph={true}>
            <ReadMore text={desc} maxLines={3} />
            <NavLink
              to={redirect}
              style={{ marginLeft: "10px", textDecoration: "none",
             color:Harlequin
               }}
            >
          Learn More
            </NavLink>
          </Typography>
        </section>
      </ReactCardFlip>
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
