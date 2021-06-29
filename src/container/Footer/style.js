import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
const { Citrine, darkJungleGreen } = Colors;

const FooterStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: darkJungleGreen,
    // REMOVED - FOOTER PADDING
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
      textDecoration: "none",
    },
  },
  logo: {
    marginBottom: "30px",
  },
  section: {
    "& > *": {
      display: "block",
      textDecoration: "none",
      color: Citrine,
    },
  },
  copyright: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },

  policy: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    "& > *": {
      textDecoration: "none",
      color: "white",
      marginLeft: "18px",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginRight: "0px",
      },
    },
  },
  contact: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "50%",

    "& > *": {
      padding: "0 10px 15px 0",
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
