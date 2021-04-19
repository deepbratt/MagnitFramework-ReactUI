import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const heading = createMuiTheme({
  overrides: {
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
    backgroundColor: "#F3FDFE",
    
    margin: 0,
    padding: 0,
    color: "#151B27",
    display: "flex",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      paddingLeft: "100px",
      overflow: "hidden",
      paddingTop: "60px",
      height: "100vh",
    },
    [theme.breakpoints.only("md")]: {
      textAlign: "left",
      paddingLeft: "100px",
      paddingTop: "60px",
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px",
    },
  },
  rootSub: {
    margin: 0,
    padding: 0,
    color: "#151B27",
    display: "flex",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      paddingLeft: "100px",
      overflow: "hidden",
      paddingTop: "60px",
      height: "100vh",
    },
    [theme.breakpoints.only("md")]: {
      textAlign: "left",
      paddingLeft: "100px",
      paddingTop: "60px",
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px",
    },
  },
  headingSec: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  }, 
  vector: {
    [theme.breakpoints.up("lg")]: {
      width: "600px",
    },
    [theme.breakpoints.only("md")]: {
      width: "400px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "300px",
    },
    [breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  vectorSub: {
    filter: "grayscale(90%)",
    [theme.breakpoints.up("lg")]: {
      width: "600px",
    },
    [theme.breakpoints.only("md")]: {
      width: "400px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "300px",
    },
    [breakpoints.down("xs")]: {
      width: "200px",
    },
  },

  tick: {
    backgroundColor: "white",
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
    [breakpoints.only("sm")]: {
      marginTop: "20px",
    },
    [breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  slider: {
    backgroundColor: "#F3FDFE",
    height: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    color: "#151B27",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  slide: {
    backgroundColor: "#F3FDFE",
    minWidth: "100%",
    position: "relative",
    transition: "ease 1000ms",
  },
  leftBtn: {
    position: "absolute",
    top: "50%",
    left: "0px",
    transform: "translateY(-50%)",
    color: "#c4c4c4",
    "&:hover":{
      cursor:"pointer"
    }
  },
  rightBtn: {
    position: "absolute",
    top: "50%",
    right: "0px",
    transform: "translateY(-50%)",
    color: "#c4c4c4",
    "&:hover":{
      cursor:"pointer"
    }
  },
}));
