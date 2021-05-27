import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";

const { whiteColor, Harlequin, blackColor, Solitude } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    marginBottom: "50px",
    backgroundColor: Solitude,
    padding: "50px 0px 50px 0px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
    marginTop: "50px",
  },
  devSec: {
    color: blackColor,
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  card: {
    height: "280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: whiteColor,
    margin: "10px",
  },
  button: {
    marginTop: "10px",
    marginBottom: "20px",
    backgroundColor: whiteColor,
    transition: "all .3s linear",
    color: blackColor,
    border: `solid 1px ${Harlequin}`,
    "&:hover": {
      backgroundColor: Harlequin,
      color: whiteColor,
      transition: "all .3s linear",
    },
  },
}));
