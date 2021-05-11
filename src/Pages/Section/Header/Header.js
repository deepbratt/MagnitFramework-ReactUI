import React from "react";
import { useStyles, THEME } from "./headerStyles";
import {
  // Typography,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  Button,
  AppBar,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import Scrolltrigger from "../../../Theme/Scrolltrigger";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { pageRoutes } from "../../../Components/Path";
import { Hidden } from "@material-ui/core";
import { Logo } from "../../../Components/Hero/Images";
import { Colors } from "../../../Theme/color.constants";

const Header = (props) => {
  const routes = Object.values(pageRoutes);
  const classes = useStyles();
  const { Harlequin, whiteColor } = Colors;
  // const { trigger } = Scrolltrigger();
  const {
    logo,
    list,
    listItem,
    button,
    appbarsolid,
    link,
    root,
    active,
  } = classes;

  return (
    <>
      <AppBar className={root} position="sticky">
        <Toolbar className={appbarsolid}>
          <section>
            <img className={logo} alt="logo" src={Logo} />
          </section>
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
                {/* <MuiThemeProvider theme={THEME}>
                  <Button
                    style={{
                      textTransform: "none",
                      backgroundColor: Harlequin,
                      color: whiteColor,
                    }}
                    className={button}
                    variant="contained"
                    size={Breakpoints()}
                  >
                    <NavLink
                      className={link}
                      activeClassName={active}
                      to={"/contactUs"}
                    >
                      Contact Us
                    </NavLink>
                  </Button>
                </MuiThemeProvider> */}
              </ListItem>
            </List>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
