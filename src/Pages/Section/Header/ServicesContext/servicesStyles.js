import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../../Theme/color.constants";

const {Harlequin,whiteColor } = Colors;
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
          textAlign: "center",
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
          fontSize: "16px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
  cardSec: {
    display: "flex",
    flexFlow: "wrap",
    marginTop: "40px",
    marginBottom: "40px",
    justifyContent: "center",
  },
  card: {
    width: "24%",
    height: "360px",
    display: "flex",
    margin: "4px",
    flexDirection: "column",
    border: `solid 1px ${whiteColor}`,
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    border: `solid 1px ${Harlequin}`,
    transition: "all .25s linear",
   },

    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
      margin: "20px",
    },
    [breakpoints.only("sm")]: {
      width: "60%",
      margin: "20px",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
      margin: "20px",
    },
  },
  appSub: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  app: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  devSub: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dev: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  webSub: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  web: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  digitalSub: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  digital: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: "98px",
    height: "60px",
  },
  
  underlined:{
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ":{
      position: "absolute",
      height: "17px",
      content: '""',
      left: 0,
      zIndex: -1,
      right: 0,
      color: "#000",
      backgroundColor: Harlequin,
      bottom: "5px", 
      [breakpoints.down("sm")]: {
        height: "11px",
      },
      [breakpoints.down("xs")]: {
        height: "8px",
      },
  }
  }
}));
