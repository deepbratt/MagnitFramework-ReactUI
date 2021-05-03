import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";
import { pageRoutes } from "../../../../Components/Path";
import { useStyles , THEME} from "./sidebarStyles";
import {Logo} from "../../../../Components/Hero/Images"
import { MuiThemeProvider } from "@material-ui/core/styles";


const SideBar = () => {
  const classes = useStyles();
  const {root,drawer,drawerHeader,closeIcon,menuIcon, active,link,logo,list }= classes
  const routes = Object.values(pageRoutes);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        className={drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: root,
        }}>
        <div className={drawerHeader}>
          <CloseIcon className={closeIcon} onClick={() => {setOpen()}} />
        </div>
       <section className={logo}>
       <img src={Logo} width="120px" />
       </section>
      
        <List style={{ marginTop: "30px" }}>
             {routes.map(({ path, sidebarName, ...prop }, index) => {
                  return (
                      <NavLink
                        activeClassName={active}
                        className={link}
                        to={path}
                        key={`route-${index}}`}
                        onClick={() => {setOpen()}}
                      >
                         <MuiThemeProvider  theme={THEME}>
                        <ListItem>
                          <ListItemText
                            key = {index} style={{ padding: "15px" }}
                            primary={sidebarName}
                            className={list}
                          />
                        </ListItem>
                        </MuiThemeProvider>
                      </NavLink>
                  );
                })}
        </List>
      </Drawer>
      <MenuIcon className={menuIcon} onClick={() => {setOpen(!open)}} />
    </>
  );
};

export default SideBar