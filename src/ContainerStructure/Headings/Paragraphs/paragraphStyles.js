import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "16px",
        textAlign: "left",
        [breakpoints.down("sm")]: {
          marginTop: "15px",
          whiteSpace: "wrap,",
          textAlign: "center"
        },
        [breakpoints.down("xs")]: {
          fontSize: "15px",
          whiteSpace: "wrap,",
          textAlign: "center"
        },
      },
    },
  },
});