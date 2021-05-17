import { makeStyles } from "@material-ui/core";

const OurBlogsStyles = makeStyles((theme) => ({
  coverImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    "& > *": {
      textAlign: "left",
    },
  },
  blogDetail: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: "20px",
    "& > *": {
      color: "grey",
    },
    "& > div > div > h6": {
      color: "black",
    },
    "& > .left": {
      display: "flex",
      alignItems: "center",
      "& > *": {
        margin: "0 5px",
      },
    },
  },
  light: {
    fontWeight: "300",
  },
}));

export default OurBlogsStyles;
