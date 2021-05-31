import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const { BlueRibbon, whiteColor } = Colors;

export const THEME = createMuiTheme({
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       borderRadius: 0,
  //       color: "black",
  //       fontFamily: "Poppins",
  //       boxShadow: "none",
  //     },
  //   },
  //   MuiTypography: {
  //     h5: {
  //       fontFamily: "Poppins",
  //       fontWeight: "bolder",
  //       textAlign: "center",
  //       whiteSpace: "nowrap",
  //     },
  //   },
  // },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "60px",
    margin: "0px",
    padding: "0px",
    backgroundColor: BlueRibbon,
    width: "100%",
    paddingBottom: "90px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: whiteColor,
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    "&:hover": {
      boxShadow: "0px 4px 50px 5px rgba(0, 0, 0, 0.06)",
      backgroundColor: "#fff",
    },
    cursor: "pointer",
  },
  devSec: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    width: "65px",
  },
}));
