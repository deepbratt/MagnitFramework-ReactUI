import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const { Harlequin } = Colors;
export const SolutionsStyles = makeStyles((theme) => ({
  card: {
    height: "125px",
    width: "100%",
    cursor: "pointer",
    boxShadow: "none",
  },
  supportSub: {
    borderRadius: "5px",
    maxWidth: "120px",
    minHeight: "120px",
    maxHeight: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "250px",
    [breakpoints.down("sm")]: {
      width: "170px",
    },
  },
  underlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      width: "160px",
      right: 0,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "90px",
      },
    },
  },
  breadCrumbStyles: {
    position: "absolute",
    top: "20px",
    left: "50px",
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));
