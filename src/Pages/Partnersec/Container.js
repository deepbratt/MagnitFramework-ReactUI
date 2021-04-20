import React from "react";
import { useStyles, THEME } from "./containerStyles";
import { Typography, Paper, Grid} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FirstRow from "./FirstRow"
import SecondRow from "./SecondRow"

const Container = () => {
  const classes = useStyles();
  const { root } = classes;
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h4" color="inherit">
                  Why Partner with Us?
                </Typography>
              </MuiThemeProvider>
            </section>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
            <FirstRow/>
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondRow />
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
