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
import theme from "../../Theme/GlobalFontSizes";
import {NavLink} from "react-router-dom"

const Slider = ({
  value,
  headingOne,
  headingTwo,
  headingThree,
  text,
  data,
  Img
}) => {
  const { Harlequin, democrat, vividCerlean, atomsphere, carmine, peaFowl, whiteColor } =
    Colors;
  const classes = useStyles();
  const { tick, tickSub, sec, vector, spiral, gridImage, gridText, listItem } =
    classes;
  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        className={sec}
        direction="row"
        // justify="center"
        // alignItems="center"
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
              <ListItem style={{paddingLeft: "0px"}} className={listItem}>
                <Typography key={index} variant="h4">
                  <CheckIcon className={value === "LIGHT" ? tick : tickSub} />
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          {/* </section> */}

          <CustomButton
            style={{
              // textTransform: "none",
              backgroundColor: Harlequin,
              // borderRadius:"5px"
            }}
            variant="contained"
            size={Breakpoints()}
          >
           <NavLink  style={{
              color: whiteColor,
              textDecoration: "none"
            }} to="/request-a-quote">
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
            justify="flex-start"
          >
            <CustomImage alt="sliderImg" height="400px" src={Img} className={vector} />
          </Grid>
        </Hidden>
        {/* <Hidden smDown>
        <Grid item xs={12} md={4} lg={1}></Grid>
      </Hidden> */}
      </Grid>
    </MuiThemeProvider>
  );
};

export default Slider;
