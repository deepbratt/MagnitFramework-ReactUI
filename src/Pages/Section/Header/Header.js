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
import { MuiThemeProvider } from "@material-ui/core/styles";
import Sizes from "../../../Theme/theme.constants"
import SideBar from "./Sidebar/SideBar";

const Header = (props) => {
  const { value } = props;
  const classes = useStyles();
  const {toolbar,toolbarSub,logo,list,listItem,button} = classes
  const {isMatch} = Sizes()
  

  return (
    <>
      <Toolbar
        className={value === "LIGHT" ? toolbar : toolbarSub}
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
                color="secondary"
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        )}
      </Toolbar>
    </>
  );
};



export default Header
