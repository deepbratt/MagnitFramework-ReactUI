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
import { useStyles } from "./sidebarStyles";

const SideBar = () => {
  const classes = useStyles();
  const {root,drawer,drawerHeader,closeIcon,menuIcon} = classes
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
          {["Company", "Services", "Solutions", "Case Studies", "Careers"].map(
            (text, index) => (
              <ListItem key = {index} style={{ padding: "15px" }} button >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <MenuIcon className={menuIcon} onClick={() => {setOpen(!open)}} />
    </>
  );
};

export default SideBar