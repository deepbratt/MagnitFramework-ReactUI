import { makeStyles } from "@material-ui/core/styles";

const CardStyle = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
    padding: "50px",
    boxShadow: "0px 4px 50px 5px rgba(0, 0, 0, 0.03)",
  },
  content: {
    display: "flex",
    padding: "40px 0 0 0",
    flexWrap: "wrap",
    "& > p": {
      margin: "10px",
      fontSize: "1rem",
    },
  },
  startQuote: {
    margin: "2px",
    height: "20px",
    alignItems: "left",
  },
  endQuote: {
    margin: "2px",
    justifyContent: "right"
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "20px",
  },
  author: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  avatar: {},
}));

export default CardStyle;
