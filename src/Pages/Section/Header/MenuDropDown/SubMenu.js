import React from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Menu from "material-ui-popup-state/HoverMenu";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { Colors } from "../../../../Theme/color.constants";
const ParentPopupState = React.createContext(null);
const { WildSand,blackColor } = Colors;
const submenuStyles = (theme) => ({

  title: {
    flexGrow: 1,
    color: blackColor,
    textAlign: "left",


  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
  menu: {
    marginTop: theme.spacing(-1),
    display: "flex",
    color: blackColor,
    transition: "all .5s linear",
    backgroundColor: WildSand,
    marginTop: "10px"
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
          {/* <span style={{  textAlign: "left"}}  className={classes.title}>{title}</span> */}
          <Typography style={{  textAlign: "left"}}  className={classes.title} variant="h5">
          {title}
          </Typography>
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
