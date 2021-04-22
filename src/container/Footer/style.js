import { makeStyles } from "@material-ui/core/styles";

const FooterStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161C28",
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
  logo: {},
  list: {
    "& > a": {
      textDecoration: "none",
    },
  },
  section: {
    "& > h3": {
      color: "#FFFFFF",
    },
  },
  policy: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contact: {
    display: "flex",
    "& > img": {
      margin: "10px",
      padding: "15px 18px",
      border: "1px solid white",
      borderRadius: "5px",
    },
  },
}));

export default FooterStyle;
