import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { PartnerSectionIcons } = Colors;
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      h5: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "22px",
        whiteSpace: "nowrap",
        [breakpoints.down("xs")]: {
          fontSize: "17px",
        },
      },
      paragraph: {
        fontFamily: "Poppins",
        fontSize: "16px",
        marginTop: "10px",
        [breakpoints.down("xs")]: {
          fontSize: "14px",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
  },
  card: {
    width: "100%",
    height: "165px",
    margin: "10px",
    cursor: "pointer",
    boxShadow: "none",
    [breakpoints.down("md")]: {
      width: "100%",
      height: "200px"
    },
    [breakpoints.down("xs")]: {
      height: "210px",
    },
  },

  devSec: {
    height: "100px",
    display: "flex",
    textAlign: "left",
  },
  content: {
    paddingLeft: "20px",
  },
  devSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reliableSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.only("sm")]: {
      width: "250px",
    },
  },
  innovativeSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.only("sm")]: {
      width: "260px",
    },
  },
  agileSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  transparencySub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  moneySub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.only("sm")]: {
      width: "250px",
    },
  },
  supportSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.only("sm")]: {
      width: "220px",
    },
  },
  timeSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataSub: {
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  Icons: {
    width: "120px",
    height: "60px",
  },
 
}));
