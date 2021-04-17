import React from "react";
import { useStyles, heading } from "./sliderStyles";
import { Typography, ListItem, Button, useMediaQuery , Paper} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles";
import slider from "../../../src/assets/slider.png";

const Slider = (props) => {
  const { value } = props;

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));

  const sizes = () => {
    if (desktop) return "large";
    if (tablet) return "medium";
    if (mobile) return "small";
  };
  const classes = useStyles();
  return (
    <>
      <Paper className={value === "LIGHT" ? classes.root: classes.rootSub} elevation= {0} >
        <section className={classes.headingSec}>
          <MuiThemeProvider theme={heading}>
            <Typography variant="h1" color="inherit">
              We deliver absolute & <br />
              growth-oriented solutions <br />
              App Development.
            </Typography>
          </MuiThemeProvider>
          <MuiThemeProvider theme={heading}>
            <section className={classes.listSec}>
              <ListItem className={classes.list}>
                <section>
                  {[
                    "Free Life-Time Support",
                    "Assurance of Quality",
                    "On-Time Delivery",
                  ].map((text, index) => (
                    <Typography key={index} variant="h5" color="inherit">
                      <CheckIcon className={value === "LIGHT"? classes.tick : classes.tickSub } /> {text}
                    </Typography>
                  ))}
                </section>
              </ListItem>
            </section>
          </MuiThemeProvider>
          <section>
            <Button
              style={{ textTransform: "none", marginLeft: "10px" }}
              variant="contained"
              size={sizes()}
              color="secondary"
            >
              Partner with us save 50%
            </Button>
          </section>
        </section>

        <section className={classes.sec}>
         <img alt="sliderImg" src={slider} className={classes.vector}/>
        </section>
      </Paper>
    </>
  );
};

export default Slider
