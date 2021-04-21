import { makeStyles } from "@material-ui/core/styles";

const FactCardStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "5px",
  },
  header: {
    fontSize: "3rem",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  subText: {
    fontSize: "1.5rem",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

export default FactCardStyles;
