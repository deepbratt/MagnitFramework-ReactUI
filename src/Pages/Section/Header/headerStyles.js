import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const {
  transparentWildSand,
  WildSand,
  mainSlide,
  blackColor,
  greyColor,
  Ash
} = Colors;

export const THEME = createMuiTheme({
  overrides: {
    MuiButton: {
      root:{
        borderRadius: "none",
        fontFamily: "Poppins",
      }
    },
    MuiTypography: {
      h5: {
        fontFamily: "Poppins",
      },
    },
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
    boxShadow: "none",
    backgroundColor: transparentWildSand,
    width: "100%",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
    zIndex: 2,
    transition: "all .5s linear",
    borderBottom: `solid 1px ${transparentWildSand}`,

  },
  appbarsolid: {
    boxShadow: "none",
    backgroundColor: WildSand,
    width: "100%",
    fontSize: "16px",
    display: "flex",
 
    zIndex: 2,
    justifyContent: "space-around",
    transition: "all .5s linear",
    borderBottom: `solid 3px ${Ash}`
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
    justifyContent: "space-around",
  },
  list: {
    fontSize: "16px",
    display: "flex",
    fontWeight: "600",
    fontFamily: "Poppins', sans-serif",
    whiteSpace: "nowrap",
  },
  listItem: {
    "&:hover": {
      color: blackColor,
      cursor: "pointer",
    },
  },

  link: {
    marginTop: "5px",
    textDecoration: "none",
    color: greyColor,
  },
  active: {
    color: blackColor,
  },
  logo: {
    [theme.breakpoints.up("lg")]: {
      width: "150px",
      marginRight: "15px"
    },
    [theme.breakpoints.down("md")]: {
      width: "110px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
}));
