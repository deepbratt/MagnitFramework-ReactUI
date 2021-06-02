import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../Theme/color.constants"


const {Mariner,whiteColor,blackColor} = Colors
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiButton: {
      root:{
        borderRadius: "none",
        fontFamily: "Poppins",
        color: blackColor
      }
    },
    MuiTypography: {
      h4: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "35px",
        // color:"white",
        lineHeight: 1.6,
        color: whiteColor,
        fontWeight: "bolder",
        textAlign: "center",
        [breakpoints.only("sm")]: {
          fontSize: "28px",
          marginTop: "40px",
          textAlign: "center",
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      h5: {
        fontFamily: "Poppins",
        textAlign:"left",
        fontWeight: "600",
        fontSize: "16px",
        marginTop: "10px",
        marginLeft:"10px",
      
      },
      h6: {
        fontFamily: "Poppins",
        textAlign:"left",
        fontWeight: "600",
        fontSize: "24px",
        marginTop: "22px",
        color: whiteColor,
      },
    },
  },
});

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
    [breakpoints.up("lg")]: {
      flexFlow: "wrap",
    },
    [breakpoints.down("sm")]: {
      flexFlow: "wrap",
    },
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
    [breakpoints.only("md")]: {
      width: "40%",
  
    },
    [breakpoints.only("sm")]: {
      width: "50%",
    },
    [breakpoints.down("xs")]: {
      width: "78%",
     
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
    flexDirection: "column"
  },
cardContent: {
  width: "100%",
  backgroundColor: Mariner,
  paddingBottom: "10px",
  textAlign: "left",
  paddingLeft: "20px",

},
seeMore:{
  textTransform: "none", 
  marginLeft: "10px",
   backgroundColor: whiteColor
}
}));
