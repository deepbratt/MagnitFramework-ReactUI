import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../../Theme/color.constants";
const drawerWidth = 260;
const { blackColor, mainSlide } = Colors;
export const THEME = createMuiTheme({
  overrides: {
    MuiTypography: {
      color: blackColor,
    },
  },
  typography: {
    fontSize: 15,
    lineHeight: 1.5,
    letterSpacing: 0.32,
    fontFamily: "Poppins",
    color: blackColor,
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
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
    closeIcon: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  link: {
    marginTop: "5px",
    textDecoration: "none",
    color: blackColor,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  },
}));
