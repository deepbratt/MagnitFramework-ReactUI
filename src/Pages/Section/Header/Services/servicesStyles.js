import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "35px",
        lineHeight: 1.6,
        fontWeight: "bolder",
        textAlign: "center",
        [breakpoints.only("sm")]: {
          fontSize: "28px",
          marginTop: "40px",
          textAlign: "center"
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "bolder",
        fontSize: "20px",
        marginTop: "22px",
        textAlign: "center",
      },
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "16px",
        textAlign: "center",
        marginTop: "10px",
        [breakpoints.down("xs")]: {
          fontSize: "14px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px"
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent: "center",
  },
  card: {
    width: "20%",
    height: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" },
    margin: "20px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  appSub:{
    backgroundColor: "#FFF1E4", 
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  app:{
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  devSub:{
    backgroundColor: "#FFEAE9", 
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  dev:{
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  webSub:{
    backgroundColor: "#EEFAF6", 
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  web:{
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  digitalSub:{
    backgroundColor: "#E5F9FF", 
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  digital:{
    height: "120px",
     width:"120px", 
     display: "flex",
      justifyContent: "center",
       alignItems: "center"
  },
  devSec: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appSec: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  webSec: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  digitalSec: {
 
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    filter:
      "invert(67%) sepia(75%) saturate(700%) hue-rotate(329deg) brightness(101%) contrast(101%)",
    width: "98px",
    height: "60px",
  },
  appIcon: {
    filter:
      "invert(60%) sepia(54%) saturate(1822%) hue-rotate(318deg) brightness(99%) contrast(91%)",
    width: "98px",
    height: "60px",
  },
  webIcon: {
    filter:
      "invert(78%) sepia(53%) saturate(604%) hue-rotate(105deg) brightness(91%) contrast(87%)",
    width: "98px",
    height: "60px",
  },
  digitalIcon: {
    filter:
      "invert(72%) sepia(90%) saturate(3023%) hue-rotate(170deg) brightness(104%) contrast(111%)",
    width: "98px",
    height: "60px",
  },
}));
