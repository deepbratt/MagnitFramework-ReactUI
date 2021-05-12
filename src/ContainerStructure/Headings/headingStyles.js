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
        [breakpoints.down("sm")]: {
          fontSize: "20px",
        },
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "18px",
        whiteSpace: "nowrap",
      },
      h6: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "25px",
        whiteSpace: "nowrap",
      },
    },
  },
});