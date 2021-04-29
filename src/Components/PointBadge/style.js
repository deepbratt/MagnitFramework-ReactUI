import { makeStyles } from "@material-ui/core";

const PointBadgeStyles = makeStyles((theme) => ({
  vertical: {
    margin: "15px",
  },
  inline: { display: "flex", margin: "20px" },
  badge: {
    borderRadius: "5px",
    padding: "25px",
    margin: "15px",
  },
  contentLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },
  contentRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default PointBadgeStyles;
