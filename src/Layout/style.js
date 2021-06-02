import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "0px",
    position: "relative",
  },
}));

export default LayoutStyle;
