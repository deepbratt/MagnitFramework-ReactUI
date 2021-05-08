import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
  },
  form: {
    textAlign: "left",
    margin: "30px",
  },
  wrap: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  cover: {
    position: "absolute",
    objectFit: "cover",
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    opacity: 0.2,
    maxHeight: "100%",
  },
  label: {
    fontSize: "1.125rem",
    color: "white",
  },
  error: {
    fontSize: "0.75rem",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
}));

export default LayoutStyle;
