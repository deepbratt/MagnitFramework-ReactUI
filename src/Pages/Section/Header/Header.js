import React from "react";
import { useStyles, THEME } from "./headerStyles";
import {
  Typography,
  ListItem,
  List,
  ListItemText,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";

const Header = (props) => {
  const { value } = props;
  const classes = useStyles();
  // Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Toolbar
        className={value === "LIGHT" ? classes.toolbar : classes.toolbarSub}
        variant="dense"
      >
        <MuiThemeProvider theme={THEME}>
          <Typography className={classes.logo} variant="h5" color="inherit">
            Logo Here
          </Typography>
        </MuiThemeProvider>
        {/* Header Menu */}
        {isMatch ? (
          <SideBar />
        ) : (
          <List className={classes.list}>
            {[
              "Company",
              "Services",
              "Solutions",
              "Case Studies",
              "Careers",
            ].map((text, index) => (
              <MuiThemeProvider key={index} theme={THEME}>
                <ListItem>
                  <ListItemText className={classes.listItem} primary={text} />
                </ListItem>
              </MuiThemeProvider>
            ))}
            <ListItem>
              <Button
                style={{ textTransform: "none" }}
                className={classes.button}
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
