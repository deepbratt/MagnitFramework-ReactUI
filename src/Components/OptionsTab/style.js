import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { skyBlue, whiteColor,Harlequin,chineseWhite, BlackSqueeze } = Colors;


const OptionTabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: BlackSqueeze,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  tabs: {
    margin: "10px",
    border: "none",
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px 5px 10px 0px"
    },
    "& .MuiTabs-flexContainerVertical": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: " column",
      },
    },
    "& > .PrivateTabIndicator-colorSecondary-79, .PrivateTabIndicator-colorSecondary-81":
      {
        width: "0px",
      },
  },
  tab: {
    margin: "10px",
    border: `solid 1px ${Harlequin}`,
    color: "black",
    borderRadius: "5px",
    textTransform: "initial",
    "& > .MuiTab-textColorInherit": {
      opacity:1
    },
    "& .MuiTab-textColorInherit .Mui-selected": {
      backgroundColor: Harlequin,
      color: whiteColor,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  tabPanel: {
    backgroundColor: skyBlue,
    color: whiteColor,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    "& > *": {
      color: whiteColor,
    },
  },
  detail: {
    color: chineseWhite,
    lineHeight: 1.5,
    margin: ".5rem 0rem 1rem 0rem",
    letterSpacing: ".4",
    fontWeight:"normal",
    textTransform: "inherit",
    
  },
  bulletText: {
    fontWeight: "normal",
    textTransform: "inherit",
    color: whiteColor,
    lineHeight: "20.34px",
  },
  textDiv:{
    display:"flex",
    marginBottom:".4rem",
    alignItems: "baseline"
  }
  ,
  trialBtn:{
    marginTop:".5rem",
    textTransform: "initial",
  }
}));


export default OptionTabStyles;
