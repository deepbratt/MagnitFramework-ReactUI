import { makeStyles } from "@material-ui/core";

const ReviewSliderStyles = makeStyles((theme) => ({
  root: { borderRadius: "10px", padding: "20px", margin: "20px" },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default ReviewSliderStyles;
