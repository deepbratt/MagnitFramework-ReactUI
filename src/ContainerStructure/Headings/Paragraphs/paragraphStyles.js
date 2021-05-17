import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../../Theme/color.constants"

const breakpoints = createBreakpoints({});
const {DoveGray} = Colors
export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      paragraph: {
        fontFamily: "Poppins",
        color: DoveGray,
        fontSize: "16px",
        [breakpoints.down("sm")]: {
          marginTop: "15px",
          whiteSpace: "wrap,",
    
        },
     
      },
    },
  },
});