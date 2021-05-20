import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
import {fontSizes} from "../../Utils/Constants/Font/index"
const {h3} = fontSizes
const { Citrine, darkJungleGreen } = Colors;

const FooterStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: darkJungleGreen,
    padding: "40px 150px",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 100px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "40px 70px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 20px",
    },
    "& > *": {
      color: "white",
    },
  },
  logo: {
    marginBottom: "30px",
  },
  list: {
    "& > a, h5": {
      textDecoration: "none",
      color: Citrine,
    },
    "& > h6": {
      fontSize: h3.lg,
      fontWeight: 400,
    },
  },
  section: {
    "& > h6": {
      fontSize: h3.lg,
      fontWeight: 400,
    },
    "& > p": {
      color: Citrine,
    },
  },
  policy: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      margin: "0 0 0 15px",
    },
  },
  contact: {
    display: "flex",
    "& > img": {
      maxWidth: "46px",
      maxHeight: "46px",
      margin: "10px 10px 0px 0px",
      padding: "15px 18px",
      border: "1px solid white",
      borderRadius: "5px",
    },
  },
  sectionBorder: {
    position: "relative",
    marginTop: "10px",
    paddingTop: "10px",
    borderTop: "1px solid white",
  },
}));

export default FooterStyle;
