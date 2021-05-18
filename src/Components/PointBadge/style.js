import { makeStyles } from "@material-ui/core";
import {Colors} from "../../Theme/color.constants"
const {Harlequin,Mirage,darkSilver,}=Colors;
const PointBadgeStyles = makeStyles((theme) => ({
  vertical: {
    margin: "15px",
    zIndex:1,
    "&:hover": {
     border:`solid 1px ${Harlequin}`,
     boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    },
  },
  inline: { display: "flex",
   margin: "20px 0px" ,
    },
  badge: {
    borderRadius: "5px",
    padding: "25px",
    margin: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "25px",
      padding: "15px",
      margin: "10px",
    },
  },
  contentLeft: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    "& > p": {
      color:darkSilver,
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
    color:Mirage,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  contentRight: {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > p": {
      color:darkSilver,
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
      color:Mirage,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
}));

export default PointBadgeStyles;
