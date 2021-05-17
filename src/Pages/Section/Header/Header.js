import React from "react";
import { useStyles, THEME } from "./headerStyles";
import {
  Typography,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  Button,
  AppBar,
  LinearProgress
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Scrolltrigger from "../../../Theme/Scrolltrigger";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { pageRoutes } from "../../../Components/Path";
import { Hidden } from "@material-ui/core";
import { Logo } from "../../../Components/Hero/Images";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";

const Header = (props) => {
  const routes = Object.values(pageRoutes);
  const classes = useStyles();
  const { Harlequin, whiteColor } = Colors;
  const { trigger } = Scrolltrigger();
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

  const navigated=()=>{
    props.resetLoader()
  }

  return (
    <>
    <AppBar  className={root} position="sticky">
      <Toolbar  className={appbarsolid}>
        <section>
          <CustomImage className={logo} alt="logo" src={Logo} />
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
                    onClick={navigated}
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
              <MuiThemeProvider theme={THEME}>
                <Button
                  style={{
                    textTransform: "none",
                    backgroundColor: Harlequin,
                    color: whiteColor,
                  }}
                  className={button}
                  variant="contained"
                  size={Breakpoints()}
                  onClick={navigated}
                >
                  Contact Us
                </Button>
              </MuiThemeProvider>
            </ListItem>
          </List>
        </Hidden>
      </Toolbar>
      <LinearProgress variant="determinate" value={props.scroll}/>
      </AppBar>
    </>
  );
};

export default Header;
