import React from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Menu from "material-ui-popup-state/HoverMenu";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { Colors } from "../../../../Theme/color.constants";
const ParentPopupState = React.createContext(null);
const { WildSand,blackColor } = Colors;
const submenuStyles = (theme) => ({
  menu: {
    marginTop: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: blackColor,
    fontSize: "20px",
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
  menu: {
    width: "300px",
    display: "flex",
    color: blackColor,
    justifyContent: "center",
    transition: "all .5s linear",
    backgroundColor: WildSand,
  },
});
const Submenu = withStyles(submenuStyles)(
  React.forwardRef(({ classes, title, popupId, children, ...props }, ref) => {
    const parentPopupState = React.useContext(ParentPopupState);
    const popupState = usePopupState({
      popupId,
      variant: "popover",
      parentPopupState,
      deferOpenClose: true,
    });
    return (
      <ParentPopupState.Provider value={popupState}>
        <MenuItem
          {...bindHover(popupState)}
          selected={popupState.isOpen}
          ref={ref}
          className={classes.menu}
        >
          <span className={classes.title}>{title}</span>
          <ChevronRight className={classes.moreArrow} />
        </MenuItem>
        <Menu
          {...bindMenu(popupState)}
          classes={{ paper: classes.menu }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          getContentAnchorEl={null}
          disableScrollLock
          {...props}
        >
          {children}
        </Menu>
      </ParentPopupState.Provider>
    );
  })
);

export default Submenu;
