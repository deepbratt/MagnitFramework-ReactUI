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
  } = classes;
  return (
    <Grid
      container
      className={sec}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        background: `linear-gradient(${color} 5%, ${whiteColor} 95% `,
      }}
    >
      <Hidden smDown>
        <img alt="sliderImg" src={Vector} className={spiral} />
      </Hidden>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        style={{
          textAlign: "left",
          padding: "16px",
          zIndex: 1,
          // backgroundColor:"yellow"
        }}
      >
        <MuiThemeProvider theme={heading}>
          <Typography variant="h1" color="inherit">
            {headingOne} <br />
            {headingTwo} <br />
            {headingThree} <br />
          </Typography>
          {/* <section className={listSec}> */}
          <List>
            {data.map((text, index) => (
              <ListItem>
                <Typography key={index} variant="h5" color="inherit">
                  <CheckIcon className={value === "LIGHT" ? tick : tickSub} />
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
          {/* </section> */}
          <Button
            style={{
              textTransform: "none",
              backgroundColor: Harlequin,
            }}
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            {text}
          </Button>
        </MuiThemeProvider>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          style={{ zIndex: 1, padding: "16px" }}
        >
          <img alt="sliderImg" src={hero} className={vector} />
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid item xs={12} md={4} lg={1}></Grid>
      </Hidden>
    </Grid>
  );
};

export default Slider;
