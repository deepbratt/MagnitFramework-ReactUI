import React from "react";
import { useStyles, THEME } from "./headerStyles";
import {
  Typography,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  AppBar,
  Button,
  Paper,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Scrolltrigger from "../../../Theme/Scrolltrigger";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { pageRoutes } from "../../../Components/Path";
import { Hidden } from "@material-ui/core";

const Header = (props) => {
  const routes = Object.values(pageRoutes);
  const classes = useStyles();
  const { trigger } = Scrolltrigger();
  const {
    toolbar,
    logo,
    list,
    listItem,
    button,
    root,
    transparentAppbar,
    solidAppbar,
    link,
    active,
  } = classes;

  return (
    <>
      <Paper className={root}>
        <AppBar
          color="default"
          className={trigger === false ? transparentAppbar : solidAppbar}
          position="fixed"
        >
          <Toolbar className={toolbar} variant="dense">
            <MuiThemeProvider theme={THEME}>
              <Typography className={logo} variant="h5" color="inherit">
                Logo Here
              </Typography>
            </MuiThemeProvider>
            {/* Header Menu */}
            <Hidden mdUp>
              <SideBar />
            </Hidden>
            <Hidden smDown>
              <List className={list}>
                {routes.map(({ path, sidebarName, ...prop }, index) => {
                  return (
                    <MuiThemeProvider key={index} theme={THEME}>
                      <NavLink
                        activeClassName={active}
                        className={link}
                        to={path}
                        key={`route-${index}}`}
                      >
                        <ListItem>
                          <ListItemText
                            className={listItem}
                            primary={sidebarName}
                          />
                        </ListItem>
                      </NavLink>
                    </MuiThemeProvider>
                  );
                })}
                <ListItem>
                  <Button
                    style={{ textTransform: "none" }}
                    className={button}
                    variant="contained"
                    size={Breakpoints()}
                    color="secondary"
                  >
                    Contact Us
                  </Button>
                </ListItem>
              </List>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Paper>
    </>
  );
};

export default Header;
