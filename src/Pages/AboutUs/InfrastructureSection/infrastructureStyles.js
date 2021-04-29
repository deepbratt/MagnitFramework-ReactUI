import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { InfrastrutureColor } = Colors;

const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    width: "100%",
    padding: "0px",
    overflow: "hidden",
    backgroundColor: InfrastrutureColor,
    display: "flex",
  },
  card: {
    backgroundColor: InfrastrutureColor,
    margin: "0px 7%",
  },
  content: {
    display: "flex",
    textAlign: "left",
    [breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  subContent: {
    marginTop: "100px",
  },
  title: {
    marginBottom: "10px",
  },

  Images: {
    width: "100%",
    marginTop: "100px",
    marginBottom: "100px",
  },
  image: {
    width: "100%",
    marginTop: "170px",
    marginBottom: "100px",
  },
  img1: {
    position: "relative",
    [breakpoints.only("md")]: {
      width: "50%",
    },
    [breakpoints.only("xs")]: {
      width: "50%",
    },
  },
  img2: {
    position: "absolute",
    left: "60%",
    bottom: "0px",
    width: "350px",
    [breakpoints.only("md")]: {
      width: "300px",
    },
    [breakpoints.only("xs")]: {
      width: "170px",
      left: "40%",
    },
  },
  img5: {
    position: "relative",
    zIndex: 1,
    [breakpoints.only("md")]: {
      width: "300px",
    },
    [breakpoints.only("xs")]: {
      width: "200px",
    },
  },
  img6: {
    position: "absolute",
    left: "60%",
    bottom: "50px",
    width: "250px",
    zIndex: -1,
    [breakpoints.only("md")]: {
      width: "190px",
    },
    [breakpoints.only("xs")]: {
      width: "170px",
      left: "40%",
    },
  },
  img7: {
    position: "relative",
    zIndex: 1,
    [breakpoints.only("md")]: {
      width: "300px",
    },
    [breakpoints.only("xs")]: {
      width: "190px",
    },
  },
  img8: {
    position: "absolute",
    left: "60%",
    bottom: "5px",
    width: "250px",
    zIndex: -1,
    [breakpoints.only("md")]: {
      width: "190px",
    },
    [breakpoints.only("xs")]: {
      width: "170px",
      left: "40%",
    },
  },
}));
