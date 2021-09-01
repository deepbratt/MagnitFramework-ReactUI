import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { Harlequin, Mirage, darkSilver } = Colors;
const PointBadgeStyles = makeStyles((theme) => ({
  vertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    height: "100%",
    cursor: "pointer",
    zIndex: 1,
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  inline: {
    display: "flex",
    margin: "20px 0px",
    alignItems: "flex-start",
  },
  badge: {
    borderRadius: "5px",
    // padding: "25px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },

  VertSec: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // padding:"10px",
    // paddingBottom:0,
    // padding:"1rem",
    width: "auto",
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
  hover: {
    "&:hover": {
      border: `solid 1px ${Harlequin}`,
      boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
      transition: "all .25s linear",
    },
  },
  devSec: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    // margin: "15px",
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      margin: "15px 10px",
      marginTop: "0px",
    },
  },
  supportSub: {
    borderRadius: "5px",
    height: "100px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
      width: "80px",
    },
  },
  supportSubVert:  {
    borderRadius: "5px",
    height: "100%%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign:"center",
    margin:"auto"
    // [theme.breakpoints.down("sm")]: {
    //   height: "80px",
    //   width: "80px",
    // },
  },
  contentLeft: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    marginLeft:"15px",
    "& > h5": {
      color: Mirage,
      fontWeight: 600,
    },
    "& > h6": {
      color: darkSilver,
      fontWeight: 300,
    },
  },
  contentRight: {
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: ".5rem 1rem",
  },
  name: {
    padding: " 0rem 1rem",
    color: Mirage,
    fontWeight: 600,
    // textTransform: "capitalize",
  },

  detail: {
    padding: "0rem 1rem",
    color: darkSilver,
    fontWeight: "normal",
  },
}));

export default PointBadgeStyles;
