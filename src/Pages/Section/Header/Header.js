import React from "react";
import { useStyles } from "./headerStyles";
import {
  ListItem,
  List,
  Toolbar,
  AppBar,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import theme from "../../../Theme/GlobalFontSizes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SideBar from "./Sidebar/SideBar";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Hidden } from "@material-ui/core";
import { Logo } from "../../../Components/Hero/Images";
import { Colors } from "../../../Theme/color.constants";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import Menus from "./MenuDropDown/Menu";
import {
  servicesData,
  service,
  serviceRoute,
  company,
  companyRoute,
  CompanyData,
  subMenu,
} from "./MenuDropDown/Data";

const Header = (props) => {
  const classes = useStyles();
  const { WildSand } = Colors;
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
          {/* Header SideBar */}
          <Hidden mdUp>
            <SideBar />
          </Hidden>
          <Hidden smDown>
            <List className={list}>
              <NavLink activeClassName={active} className={link} to="/home">
                <MuiThemeProvider theme={theme}>
                  <ListItem>
                    <Typography variant="h5">HOME</Typography>
                  </ListItem>
                </MuiThemeProvider>
              </NavLink>
              <Menus
                route={serviceRoute}
                name={service}
                data={servicesData}
                sub={subMenu}
              />
              <Menus route={companyRoute} name={company} data={CompanyData} />
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
