import { makeStyles } from "@material-ui/core";

export const ContactUsStyles = makeStyles((theme) => ({
  root: {},
  awardSection: {
    margin: "50px 0",
    background:
      "linear-gradient(180.04deg, #2CD400 -46.18%, rgba(255, 255, 255, 0) 99.96%), #FFFFFF",
    backgroundBlendMode: "multiply, normal",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  imageContainer: {
    backgroundColor: "white",
    width: "100px",
    height: "50px",
    margin: "20px",
    "& > img": {
      maxHeight: "100px",
      margin: "-25px 0"
    },
  },
}));

export default ContactUsStyles;
