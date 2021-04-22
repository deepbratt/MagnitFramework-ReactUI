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
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    paddingBottom: "50px",
  },
 
}));
