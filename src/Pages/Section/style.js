import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
  },
  content: {
    position: "relative",
    margin: "0 8%",
    "&> img": {
      position: "absolute",
      height: "146px",
    },
  },
  header: {
    marginBottom: "60px",
  },
  startQuote1: {
    left: "-8%",
    top: "9%"
  },
  startQuote2: {
    left: "1%",
    top: "9%"
  },
  endQuote1: {
    right: "-8%",
    bottom: "-3%"
  },
  endQuote2: {
    right: "1%",
    bottom: "-3%"
  },
}));

export default LayoutStyle;
