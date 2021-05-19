import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { Harlequin, cetaceanBlue } = Colors;
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
    borderRadius: "5px",
    boxShadow: "0px 4px 50px 5px rgba(0, 0, 0, 0.06)",
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
  error: {
    fontSize: "0.75rem",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    marginTop: "7rem",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-Start",
    "& > *": {
      color: cetaceanBlue,
      textAlign: "left",
    },
    "& > img": {
      maxWidth: "36px",
      margin: "10px 0",
    },
  },
}));

export default ContactUsStyles;
