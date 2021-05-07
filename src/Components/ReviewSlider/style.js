import { makeStyles } from "@material-ui/core";

const ReviewSliderStyles = makeStyles((theme) => ({
  grid: {
    margin: "80px 0",
    [theme.breakpoints.down("md")]: {
      margin: "60px 0",
    },
  },
  root: {
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
      margin: "5px",
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  content: {
    "& > p": {
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
  },
}));

export default ReviewSliderStyles;
