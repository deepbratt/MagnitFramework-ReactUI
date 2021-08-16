import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { Harlequin, whiteColor, Mirage, darkSilver } = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
  cardSec: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    margin: "0px",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: `solid 1px ${whiteColor}`,
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": {
      boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
      border: `solid 1px ${Harlequin} `,
      transition: "all .25s linear",
    },
    cursor: "pointer",
  },

  devSec: {
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: ".5rem 1rem",
  },

  serviceHeading: {
    "& > h4": {
      color: Mirage,
    },
    width: "100px",
    padding: ".8rem",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
      width: "80px",
    },
  },
  VertSec: {
    height: "350px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding:"10px",
    // paddingBottom:0,
    // padding:"1rem",
    width: "280px",
    // margin: "15px",
    marginTop: "0px",
    // "&:hover": {
    //   border: `solid 1px ${Harlequin}`,
    //   boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    //   transition: "all .25s linear",
    // },
    [theme.breakpoints.down("sm")]: {
      margin: "15px 10px",
      // marginTop:"10px",
    },
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    height: "100%",
    cursor: "pointer",
    zIndex: 1,
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  badge: {
    borderRadius: "5px",
    // padding: "25px",
    margin: "25px",
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  supportSub: {
    borderRadius: "5px",
    height: "80%",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
      width: "80px",
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
  contentRight: {
    minWidth: "100%",
    padding: "2px",
  },
  name: {
    color: Mirage,
    fontWeight: 600,
    textTransform: "capitalize",
  },

  detail: {
    color: darkSilver,
    fontWeight: "normal",
  },
}));
