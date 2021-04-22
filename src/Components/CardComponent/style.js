import { makeStyles } from "@material-ui/core/styles";

const CardStyle = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
  },
  content: {
    margin: "10px",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "20px",
  },
  author: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  avatar: {},
}));

export default CardStyle;
