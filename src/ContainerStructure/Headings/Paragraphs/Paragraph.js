import React from "react";
import {THEME } from "./paragraphStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const Paragraph = ({para}) => {
  return (
    <>
      <MuiThemeProvider theme={THEME}>
        <Typography paragraph={true} > {para} </Typography>
      </MuiThemeProvider>
    </>
  );
};

Paragraph.prototypes = {
    title: PropTypes.string.isRequired
}
export default Paragraph;
