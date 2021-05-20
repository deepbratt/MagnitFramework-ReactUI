import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { Harlequin, whiteColor } = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
  cardSec: {
    display: "flex",
    flexFlow: "wrap",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent: "center",
  },
  card: {
    width: "24%",
    height: "360px",
    display: "flex",
    margin: "4px",
    flexDirection: "column",
    border: `solid 1px ${whiteColor}`,
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": {
      boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
      border: `solid 1px ${Harlequin}`,
      transition: "all .25s linear",
    },
    cursor: "pointer",
    [breakpoints.down("md")]: {
      width: "40%",
      height: "fit-content",
    },
    [breakpoints.down("sm")]: {
      width: "70%",
      height: "fit-content",
    },
  },
  devSub: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  devSec: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },

  underlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      left: 0,
      zIndex: -1,
      right: 0,
      color: "#000",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("xs")]: {
        height: "8px",
      },
    },
  },
}));
