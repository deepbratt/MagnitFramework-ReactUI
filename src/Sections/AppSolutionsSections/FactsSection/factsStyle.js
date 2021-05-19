import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { MoonWhite } = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    backgroundColor: MoonWhite,
    textAlign: "center",
    marginBottom: "40px"
  },
  para: {
    textAlign: "left",
    marginLeft: "20px",
    [breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: "0px"
    },
  },
  Avatar: {
    width: "50px",
  },
  card: {
    padding: "40px 0px 40px 0px",
  },
  cardContent: {
    backgroundColor: "#E8F2FE",
    display: "flex",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
