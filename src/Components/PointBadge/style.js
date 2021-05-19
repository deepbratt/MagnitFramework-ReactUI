import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { Harlequin, Mirage, darkSilver, whiteColor } = Colors;
const PointBadgeStyles = makeStyles((theme) => ({
  vertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    margin: "15px",
    zIndex: 1,
    padding: "10px",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    transition: "all .25s linear",
    border: `solid 1px ${whiteColor}`,
    "&:hover": {
      border: `solid 1px ${Harlequin}`,
      boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
      transition: "all .25s linear",
    },
  },
  inline: {
    display: "flex",
    margin: "20px 0px",
  },
  badge: {
    borderRadius: "5px",
    // padding: "25px",
    margin: "15px",
  },
  devSec: {
    display: "flex",
    justifyContent: "center",
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      margin: "15px 10px",
    },
  },
  supportSub: {
    borderRadius: "5px",
    height: "100px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
      width: "80px",
    },
  },
  contentLeft: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    "& > p": {
      color: darkSilver,
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
      color: Mirage,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  contentRight: {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > p": {
      color: darkSilver,
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
      color: Mirage,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
}));

export default PointBadgeStyles;
