import React from "react";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, CardContent, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";
import ReadMore from "./ReadMore"
import { NavLink } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import Flip from "./Flip";

const CardData = ({ horizontal, data, lgBreakpoint=4 }) => {
  const classes = useStyles();
const { card, } = classes;
  let breakpoint = 4;
  if (horizontal) {
    breakpoint = 6;
  }
  return (
    <>
     <div style={{flexGrow:1}}>
    <Grid container justify="space-around">
      {data &&
        data.map((item, index) => (
          <Grid className={card}  key={index} item xs={12} md={breakpoint} lg={3}>
          <Flip horizontal={horizontal} data={item}/>
          </Grid>
        ))}
    </Grid>
</div>
   
    </>
  );
};
CardData.defaultProps = {
  horizontal: false,
};

CardData.propTypes = {
  horizontal: PropTypes.bool,
  data: PropTypes.array.isRequired,
};
export default CardData;

