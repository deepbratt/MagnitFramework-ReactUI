import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

const { DoveGray } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  card: {
    display: "flex",
    zIndex: 1,
    flexDirection: "column",
    alignItems: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    padding: "20px",
    textAlign: "center",
    borderRadius: "5px",
  },

  RightPattern: {
    position: "absolute",
    right: "0px",
    top: "0px",
    zIndex: 0,
    maxWidth: "500px",
  },
  LeftPattern: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    zIndex: 0,
    maxWidth: "300px",
  },
  remoteArea: {
    color: DoveGray,
    paddingTop: "10px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  bottomStyle: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
}));
