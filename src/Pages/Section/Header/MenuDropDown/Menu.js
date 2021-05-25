import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { useStyles } from "../headerStyles";
import Menu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { List, ListItem, Typography } from "@material-ui/core";
import { Colors } from "../../../../Theme/color.constants";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
import Submenu from "./SubMenu";;
const ParentPopupState = React.createContext(null);
const { WildSand } = Colors;
const CascadingHoverMenus = ({ data, name, route, sub }) => {
  const { list, listItem, link, active, menu } = useStyles();
  const StyledMenuItem = withStyles((theme) => ({
    paper: {
      backgroundColor: WildSand,
    },
  }))(Menu);

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
    deferOpenClose: true,
  });
  return (
    <div>
      <List className={list}>
        <ListItem style={{ padding: "0" }}>
          <Button className={list} {...bindHover(popupState)}>
            <NavLink
              activeClassName={active}
              className={link}
              onClick={popupState.close}
              to={route ? route : "/home"}
            >
              {name}
            </NavLink>
            <ExpandMoreIcon />
          </Button>
        </ListItem>
      </List>
      <ParentPopupState.Provider value={popupState}>
        <StyledMenuItem
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          getContentAnchorEl={null}
          className={listItem}
          disableScrollLock
        >
          {data.map((menuitems, menuindex) => (
            <MenuItem
              onClick={popupState.close}
              key={menuindex}
              className={menu}
            >
              <NavLink
                to={menuitems.path}
                activeClassName={active}
                className={link}
              >
                <Typography variant="h5">{menuitems.title}</Typography>
              </NavLink>
            </MenuItem>
          ))}
          {sub ? (
            <NavLink to="/solutions" activeClassName={active} className={link}>
              <Submenu className={list} popupId="moreChoicesMenu" title={sub}>
              <NavLink to="/app-solutions"activeClassName={active} className={link}>
                <MenuItem  onClick={popupState.close}>App Solutions</MenuItem>
                </NavLink>
              </Submenu>
            </NavLink>
          ) : null}
        </StyledMenuItem>
      </ParentPopupState.Provider>
    </div>
  );
};

export default CascadingHoverMenus;
