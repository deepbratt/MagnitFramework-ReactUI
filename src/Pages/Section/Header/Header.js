import React, { useState } from "react";
import { useStyles, THEME } from "./headerStyles";
import { withStyles } from "@material-ui/core/styles";
import {
  ListItem,
  List,
  ListItemText,
  Toolbar,
  Button,
  AppBar,
  LinearProgress,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Hidden } from "@material-ui/core";
import { Logo } from "../../../Components/Hero/Images";
import { Colors } from "../../../Theme/color.constants";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { menuItems } from "./MenuDropDown/Data";

const Header = (props) => {
  const classes = useStyles();
  const { Harlequin, whiteColor, Ash, WildSand } = Colors;
  const {
    logo,
    list,
    listItem,
    button,
    appbarsolid,
    link,
    root,
    active,
    menu,
  } = classes;
  const StyledMenuItem = withStyles((theme) => ({
    paper: {
      backgroundColor: WildSand,
    },
  }))(Menu);
  const navigated = () => {
    props.resetLoader();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={root} position="sticky">
        <Toolbar className={appbarsolid}>
          <section>
            <CustomImage className={logo} alt="logo" src={Logo} />
          </section>
          {/* Header Menu */}
          <Hidden mdUp>
            <SideBar />
          </Hidden>
          <Hidden smDown>
            <List className={list}>
              <NavLink activeClassName={active} className={link} to="/home">
                <MuiThemeProvider theme={THEME}>
                  <ListItem>
                    <ListItemText primary="Home" className={list} />
                  </ListItem>
                </MuiThemeProvider>
              </NavLink>
              {Object.keys(menuItems).map((item, index) => (
                <div key={index}>
                  <MuiThemeProvider theme={THEME}>
                    <ListItem style={{padding:"0"}}>
                      <Button
                        className={list}
                        onClick={(e) => handleClick(index, e)}
                      >
                        {item} <ExpandMoreIcon />
                      </Button>
                    </ListItem>
                  </MuiThemeProvider>
                  <StyledMenuItem
                    anchorEl={anchorEl && anchorEl[index]}
                    keepMounted
                    open={anchorEl && Boolean(anchorEl[index])}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    className={listItem}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    disableScrollLock
                  >
                    {menuItems[item].map((menuitems, menuindex) => (
                      <MenuItem
                        key={menuindex}
                        selected={menuitems === item}
                        onClick={handleClose}
                        className={menu}
                      >
                        <NavLink
                          to={menuitems.path}
                          activeClassName={active}
                          className={link}
                        >
                          <ListItemText primary={menuitems.title} />
                        </NavLink>
                      </MenuItem>
                    ))}
                  </StyledMenuItem>
                </div>
              ))}
              <ListItem>
                <NavLink
                  to="request-a-quote"
                  activeClassName={active}
                  className={link}
                >
                  <CustomButton
                    variant="contained"
                    size={Breakpoints()}
                    onClick={navigated}
                    style
                  >
                    Request A Quote
                  </CustomButton>
                </NavLink>
              </ListItem>
            </List>
          </Hidden>
        </Toolbar>
        <LinearProgress variant="determinate" value={props.scroll} />
      </AppBar>
    </>
  );
};

export default Header;
