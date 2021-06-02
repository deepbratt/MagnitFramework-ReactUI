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
  const { logo, list, appbarsolid, link, root, active } = classes;
  const navigated = () => {
    props.resetLoader();
  };

  return (
    <>
      <AppBar className={root} position="sticky">
        <Toolbar className={appbarsolid}>
          <section>
            <CustomImage className={logo} alt="logo" src={Logo} />
          </section>
          <Hidden smDown>
            <List className={list}>
              <MuiThemeProvider theme={theme}>
                <ListItem>
                  <Button className={list}>
                    <NavLink
                      activeClassName={active}
                      className={link}
                      to="/home"
                    >
                      <Typography variant="caption">HOME</Typography>
                    </NavLink>
                  </Button>
                </ListItem>
              </MuiThemeProvider>
              <Menus
                route={serviceRoute}
                name={service}
                data={servicesData}
                sub={subMenu}
              />
              <Menus name={insight} data={InsightsData} />
              <Menus name={company} data={CompanyData} />
              <ListItem>
                <NavLink
                  to="request-a-quote"
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
