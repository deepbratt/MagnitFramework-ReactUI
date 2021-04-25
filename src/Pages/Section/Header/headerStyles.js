import {  makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {Colors} from "../../../Theme/color.constants"

const {mainSlide,scrolledNavColor} = Colors

export const THEME = createMuiTheme({
  overrides:{
    MuiTypography:{
     h5:{
      fontFamily: "Poppins",
     }
    }
  },
  typography: {
    fontSize: 15,
    lineHeight: 1.5,
    letterSpacing: 0.32,
    fontFamily: "Poppins",
    h5: {
      fontWeight: 600,
     
    },
    button: {
      textTransform: "none",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    margin: 0,
    backgroundColor: mainSlide ,
    transition: "all .5s ease-out"
  
  },
  scrolled:{
    flexGrow: 1,
    boxShadow: "none",
    margin: 0,
    backgroundColor: scrolledNavColor,
    height: 63,
    transition: "all .5s ease-out"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
   
  },
  toolbarSub: {
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around"
  },
  list: {
    fontSize: "16px",
    display: "flex",
    fontWeight: "600",
    fontFamily: "Poppins', sans-serif",
    whiteSpace: "nowrap",
  },
  listItem:{
    "&:hover": {
      color: "black",
      cursor: "pointer"
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
}));
