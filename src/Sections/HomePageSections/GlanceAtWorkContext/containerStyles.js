import { makeStyles } from "@material-ui/core/styles";
import {Colors} from "../../../Theme/color.constants"


const {Mariner,whiteColor} = Colors

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    margin: "0px",
    paddingBottom: "20px",
    justifyContent:"space-evenly"
  },
  cardSec: {
    display: "flex",
    width: "100%",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent:"space-evenly",
    flexFlow: "wrap",

  },
  card: {
    paddingTop: "20px",
    // width: "25%",
    background:whiteColor,
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    transition: "all .25s linear",
    margin: "20px ",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    
    // [breakpoints.down("md")]: {
    //   width: "70%",
  
    // },
  
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },

  devSec: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding:"0px 6px"
    
  },
cardContent: {
  width: "100%",
  backgroundColor: Mariner,
  paddingBottom: "12px",
  textAlign: "center",
  paddingLeft: "20px",
  color: whiteColor,
  padding: "20px",

},
seeMore:{
  textTransform: "none", 
  marginLeft: "10px",
  borderRadius: "0px",
  padding: "6px 40px",
   backgroundColor: whiteColor,
   color:"black"
}
}));
