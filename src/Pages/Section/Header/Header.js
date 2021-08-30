import React from "react";
import { useStyles } from "./headerStyles";
import {
  ListItem,
  List,
  Toolbar,
  AppBar,
  LinearProgress,
  Button,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import theme from "../../../Theme/GlobalFontSizes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import { Logo } from "../../../Components/Hero/Images";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import Menus from "./MenuDropDown/Menu";
import {
  servicesData,
  service,
  serviceRoute,
  company,
  CompanyData,
  insight,
  InsightsData,
  subMenu,
} from "./MenuDropDown/Data";

const Header = (props) => {
  const classes = useStyles();
  const { logo, list, appbarsolid, link, root, active, events } = classes;
  const navigated = () => {
    props.resetLoader();
  };

  return (
    <>
      <AppBar className={root} position="sticky">
        <Toolbar className={appbarsolid}>
          <NavLink to="/">
            <CustomImage className={logo} alt="logo" src={Logo} />
          </NavLink>
          <Hidden smDown>
            <List className={list}>
              <MuiThemeProvider theme={theme}>
                <ListItem>
                  <NavLink activeClassName={active} className={link} to="/">
                    <Button className={list}>
                      <Typography variant="caption">HOME</Typography>
                    </Button>
                  </NavLink>
                </ListItem>
              </MuiThemeProvider>
              <Menus
                route={serviceRoute}
                name={service}
                data={servicesData}
                // sub={subMenu}
                Class={link}
              />
              <Menus Class={events} name={insight} data={InsightsData} />
              <Menus Class={events} name={company} data={CompanyData} />
              <ListItem>
                <NavLink
                  to="/request-a-quote"
                  activeClassName={active}
                  className={link}
                >
                  <CustomButton onClick={navigated}>
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
