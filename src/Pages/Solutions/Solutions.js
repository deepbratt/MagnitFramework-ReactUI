import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Paper } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FirstRow from "./FirstSec";
import SecondRow from "./SecondSec"
import ThirdRow from "./ThirdSec"

const Solutions = () => {
  const classes = useStyles();
  const { root } = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" color="inherit">
              Solutions
            </Typography>
            <Typography paragraph={true} color="inherit">
              that are ready-made, bespoke and save your time and money
            </Typography>
          </MuiThemeProvider>
        </section>
        <FirstRow />
        <SecondRow/>
        <ThirdRow/>
      </Paper>
    </>
  );
};

export default Solutions;
