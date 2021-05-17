import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { BlueRibbon } = Colors;

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
  latestBlogCard: {
    width: "95%",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    boxShadow: "0px 4px 80px 15px rgba(0, 0, 0, 0.06)",
    "& > *": {
      textAlign: "left",
    },
  },
  coverImg: {
    height: "200px",
    maxHeight: "200px",
  },
  latestBlogCardContent: {
    padding: "15px",
  },
  latestBlogDetailCategory: {
    borderLeft: `3px solid ${BlueRibbon}`,
    borderRight: `3px solid ${BlueRibbon}`,
    margin: "0 10px",
    padding: "0 10px",
  },
  latestBlogDetail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    "& > div > h2": {
      fontSize: "1.125rem",
    },
  },
  authorName: {
    fontSize: "1rem",
  },
  authorDesig: {
    fontSize: "0.75rem",
    color: "grey",
    fontWeight: "400",
  },
  dateStyle: {
    fontSize: "0.75rem",
    fontWeight: "400",
  },
}));

export default OurBlogsStyles;
