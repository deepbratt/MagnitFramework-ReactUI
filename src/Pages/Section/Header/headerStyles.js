import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";

const { WildSand, harlequinDark, blackColor, greyColor, Ash } =
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
    fontSize: 15,
    // lineHeight: 1.5,
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
    fontSize: "16px",
    display: "flex",
    // justifyContent: "space-around",
  },
  toolbarSub: {
    fontSize: "16px",
    display: "flex",
    // justifyContent: "space-around",
  },
  list: {
    fontSize: "16px",
    display: "flex",
    fontWeight: "600",
    fontFamily: "Poppins', sans-serif",
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    color: greyColor,
    "&:hover": {
      color: blackColor,
      cursor: "pointer",
    },
  },
  listItem: {
    color: greyColor,
    marginRight: "20px",
    "&:hover": {
      color: blackColor,
      cursor: "pointer",
    },
  },

  link: {
    // marginTop: "5px",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  active: {
    color: blackColor,
    transition: "all .4s linear",
    "&:hover": {
      color: theme.palette.common.white,
      transition: "all .4s linear",
    },
  },
  logo: {
    width: "7rem",
    paddingLeft: "24px",
  },
  menu: {
    width: "250px",
    marginTop: "10px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    transition: "all .5s linear",

    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: harlequinDark,
      color: theme.palette.common.white,
      transition: "all .5s linear",
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}));
