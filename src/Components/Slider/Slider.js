import React from "react";
import { useStyles } from "./sliderStyles";
import { Typography, ListItem, Hidden, Grid, List } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { Colors } from "../../Theme/color.constants";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import { NavLink } from "react-router-dom";

const Slider = ({
  value,
  headingOne,
  headingTwo,
  headingThree,
  text,
  data,
  Img,
}) => {
  const {
   
    democrat,
    vividCerlean,
    atomsphere,
    carmine,
    peaFowl,
    whiteColor,
  } = Colors;
  const classes = useStyles();
  const { tick, tickSub, sec, vector, gridImage, gridText, listItem } = classes;
  return (
    <Grid
      container
      className={sec}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        background: `linear-gradient(to right,${democrat} 0%,${vividCerlean} 15%, ${atomsphere} 39%, ${carmine} 69%,${peaFowl} 99%)`,
      }}
    >
      <Grid item xs={12} sm={12} md={7} lg={7} className={gridText}>
        <Typography variant="h1">
          {headingOne} <br />
          {headingTwo} <br />
          {headingThree} <br />
        </Typography>
        {/* <section className={listSec}> */}
        <List>
          {data.map((text, index) => (
            <ListItem
              style={{ paddingLeft: "0px" }}
              key={"slider-listitem-" + index}
              className={listItem}
            >
              <Typography key={index} variant="h4">
                <CheckIcon className={value === "LIGHT" ? tick : tickSub} />
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
        {/* </section> */}

        <CustomButton>
          <NavLink
            style={{
              color: whiteColor,
              textDecoration: "none",
            }}
            to="/request-a-quote"
          >
            {text}
          </NavLink>
        </CustomButton>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          className={gridImage}
          // justify="flex-start"
        >
          <CustomImage alt="sliderImg" src={Img} className={vector} />
        </Grid>
      </Hidden>
      {/* <Hidden smDown>
        <Grid item xs={12} md={4} lg={1}></Grid>
      </Hidden> */}
    </Grid>
  );
};

export default Slider;
