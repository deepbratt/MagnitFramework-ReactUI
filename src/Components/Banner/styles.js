import { makeStyles } from "@material-ui/core";
import { fontSizes } from "../../Utils/Constants/Font/index";
import { Colors } from "../../Theme/color.constants";
const { Harlequin } = Colors;
const BannerStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "2rem",
    backgroundColor: "transparent",
    background: `linear-gradient(-181.96deg , ${Harlequin} -98.18%, rgba(255, 255, 255, 0) 85.96%)`,
    backgroundBlendMode: "multiply",
  },
  imageWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    "& > img": {
      width: "350px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  patternPosition: {
    position: "absolute",
    right: "-8%",
    top: "-80%",
    height: "700px",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      right: "-29%",
      top: "-45%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "350px",
      right: "3%",
      top: "3%",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

export default BannerStyles;
