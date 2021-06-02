import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { darkSilver, Harlequin, mainSlide, Mirage } = Colors;
const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    width: "100vw",
  },
  card: {
    backgroundImage: `linear-gradient(${mainSlide},white)`,
    position: "relative",
  },
  img: {
    [breakpoints.down("md")]: {
      width: "600px",
    },
    [breakpoints.down("xs")]: {
      width: "550px",
    },
  },
  breadCrumbStyles: {
    position: "absolute",
    top: "20px",
    left: "50px",
  },
  cardSec: {
    padding: "0px",
    marginBottom: "30px",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
    textAlign: "center",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  paragraph: {
    textAlign:"center",
    color:darkSilver,
    fontWeight:300
  },
    paragraphStyle: {
    width: "100%",
    // marginBottom: "50px",
    textAlign: "center",
    marginBottom: "20px",
    color: darkSilver,
  
  },
  hero: {
    [breakpoints.only("md")]: {
      width: "480px",
    },
    [breakpoints.only("sm")]: {
      width: "450px",
    },
    [breakpoints.down("xs")]: {
      width: "350px",
    },
  },
 
}));
