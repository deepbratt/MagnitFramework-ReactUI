import { makeStyles } from "@material-ui/core";

const HomeStyles = makeStyles((theme) => ({
  leftRoot: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  rightRoot: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

export default HomeStyles;
