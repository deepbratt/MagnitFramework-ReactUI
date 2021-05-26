import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

const { BlueRibbon, Harlequin } = Colors;

export const missionStyles = makeStyles((theme) => ({
  grid: {
    overflow: "hidden",
  },
  root: {
    backgroundColor: BlueRibbon,
    paddingTop: "20px",
    paddingBottom: "20px",
    position: "relative",
  },
  // card: {
  //   zIndex: 1,
  //   height: "350px",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   transition: "all .25s linear",
  //   borderRadius: "5px",
  //   boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
  //   marginLeft: "20px",
  //   cursor: "pointer",
  //   [breakpoints.down("md")]: {
  //     width: "70%",
  //     height: "450px",
  //     marginLeft: "0px",
  //   },
  //   [breakpoints.down("xs")]: {
  //     height: "500px",
  //   },
  // },
  // card2: {
  //   zIndex: 1,
  //   height: "350px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   transition: "all .25s linear",
  //   borderRadius: "5px",
  //   boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
  //   marginRight: "20px",
  //   cursor: "pointer",
  //   [breakpoints.down("md")]: {
  //     width: "70%",
  //     height: "450px",
  //     marginRight: "0px",
  //   },
  //   [breakpoints.down("xs")]: {
  //     height: "550px",
  //   },
  // },
  card: {
    display: "flex",
    flexDirection:"column",
    margin: "10px 0",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    borderRadius: "5px",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    // padding: "1rem"
  },
  Imgcard: {
    display: "flex",
    flexDirection:"column",
   
   
    justifyContent: "center",
    alignItems: "center",
    padding: "16px"
  },
  Icon: {
    maxWidth: "60px",
  },
  leftPattern: {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: 0,
  },
  rightPattern: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
  },
  underlined: {
    width: "50%",
    borderBottom: `3px solid ${Harlequin}`,
    marginBottom:".4rem"
  },
}));
