import { makeStyles } from "@material-ui/core";

const FormStyles = makeStyles((theme) => ({
  form: {
    textAlign: "left",
    margin: "30px",
  },
  label: {
    fontSize: "1.125rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
}));

export default FormStyles;