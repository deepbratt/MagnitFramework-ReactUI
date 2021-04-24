import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../Theme/color.constants"


const {glanceSectionBackground, glanceImages} = Colors
const {Img1,Img2,Img3} = glanceImages
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "35px",
        lineHeight: 1.6,
        fontWeight: "bolder",
        textAlign: "center",
        [breakpoints.only("sm")]: {
          fontSize: "28px",
          marginTop: "40px",
          textAlign: "center",
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "bolder",
        fontSize: "24px",
        marginTop: "22px",
      },
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "15px",
        textAlign: "left",
        marginTop: "10px",
        paddingLeft: "20px",
        [breakpoints.only("md")]: {
          paddingLeft: "10px",
        },
        [breakpoints.down("xs")]: {
          fontSize: "14px",
          paddingLeft: "10px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    backgroundColor: glanceSectionBackground,
    paddingBottom: "40px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      flexFlow: "wrap",
    },
    [breakpoints.down("sm")]: {
      flexFlow: "wrap",
    },
  },
  card: {
    width: "30%",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "none",
    margin: "10px",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    [breakpoints.only("md")]: {
      width: "40%",
      height: "550px",
    },
    [breakpoints.only("sm")]: {
      width: "50%",
    },
    [breakpoints.down("xs")]: {
      width: "85%",
      height: "530px",
    },
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },

  devSec: {
    backgroundColor: Img1,
    width: "100%",
    height: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dev: {
    backgroundColor: Img2,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.up("md")]: {
      height: "66%",
    },
    [breakpoints.down("sm")]: {
      height: "63%",
    },
  },
  cardContent: {
    backgroundColor: Img3,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      height: "57%",
    },
    [breakpoints.only("md")]: {
      height: "58%",
    },
    [breakpoints.down("sm")]: {
      height: "58%",
    },
  },
}));
