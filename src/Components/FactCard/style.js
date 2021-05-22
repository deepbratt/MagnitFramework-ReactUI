import { makeStyles } from "@material-ui/core/styles";
const FactCardStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "5px",
    margin: "10px",
    padding: "25px",
    width: "100%",
  },
  header: {
    color: "white",
  },
  subText: {
    fontWeight: "400",
    color: "white",
  },
}));

export default FactCardStyles;
