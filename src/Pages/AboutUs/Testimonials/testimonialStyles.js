import { makeStyles } from "@material-ui/core/styles";
// import { Colors } from "../../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "20px",
    width: "100%",
    overflow: "hidden",
  },

  card: {
    display: "flex",
    width: "100%",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardSec: {
    display: "flex",
    flexDirection: "column",
    color: "#FFFFFF",
    marginTop: "35px",
    textAlign: "left",
    backgroundColor: "#4CBFFF",
    marginBottom: "30px",
    [breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    display: "flex",
    alignItems: "center",
  },
  Images: {
    margin: "0px",
    padding: "20px",
  },
  imageSec: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Ellipse1: {
    position: "relative",
    width: "50%",
    
  },
  opacity: {
    position: "absolute",
    borderRadius: "100px",
    right: "10px",
    bottom: "3px",
  },
  Secretary: {
    position: "absolute",
    borderRadius: "100px",
    right: "4px",
    bottom: "4px",
    opacity: 0.6
  },
}));
