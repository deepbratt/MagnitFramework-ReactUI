import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

const { whiteColor, Harlequin, blackColor, paletteBlue,skyBlue, DoveGray,Mirage,darkSilver } = Colors;


export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    backgroundColor: skyBlue,
    // padding: "50px 0px",
    position: "relative",
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
    
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  card:{
    zIndex:"1"
  },
  devSec: {
    color: blackColor,
    display: "flex",
    flexDirection: "column",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    borderRadius:"5px",
    textAlign:"center",
    padding:"1rem",
    margin:"1rem",
   
  },
  HeadSec:{
    "& > subtitle1" : {
      color:Mirage,
      fontWeight:600,
    },
   
    "& > subtitle2" : {
      color:darkSilver,
fontWeight:"normal"
    },
  },
  para:{
    margin:".5rem 0rem",
    cursor: "pointer",
    "& > body1" : {
      color:darkSilver,
fontWeight:"normal"
    },
  },
  button: {
    borderRadius: "none",
    fontFamily: "Poppins",
    backgroundColor: paletteBlue,
    transition: "all .3s linear",
    color: Harlequin,
    "&:hover": {
      backgroundColor: Harlequin,
      color: whiteColor,
      transition: "all .3s linear",
    },
  },
  RightPattern:{
    position: "absolute",
    right: "-116px",
    top: "-66px",
    zIndex: 1,
    width: "500px"
  },
  LeftPattern:{
    position: "absolute",
    left: "-112px",
    bottom: "-59px",
    zIndex: 1,
    width: "300px"
  },
  remoteArea:
  { color: DoveGray, 
    paddingTop: "10px",
  display:"flex",
  alignItems:"baseline",
justifyContent:"center"
},
  bottomStyle:{ 
    display:"flex",
  alignItems:"flex-end" ,
  justifyContent:"center"
 }

}));
