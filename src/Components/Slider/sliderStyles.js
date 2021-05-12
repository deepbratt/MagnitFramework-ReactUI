import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { Colors } from "../../Theme/color.constants";

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
        [breakpoints.down("md")]: {
          fontSize: "37px",
        },
        [breakpoints.only("sm")]: {
          fontSize: "24px",
          textAlign: "center",
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
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      paddingLeft: "100px",
      paddingTop: "100px",
      alignItems:"center",
      // height:"100vh",
    },
    [theme.breakpoints.only("md")]: {
      textAlign: "left",
      paddingLeft: "100px",
      paddingTop: "100px",
      alignItems:"center",
      // height:"100vh"
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "70px",
      justifyContent:"center"
    },
    [breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "80px",
    },
  },
  headingSec: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  vector: {
   zIndex: 1,
    height: "530px",
    margin: 0,
    padding: 0,
    width: "100vw",
    [theme.breakpoints.up("lg")]: {
      height: "530px",
      marginLeft: "100px",
    },
    [theme.breakpoints.only("md")]: {
      height: "530px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "400px",
    },
    [breakpoints.down("xs")]: {
      height: "230px",
    },
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
    [breakpoints.only("sm")]: {
      marginTop: "20px",
    },
    [breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  slide: {
    position: "relative",
    [breakpoints.up("lg")]: {
      "& .carousel .slide img": {
        maxHeight: "600px",
        width: "auto",
        overflow: "hidden",
      },
    },
    [breakpoints.down("md")]: {
      "& .carousel .slide img": {
        maxHeight: "400px",
        width: "auto",
        overflow: "hidden",
      },
    },
    [breakpoints.down("sm")]: {
      "& .carousel .slide img": {
        maxHeight: "300px",
        width: "auto",
      },
    },
  },
  spiral: {
    position: "absolute",
    zIndex: 0,
    height: "500px",
  },

}));
