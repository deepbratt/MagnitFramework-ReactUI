import React from "react";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Flip from "./Flip";

const CardData = ({ horizontal, data, lgBreakpoint = 4, title }) => {
  const classes = useStyles();
  const { card } = classes;
  let breakpoint = 4;
  if (horizontal) {
    breakpoint = 6;
  }
  return (
    <>
      <Grid container justify="space-between">
        {data &&
          data.map((items, index) => (
            <Grid
              className={card}
              key={index}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Flip horizontal={horizontal} data={items} />
            </Grid>
          ))}
      </Grid>
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
