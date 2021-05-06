import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

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
    [theme.breakpoints.down("xs")]: {
      padding: "30px 40px",
    },
  },
  logo: {
    marginBottom: "30px",
  },
  list: {
    "& > a": {
      textDecoration: "none",
      color: Citrine,
    },
    "& > h6": {
      color: "white",
      fontSize: "16px",
      fontWeight: 400
    },
  },
  section: {
    "& > h5": {
      color: "white",
    },
    "& > h6": {
      color: "white",
      fontSize: "16px",
      fontWeight: 400
    },
    "& > p": {
      color: Citrine,
    },
  },
  policy: {
    display: "flex",
    justifyContent: "flex-end",
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
}));

export default FooterStyle;
