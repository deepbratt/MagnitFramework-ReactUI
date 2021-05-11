import { makeStyles } from "@material-ui/core";

const BannerStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0",
    backgroundColor: "transparent",

    background:
      " linear-gradient(-181.96deg , #2CD400 -98.18%, rgba(255, 255, 255, 0) 85.96%)",
    backgroundBlendMode: "multiply",
  },
  imageWrapper: {
    position: "relative",
    margin: "30px",
    "& > img": {
      width: "350px",
      [theme.breakpoints.down("sm")]: {
        width: "250px",
      },
    },
  },
  patternPosition: {
    position: "absolute",
    right: "-8%",
    top: "-8%",
    height: "700px",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      right: "0%",
      top: "-5%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "350px",
      right: "3%",
      top: "3%",
    },
  },
  breadCrumbStyle: { margin: "20px 50px" },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "50px",
    color: "black",
    "& > h1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
}));

export default BannerStyles;
