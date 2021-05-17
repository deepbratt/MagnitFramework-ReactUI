import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      h5: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "22px",
        whiteSpace: "nowrap",
        [breakpoints.down("xs")]: {
          fontSize: "17px",
        },
      },
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "16px",
        marginTop: "10px",
        [breakpoints.down("xs")]: {
          fontSize: "14px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
  },
  card: {
    height: "165px",
    width: "100%",
    margin: "10px",
    cursor: "pointer",
    boxShadow: "none",
    [breakpoints.down("md")]: {
      width: "100%",
      height: "200px",
    },
    [breakpoints.down("sm")]: {
      height: "310px",
    },
  },
  content: {
    display: "flex",
    textAlign: "left",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  devSec: {
    height: "100px",
    width: "50%",
    display: "flex",
    textAlign: "left",
    [breakpoints.down("sm")]: {
      justifyContent: "center",
      display: "flex",
    },
  },
  supportSub: {
    borderRadius: "5px",
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      width: "220px",
    },
  },
  para: {
    paddingLeft: "20px",
    [breakpoints.down("sm")]: {
      paddingTop: "30px",
      paddingLeft: "0px",
    },
  },
}));
