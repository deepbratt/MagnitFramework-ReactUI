import React from "react";
import { useStyles, heading } from "./sliderStyles";
import { Typography, ListItem, Button, Hidden,Paper} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { hero,Vector } from "../../Components/Hero/Images";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";

const Slider = ({value, headingOne,headingTwo,headingThree,text,data,color}) => {
  
const {Harlequin ,whiteColor} = Colors;
  const classes = useStyles();
  const {
    headingSec,
    listSec,
    list,
    tick,
    tickSub,
    sec,
    vector,
    spiral,
    root
  } = classes;
  return (
    <div className={sec}>
       <Paper
            style={{
              background: `linear-gradient(${color} 5%, ${whiteColor} 95% `,
            }}
            className={root}
            elevation={0}
          >
     <section className={headingSec}>
        <MuiThemeProvider theme={heading}>
          <Typography variant="h1" >
            {headingOne} <br />
           {headingTwo} <br/>
           {headingThree} <br/>
          </Typography>
        </MuiThemeProvider>
        <MuiThemeProvider theme={heading}>
          <section className={listSec}>
            <ListItem className={list}>
              <section>
                {data.map((text, index) => (
                  <Typography key={index} variant="h5" >
                    <CheckIcon className={value === "LIGHT" ? tick : tickSub} />
                    {text}
                  </Typography>
                ))}
              </section>
            </ListItem>
          </section>
     
        <section>
          <Button
            style={{ textTransform: "none", marginLeft: "10px", backgroundColor: Harlequin }}
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            {text}
          </Button>
        </section>
        </MuiThemeProvider>
      </section>
      
      <img  alt="sliderImg" src={hero} className={vector} />
        <Hidden smDown>
        <img  alt="sliderImg" src={Vector} className={spiral}  />
        </Hidden>
      </Paper>
    </div>
  );
};

export default Slider;
