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
  content: {
    background:
      "linear-gradient(223.7deg, rgba(11, 102, 35, 0.56) 0%, rgba(0, 104, 250, 0.56) 133.78%)",
    color: "white",
    minHeight: "100%",
    "& > h2": {
      textAlign: "center",
      marginTop: "30px",
    },
    "& > h5": {
      textAlign: "center",
      color: "white",
    },
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
    color: "white",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
}));

export default LayoutStyle;
