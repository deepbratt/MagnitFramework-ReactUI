import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";
const { Luigi, Harlequin } = Colors;
const breakpoints = createBreakpoints({});
const EventHeadStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0",
    marginBottom:"2rem",
    backgroundColor: "transparent",
    background:  `linear-gradient(-181.96deg , ${ Harlequin} -98.18%, rgba(255, 255, 255, 0) 85.96%)`,
backgroundBlendMode: "multiply"
  },
  Img: {
    borderRadius: "70%",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    position: "relative",
    zIndex: 1,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 4,
      zIndex: -2,
      left: "30%",
      borderRadius: "10px",
      width: "550px",
      height: "5rem",
      display: "block",
      backgroundColor: Luigi,
      [breakpoints.only("md")]: {
        width: "480px",
        
      },
      [breakpoints.only("sm")]: {
        width: "450px",
        height: "3rem",
        left: "0%",
      },
      [breakpoints.down("xs")]: {
        width: "313px",
        height: "3rem",
        left: "12%",
      },
    },
  },
  hero: {
    [breakpoints.up("lg")]: {
      width: "720px",
    },
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

export default EventHeadStyles;
