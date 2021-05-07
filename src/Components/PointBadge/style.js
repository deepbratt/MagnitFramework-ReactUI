import { makeStyles } from "@material-ui/core";

const PointBadgeStyles = makeStyles((theme) => ({
  vertical: {
    margin: "15px",
    "&:hover": {
     border: "1px solid #2CD400"
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& > h3": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
}));

export default PointBadgeStyles;
