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
import { useStyles } from "./sidebarStyles";


const SideBar = () => {
  const classes = useStyles();
  const {root,drawer,drawerHeader,closeIcon,menuIcon, active,link} = classes
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
        <Typography
          style={{ fontSize: "20px", textAlign: "center" }}
          variant="h5"
          color="inherit">
          Logo Here
        </Typography>
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
                        <ListItem>
                          <ListItemText
                            key = {index} style={{ padding: "15px" }}
                            primary={sidebarName}
                          />
                        </ListItem>
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