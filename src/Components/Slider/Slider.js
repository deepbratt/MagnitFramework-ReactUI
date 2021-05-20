import React from "react";
import { useStyles, heading } from "./sliderStyles";
import {
  Typography,
  ListItem,
  Button,
  Hidden,
  Grid,
  List,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { hero, Vector } from "../../Components/Hero/Images";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";

const Slider = ({
  value,
  headingOne,
  headingTwo,
  headingThree,
  text,
  data,
  color,
}) => {
  const { Harlequin, whiteColor } = Colors;
  const classes = useStyles();
  const {
    tick,
    tickSub,
    sec,
    vector,
    spiral,
    gridImage,
    gridText,
    listItem
  } = classes;
  return (
    <Grid
      container
      className={sec}
      direction="row"
      // justify="center"
      // alignItems="center"
      style={{
        background: `linear-gradient(${color} 5%, ${whiteColor} 95% `,
      }}
    >
      <Hidden smDown>
        <CustomImage alt="sliderImg" src={Vector} className={spiral} />
      </Hidden>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        className={gridText}
      >

          <Typography variant="h2" >
            {headingOne} <br />
            {headingTwo} <br />
            {headingThree} <br />
          </Typography>
          {/* <section className={listSec}> */}
          <List>
            {data.map((text, index) => (
              <ListItem className={listItem} >
                <Typography  key={index} variant="h5">
                  <CheckIcon className={value === "LIGHT" ? tick : tickSub} />
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          {/* </section> */}

        <CustomButton
            // style={{
            //   // textTransform: "none",
            //   backgroundColor: Harlequin,
            //   // borderRadius:"5px"
            // }}
            // variant="contained"
            size={Breakpoints()}
            color="primary"
          >
            {text}
          </CustomButton>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          className={gridImage}
          justify="flex-start"
        >
          <CustomImage alt="sliderImg" src={hero} className={vector} />
        </Grid>
      </Hidden>
      {/* <Hidden smDown>
        <Grid item xs={12} md={4} lg={1}></Grid>
      </Hidden> */}
    </Grid>
  );
};

export default Slider;