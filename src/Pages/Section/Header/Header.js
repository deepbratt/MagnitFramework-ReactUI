import React from "react";
import { useStyles, THEME } from "./headerStyles";
import {
  Typography,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Scrolltrigger from "../../../Theme/Scrolltrigger";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { pageRoutes } from "../../../Components/Path";
import { Hidden } from "@material-ui/core";
import {Logo} from "../../../Components/Hero/Images"


const Header = (props) => {
  const routes = Object.values(pageRoutes);
  const classes = useStyles();
  const { trigger } = Scrolltrigger();
  const {
    logo,
    list,
    listItem,
    button,
    appbar,
    appbarsolid,
    link,
    active,
  } = classes;

  return (
    <>

          <Toolbar  className={!trigger ? appbar : appbarsolid} >
            <section>
              <img className={logo} alt="logo" src={Logo}/>
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
    </>
  );
};

export default Header;
