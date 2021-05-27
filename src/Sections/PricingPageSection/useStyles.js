import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const { mercury, boxShadowColor, whiteColor, blackColor } = Colors;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: mercury,
    width: "100%",
    display: "flex",
    flexFlow: "wrap",
    padding: "0% 9% 9% 9%",
  },
  box: {
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    color: whiteColor,
    padding: "0 25px 15px 25px",
    transition: "transform .2s ease-out",
    "&:hover": {
      transform: "scale(1.1, 1.1) translate3d(0, 0, 0)",
      zIndex: 2,
      boxShadow: `0px 4px 100px 5px ${boxShadowColor}`,
      [breakpoints.down("sm")]: {
        transform: "none",
      },
    },
    [breakpoints.down("md")]: {
      margin: "4% 4%",
    },
    [breakpoints.down("sm")]: {
      margin: "4% 0",
    },
  },
  price: {
    display: "flex",
    margin: "10px 0px",
    [breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  list: {
    paddingLeft: "0px",
    display: "flex",
    [breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  button: {
    backgroundColor: "rgb(255,255,255,0.12)",
    padding: "10px 40px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: whiteColor,
      color: blackColor,
      transition: "all .5s linear",
    },
  },
  Img: {
    marginRight: "10px",
  },
  span: {
    paddingLeft: "20px",
    paddingTop: "16px",
    [breakpoints.down("sm")]: {
      paddingTop: "0px",
    },
  },
}));

export default useStyles;
