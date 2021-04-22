import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { PartnerSectionIcons } = Colors;
const {
  appIcon,
  reliableIcon,
  innovativeIcon,
  agileIcon,
  transparencyIcon,
  moneyIcon,
  supportIcon,
  timeIcon,
  dataIcon,
} = PartnerSectionIcons;
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
    backgroundColor: appIcon,
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reliableSub: {
    backgroundColor: reliableIcon,
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
    backgroundColor: innovativeIcon,
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
    backgroundColor: agileIcon,
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  transparencySub: {
    backgroundColor: transparencyIcon,
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  moneySub: {
    backgroundColor: moneyIcon,
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
    backgroundColor: supportIcon,
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
    backgroundColor: timeIcon,
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataSub: {
    backgroundColor: dataIcon,
    height: "120px",
    width: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  app: {
    filter:
      "invert(67%) sepia(75%) saturate(700%) hue-rotate(329deg) brightness(101%) contrast(101%)",
    width: "120px",
    height: "60px",
  },
  reliable: {
    filter:
      "invert(76%) sepia(57%) saturate(544%) hue-rotate(340deg) brightness(101%) contrast(101%)",
    width: "120px",
    height: "60px",
  },
  innovative: {
    filter:
      "invert(78%) sepia(53%) saturate(604%) hue-rotate(105deg) brightness(91%) contrast(87%)",
    width: "120px",
    height: "60px",
  },
  agile: {
    filter:
      "invert(55%) sepia(36%) saturate(593%) hue-rotate(205deg) brightness(91%) contrast(82%)",
    width: "120px",
    height: "60px",
  },
  transparency: {
    filter:
      "invert(58%) sepia(33%) saturate(5510%) hue-rotate(140deg) brightness(98%) contrast(77%)",
    width: "120px",
    height: "60px",
  },
  money: {
    filter:
      "invert(23%) sepia(100%) saturate(2158%) hue-rotate(288deg) brightness(79%) contrast(102%)",
    width: "120px",
    height: "60px",
  },
  quality: {
    filter:
      "invert(60%) sepia(54%) saturate(1822%) hue-rotate(318deg) brightness(99%) contrast(91%)",
    width: "120px",
    height: "60px",
  },
  support: {
    filter:
      "invert(80%) sepia(23%) saturate(605%) hue-rotate(86deg) brightness(90%) contrast(94%)",
    width: "120px",
    height: "60px",
  },
  geeky: {
    filter:
      " invert(51%) sepia(90%) saturate(1553%) hue-rotate(176deg) brightness(101%) contrast(102%)",
    width: "120px",
    height: "60px",
  },
  time: {
    filter:
      "invert(68%) sepia(38%) saturate(3810%) hue-rotate(227deg) brightness(102%) contrast(101%)",
    width: "120px",
    height: "60px",
  },
  data: {
    filter:
      "invert(62%) sepia(38%) saturate(4558%) hue-rotate(200deg) brightness(91%) contrast(93%)",
    width: "120px",
    height: "60px",
  },
  iso: {
    filter:
      "invert(74%) sepia(83%) saturate(333%) hue-rotate(136deg) brightness(101%) contrast(76%)",
    width: "120px",
    height: "60px",
  },
}));
