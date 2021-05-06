import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../Theme/color.constants"


const {glanceImages} = Colors
const {Img1,Img2,Img3} = glanceImages
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "35px",
        color:"white",
        lineHeight: 1.6,
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
        marginTop: "10px",
        marginLeft:"10px"
      },
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "15px",
        textAlign: "left",
        marginTop: "10px",
        paddingLeft: "20px",
        [breakpoints.only("md")]: {
          paddingLeft: "10px",
        },
        [breakpoints.down("xs")]: {
          fontSize: "14px",
          paddingLeft: "10px",
        },
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
    width: "30%",
    height: "260px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    transition: "all .25s linear",
    boxShadow: "none",
    backgroundColor:"#1e4cc7",
    color:"white",
    margin: "15px",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    [breakpoints.only("md")]: {
      width: "50%",
      height: "210px",
    },
    [breakpoints.only("sm")]: {
      width: "50%",
    },
    [breakpoints.down("xs")]: {
      width: "85%",
      height: "210px",
    },
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },

  devSec: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.up("md")]: {
      height: "100%",
    },
    // [breakpoints.down("sm")]: {
    //   height: "63%",
    // },
   
  },


  dev: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.up("xl")]: {
      height: "90%",
    },
    [breakpoints.up("lg")]: {
      height: "100%",
    },
  },
  cardContent: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "96%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      height: "96%",
    },
    [breakpoints.only("xl")]: {
      height: "93%",
    },
    // [breakpoints.down("sm")]: {
    //   height: "58%",
    // },
  },
  seeMore:{ 
    textTransform: "none",
   marginLeft: "10px",
   borderRadius:"0px",
   width: "150px",
   height: "50px" }
}));
