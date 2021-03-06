import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const { WildSand, blackColor } =
  Colors;

export const THEME = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "none",
        fontFamily: "Poppins",
      },
    },
    MuiTypography: {
      h5: {
        fontFamily: "Poppins",
      },
    },
  },
  typography: {
    // lineHeight: 1.5,
    letterSpacing: 0.32,
    fontFamily: "Poppins",

    button: {
      textTransform: "none",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // transparentAppbarsolid: {
  //   boxShadow: "none",
  //   backgroundColor: transparentWildSand,
  //   width: "100%",
  //   fontSize: "16px",
  //   display: "flex",
  //   justifyContent: "space-around",
  //   zIndex: 1,
  //   transition: "all .5s linear",
  //   borderBottom: `solid 1px ${transparentWildSand}`,

  // },
  root: {
    boxShadow: "none",
    width: "100%",
    backgroundColor: WildSand,
  },
  appbarsolid: {
    boxShadow: "none",
    backgroundColor: WildSand,
    width: "100%",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "space-between",
    transition: "all .5s linear",
    // borderBottom: `solid 3px ${Ash}`,
    padding: "0 !important",
  },
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    // justifyContent: "space-around",
  },
  list: {
    display: "flex",
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    color: blackColor,
  },
  listItem: {
    marginRight: "20px",
    "&:hover": {
      color: blackColor,
      cursor: "pointer",
    },
  
  },

  link: {
    // marginTop: "5px",
    textDecoration: "none",
    color: "black",
    textTransform: "uppercase",
  },
  active: {
    color: blackColor,
  },
  events:{
      textDecoration: "none",
      color: "black",
      textTransform: "uppercase",
      pointerEvents: "none"
  },
  logo: {
    width: "9rem",
    paddingLeft: "24px",
  },
  menu: {
    width: "300px",
    display: "flex",
    justifyContent: "center",
    transition: "all .5s linear",
    backgroundColor: WildSand,
  },
}));
