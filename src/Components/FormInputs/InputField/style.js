import { makeStyles } from "@material-ui/core/styles";

const LayoutStyle = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginBottom: "16px",
    "& > *": {
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
    },
  },
}));

export default LayoutStyle;
