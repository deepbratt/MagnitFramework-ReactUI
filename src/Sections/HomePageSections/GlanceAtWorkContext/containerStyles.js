import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../../Theme/color.constants"


const {Mariner,whiteColor,blackColor} = Colors
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    paddingBottom: "40px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent: "center",
    flexFlow: "wrap",
  },
  card: {
    paddingTop: "20px",
    width: "25%",
    
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    transition: "all .25s linear",
    margin: "20px",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    [breakpoints.down("sm")]: {
      width: "70%",
  
    },
  
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
    
  },
cardContent: {
  width: "100%",
  backgroundColor: Mariner,
  paddingBottom: "12px",
  textAlign: "center",
  paddingLeft: "20px",
  color: whiteColor,
  padding: "20px"

},
seeMore:{
  textTransform: "none", 
  marginLeft: "10px",
  borderRadius: "0px",
  padding: "6px 40px",
   backgroundColor: whiteColor
}
}));
