import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/images/newletterSection.png";

const NewsletterStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    alignItems: "center",
    justifyContent: "center",
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
    boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.1)",
    width: "60%",
    borderRadius: "5px"
  },
}));

export default NewsletterStyle;
