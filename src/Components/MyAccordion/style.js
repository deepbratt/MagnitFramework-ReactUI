import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    margin: "0px",
    "& > h6": {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem",
      },
    },
  },
  title: {
    margin: "5px",
    textAlign: "left",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.55rem",
    },
  },
  details: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.60rem",
    },
  },
}));

export default LayoutStyle;
