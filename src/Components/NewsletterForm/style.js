import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/images/newletterSection.png";

const NewsletterStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: `url(${Image})`,
    alignItems: "center",
    justifyContent: "center",
    "& > img": {
      position: "absolute",
    },
  },
  title: {
    textAlign: "center",
    marginTop: "120px",
  },
  form: {
    width: "50%",
    display: "inline-block",
    marginBottom: "60px",
  },
  input: {
    display: "block",
    margin: "20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.1)",
    "& > .MuiOutlinedInput-root": {
      boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.1)",
    },
  },
  halfCircle: { height: "83px", right: "4%", bottom: "0px" },
  quarterCircle: {
    height: "182px",
    left: "0px",
  },
  triangle: {
    height: "83px",
    right: "4%",
    top: "5%",
  },
}));

export default NewsletterStyle;
