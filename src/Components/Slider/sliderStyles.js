import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { Colors } from "../../Theme/color.constants";
import { hero,Vector } from "../../Components/Hero/Images";

const { whiteColor, Harlequin, blackColor,Mirage } = Colors;

const breakpoints = createBreakpoints({});

export const heading = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "none",
        fontFamily: "Poppins",
        color: blackColor,
      },
    },
    MuiTypography: {
      h1: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "40px",
        lineHeight: 1.6,
        fontWeight: "bolder",
        color:Mirage,
        [breakpoints.down("md")]: {
          fontSize: "37px",
        },
        [breakpoints.only("sm")]: {
          fontSize: "24px",
          // textAlign: "center",
          paddingTop: "15px",
        },
        [breakpoints.down("xs")]: {
          fontSize: "23px",
          textAlign: "center",
        },
      },

      h5: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "20px",
        fontWeight: "bolder",
        lineHeight: 3,
        [breakpoints.down("md")]: {
          fontSize: "15px",
        },
        [breakpoints.only("sm")]: {
          fontSize: "16px",
        },
        [breakpoints.down("xs")]: {
          fontSize: "13px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    width: "100vw",
    display: "flex",
  },
  headingSec: {
    display: "flex",
    flexDirection: "column",
  },
  vector: {
   zIndex: 1,
    height: "auto",
    margin: 0,
    padding: 0,
    width: "100%",
  },

  tick: {
    backgroundColor: whiteColor,
    borderRadius: "15px",
    marginRight: "10px",
    fontSize: "23px",
    [breakpoints.only("md")]: {
      fontSize: "17px",
    },
    [breakpoints.only("sm")]: {
      fontSize: "15px",
    },
    [breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  tickSub: {
    borderRadius: "15px",
    border: `solid 1px ${Harlequin}`,
    marginRight: "10px",
    fontSize: "23px",
    [breakpoints.only("md")]: {
      fontSize: "17px",
    },
    [breakpoints.only("sm")]: {
      fontSize: "15px",
    },
    [breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  list: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  sec: {
    position: "relative",
    width: "100%",
    padding:"24px"
  },
  gridImage:{ 
    zIndex: 1, 
    // padding: "16px" 
  },
  gridText:{
    textAlign: "left",
    zIndex: 1,
    [breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  slide: {
    position: "relative",
    "& .carousel .slide img": {
      width: "100%",
    },
  },
  spiral: {
    position: "absolute",
    zIndex: 0,
    width:"100%",
    height:"auto"
  },
  listItem:{

    [breakpoints.down("sm")]: {
      textAlign: "center",
      display: "block"
    },
  }

}));
