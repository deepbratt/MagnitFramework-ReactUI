import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    // padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: "0px",
    margin: "0px",
  },
}));

export default LayoutStyle;
