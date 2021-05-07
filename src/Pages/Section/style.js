import { makeStyles } from "@material-ui/core/styles";
import {Colors} from '../../Theme/color.constants'

const {Harlequin} = Colors;

const LayoutStyle = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
  },
  content: {
    position: "relative",
    margin: "0 8%",
    "& > img": {
      position: "absolute",
      height: "146px",
    },
  },
  header: {
    marginBottom: "60px",
  },
  startQuote1: {
    left: "-8%",
    top: "9%"
  },
  startQuote2: {
    left: "1%",
    top: "9%"
  },
  endQuote1: {
    right: "-8%",
    bottom: "-3%"
  },
  endQuote2: {
    right: "1%",
    bottom: "-3%"
  },
  hightlightWords:{
    background:`linear-gradient(to top, ${Harlequin} 50%, transparent 50%)`
  }
}));

export default LayoutStyle;
