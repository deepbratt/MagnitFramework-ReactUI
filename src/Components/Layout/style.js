import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: "0px",
    margin: "0px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default LayoutStyle;
