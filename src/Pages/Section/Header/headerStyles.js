import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const {
  transparentAppBar,
  solidAppBar,
  mainSlide,
  blackColor,
  greyColor,
} = Colors;

export const THEME = createMuiTheme({
  overrides: {
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
    backgroundColor: mainSlide,
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: transparentAppBar,
    width: "100%",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    zIndex: 2,
    transition: "all .5s linear",
  },
  appbarsolid: {
    boxShadow: "none",
    backgroundColor: solidAppBar,
    width: "100%",
    position: "fixed",
    zIndex: 2,
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
    transition: "all .5s linear",
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
