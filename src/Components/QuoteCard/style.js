import { makeStyles } from "@material-ui/core/styles";

const CardStyle = makeStyles((theme) => ({
  root: {
    margin: "20px 10px",
    padding: "40px",

    [theme.breakpoints.down("sm")]: {
      margin: "10px 5px",
      padding: "20px",
    },
    boxShadow: "0px 4px 50px 5px rgba(0, 0, 0, 0.03)",
  },
  content: {
    display: "flex",
    padding: "25px 0 0 0",
    flexWrap: "wrap",
    "& > p": {
      margin: "10px",
    },
  },
  startQuote: {
    margin: "2px",
    maxWidth: "10px",
    alignItems: "left",
  },
  endQuote: {
    margin: "2px",
    maxWidth: "10px",
    justifyContent: "right",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  author: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    // "& > div > h6": {
    
    // },
  },
  avatar: {},
}));

export default CardStyle;
