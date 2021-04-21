import React from "react";
import { useStyles, heading } from "./sliderStyles";
import { Typography, ListItem, Button , Paper} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { MuiThemeProvider} from "@material-ui/core/styles";
import {hero} from "../../Components/Hero/Images";
import Breakpoints from "../../Theme/theme.breakpoints"

const Slider = (props) => {
  const { value } = props;

  const classes = useStyles();
  const {root,headingSec,listSec,list,tick,tickSub,sec,vector} = classes
  return (
    <>
      <Paper className={value === "LIGHT" ? root: root} elevation= {0} >
        
        <section className={headingSec}>
          <MuiThemeProvider theme={heading}>
            <Typography variant="h1" color="inherit">
              We deliver absolute & <br />
              growth-oriented solutions <br />
              App Development.
            </Typography>
          </MuiThemeProvider>
          <MuiThemeProvider theme={heading}>
            <section className={listSec}>
              <ListItem className={list}>
                <section>
                  {[
                    "Free Life-Time Support",
                    "Assurance of Quality",
                    "On-Time Delivery",
                  ].map((text, index) => (
                    <Typography key={index} variant="h5" color="inherit">
                      <CheckIcon className={value === "LIGHT"? tick : tickSub } /> {text}
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
              size={Breakpoints()}
              color="secondary"
            >
              Partner with us save 50%
            </Button>
          </section>
        </section>

        <section className={sec}>
         <img alt="sliderImg" src={hero} className={vector}/>
        </section>
      </Paper>
    </>
  );
};

export default Slider
