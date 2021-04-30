import { makeStyles } from "@material-ui/core";
const drawerWidth = 260;

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
    color: "white",
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
  closeIcon:{
    "&:hover": {
      cursor: "pointer"
    },
  },
  menuIcon: {
    closeIcon:{
      "&:hover": {
        cursor: "pointer"
      },
    }},
    link:{
      marginTop: "5px",
      textDecoration: "none",
    },
}));
