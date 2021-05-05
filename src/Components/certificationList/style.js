import { makeStyles } from "@material-ui/core";

const CertificationListStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
  },
  imageWrapper: {
    "& > img": {
      maxwidth: "458px",
      maxHeight: "458px",
    },
  },
}));

export default CertificationListStyles;
