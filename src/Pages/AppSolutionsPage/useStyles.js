import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { MoonWhite } = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: MoonWhite,
    paddingTop: "30px"
  },
  content:{
    marginTop: "40px",
    textAlign: "left",
    [breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "0px",
    },
  },
  image:{
    [breakpoints.down("sm")]: {
      width: "250px"
    },
  }
}));
