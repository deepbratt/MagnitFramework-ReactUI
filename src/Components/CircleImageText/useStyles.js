import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const useStyles = makeStyles((theme) => ({
  svgElementWrapper: {
    position: "relative",
    cursor: "pointer",
    display:"flex",
    justifyContent:"flex-start",
    // width:"100%",
    "&:hover > svg path:nth-of-type(1)": {
      fill: Colors.shineBlue,
    },
  },
  svgElement: {
    position: "absolute",
    left: "0%",
    top: "50%",
    transform: "translate(0%, -50%)",
    width:"100px"
  },

  svgElementBg:{
    width:"100px"
  },

  textStylesLeft: {
    marginRight: "10px",
    textAlign:"right",
  },
  textStylesRight: {
    marginLeft: "10px",
    textAlign:"left",
  },

  wrapper:{
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"400px",
      [theme.breakpoints.down("sm")]: {
        margin:"0 3%",
      }
     
  }
}));

export default useStyles;
