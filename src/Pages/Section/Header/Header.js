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
} from "@material-ui/core";
import Scrolltrigger from "../../../Theme/Scrolltrigger"
import { MuiThemeProvider } from "@material-ui/core/styles";
import Sizes from "../../../Theme/theme.constants"
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints"

const Header = (props) => {
  const classes = useStyles();
  const {trigger} = Scrolltrigger()
  const {toolbar,logo,list,listItem,button,root,scrolled} = classes
  const {isMatch} = Sizes()
  

  return (
    <> 
    <AppBar className={trigger === false? root : scrolled}  position="fixed" >
      <Toolbar
        className={toolbar}
        variant="dense"
      
      >
        <MuiThemeProvider theme={THEME}>
          <Typography className={logo} variant="h5" color="inherit">
            Logo Here
          </Typography>
        </MuiThemeProvider>
        {/* Header Menu */}
        {isMatch ? (
          <SideBar />
        ) : (
          <List className={list}>
            {[
              "Company",
              "About",
              "Services",
              "Solutions",
              "Case Studies",
              "Careers",
            ].map((text, index) => (
              <MuiThemeProvider key={index} theme={THEME}>
                <ListItem>
                  <ListItemText className={listItem} primary={text} />
                </ListItem>
              </MuiThemeProvider>
            ))}
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
        )}
      </Toolbar>
      </AppBar>
    </>
  );
};



export default Header
