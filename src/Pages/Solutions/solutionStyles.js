import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

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
          textAlign: "center"
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "bolder",
        fontSize: "18px",
        textAlign: "center",
        whiteSpace: "nowrap"
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    padding: "0px",
    backgroundColor: "#F5EFE5",
    width: "100%",
    paddingBottom: "50px"
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#F8F3EC",
    width: "15%",
    height: "165px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    "&:hover": { boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.38)" ,
    backgroundColor: "#fff",
},
    margin: "10px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "60%",
    },
  },

  devSec: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    filter: "invert(51%) sepia(7%) saturate(4863%) hue-rotate(314deg) brightness(113%) contrast(89%)",
    width: "98px",
    height: "50px",
  },
 
}));
