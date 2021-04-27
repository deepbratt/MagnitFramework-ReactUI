import React from "react";
import {THEME } from "./headingStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const Heading5 = ({ subTitle }) => {
  return (
    <>
      <MuiThemeProvider theme={THEME}>
        <Typography variant="h5" color="inherit">
          {subTitle}
        </Typography>
      </MuiThemeProvider>
    </>
  );
};

Heading5.prototypes = {
    subTitle: PropTypes.string.isRequired
}

export default Heading5;

