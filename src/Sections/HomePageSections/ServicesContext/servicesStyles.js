import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { Harlequin, whiteColor,Mirage,darkSilver } = Colors;
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
    height:"100%",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    border: `solid 1px ${whiteColor}`,
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    // "&:hover": {
    //   boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    //   border: `solid 1px ${Harlequin}`,
    //   transition: "all .25s linear",
    // },
    cursor: "pointer",
  },

  devSec: {
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: "30px",
   flexDirection:"column",
   padding:"1rem" , 
  },
  serviceHeading:{
    "& > h4":{
      color:Mirage
    } 
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
    padding:"2px",
   marginTop:"1rem",
    "& > subtitle1" : {
      color:Mirage,
      fontWeight:600,
    },
   
    "& > subtitle2" : {
      color:darkSilver,
fontWeight:"normal"
    },
  },
}));
