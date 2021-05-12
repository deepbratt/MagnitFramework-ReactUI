import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { Harlequin } = Colors;
export const ContactUsStyles = makeStyles((theme) => ({
  root: {},
  awardSection: {
    margin: "50px 0",
    background: `linear-gradient(180.04deg, ${Harlequin} -46.18%, rgba(255, 255, 255, 0) 99.96%), white`,
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
      margin: "-25px 0",
    },
  },
  label: {
    color: "black",
    "& > *": {
      color: "black",
    },
  },
}));

export default ContactUsStyles;
