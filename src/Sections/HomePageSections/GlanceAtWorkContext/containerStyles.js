import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const { Mariner, whiteColor } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    paddingBottom: "20px",
    justifyContent: "space-evenly",
  },
  cardSec: {
    display: "flex",
    width: "100%",

    justifyContent: "space-evenly",
    flexFlow: "wrap",
  },
  card: {
    paddingTop: "20px",
    width: "100%",
    background: whiteColor,
    display: "flex",
    flexDirection: "column",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
  },

  devSec: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px 6px",
  },
  cardContent: {
    width: "100%",
    backgroundColor: Mariner,
    textAlign: "center",
    color: whiteColor,
    padding: "15px",
  },
  leftPattern: {
    position: "absolute",
    left: "-5%",
    bottom: "-10%",
    zIndex: 0,
  },
  rightPattern: {
    position: "absolute",
    right: "-10%",
    top: "-10%",
  },
}));
