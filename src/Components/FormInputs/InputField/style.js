import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "../../../Utils/Constants/Font/index"
const {p} = fontSizes
const LayoutStyle = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginBottom: "16px",
    "& > *": {
      [theme.breakpoints.down("md")]: {
        fontSize: p.lg,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: p.sm,
      },
    },
  },
}));

export default LayoutStyle;
