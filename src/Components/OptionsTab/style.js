import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fontSizes } from "../../Utils/Constants/Font/index";
const { h5, p } = fontSizes;
const breakpoints = createBreakpoints({});
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
    fontSize: "14px",
    borderRadius: "5px",
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
    fontWeight: 400,
    fontSize: h5.lg,
    color: chineseWhite,
    lineHeight: 1.5,
    margin: ".5rem 0rem 1rem 0rem",
    letterSpacing: ".4",
  },
  bulletText: {
    fontWeight: 400,
    fontSize: p.lg,
    color: whiteColor,
    lineHeight: "20.34px",
  },
  textDiv:{
    display:"flex",
    marginBottom:".4rem"
  }
  ,
  trialBtn:{
    marginTop:".5rem"
  }
}));


export default OptionTabStyles;
