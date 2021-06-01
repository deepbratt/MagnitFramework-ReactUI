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
import CustomButtonStyles from "./CustomButton/style";
const Flip = ({ horizontal, data }) => {
  const classes = useStyles();
  
const { whiteColor } = Colors;
  const { card, devSec,vertical, devSub, contentRight,name,detail,supportSub, VertSec,badge } = classes;
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { color, fill, icon, title, desc, redirect } = data;
  //   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        className={vertical}
        flipDirection="horizontal"
      >
       <Grid xs={12}
            className={ VertSec}
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
          >
             <section style={{ backgroundColor: color }} className={supportSub}>
             <CustomImage alt="icon"  width="50px"
                height="50px" src={icon} style={{ filter: fill}} className={badge} />
            </section>
            <section>
            <Typography color="textPrimary" variant="subtitle1" className={name} gutterBottom>
              {title}
            </Typography>
            </section>
          </Grid>
       

        <Grid
          className={devSec}
          onMouseLeave={() => setIsFlipped((prev) => !prev)}
        >
          <Typography color="textPrimary" variant="subtitle1"  className={name} gutterBottom>
            {title}
          </Typography>

          <Typography variant="subtitle2" className={detail} paragraph={true}>
            {desc} 
          
          </Typography>
          <div>
              <CustomButton size="small" >  <NavLink
            to={redirect}
            style={{ marginLeft: "10px", textDecoration: "none",
           color:whiteColor
             }}
          >
        Read More
          </NavLink></CustomButton>
            </div>
        </Grid>
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
