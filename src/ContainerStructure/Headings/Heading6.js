import React from "react";
import {THEME } from "./headingStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const Heading4 = ({ title }) => {
  return (
    <>
      <MuiThemeProvider theme={THEME}>
        <Typography variant="h6" >
          {title}
        </Typography>
      </MuiThemeProvider>
    </>
  );
};

Heading4.prototypes = {
    title: PropTypes.string.isRequired
}

export default Heading4;

