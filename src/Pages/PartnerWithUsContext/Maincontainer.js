import React from "react";
import { useStyles, THEME } from "./containerStyles";
import { Typography, Paper, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";
import {PrimaryArray,SecondaryArray} from "../../Utils/Constants/Language/en/PartnerWithUsData"

const Container = () => {
  const classes = useStyles();
  const { root, underlined } = classes;
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h4" color="inherit">
                  Why Partner <span className={underlined}>with Us?</span>
                </Typography>
              </MuiThemeProvider>
            </section>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <PrimarySection
          data={PrimaryArray}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection
            data={SecondaryArray}

          />
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
