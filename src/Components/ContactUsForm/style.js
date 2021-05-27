import { makeStyles } from "@material-ui/core";

const FormStyles = makeStyles((theme) => ({
  form: {
    textAlign: "left",
    margin: "30px",
  },
  button: {
    borderRadius: "5px",
  },
  privacyPolicy: {
    display: "flex",
    marginBottom: "15px",
    "& > *": {
      color: "grey",
      marginRight: "5px",
    },
  },
}));

export default FormStyles;
