import React from "react";
import { useStyles } from "../PartnerWithUsContext/containerStyles";
import { Paper, Grid , Typography} from "@material-ui/core";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import {THEME} from "../../ContainerStructure/Headings/headingStyles"
import { MuiThemeProvider } from "@material-ui/core/styles";
import {Primaryarray,Secondaryarray} from "../../Utils/Constants/Language/en/PartnerWithUsData"

const WhyUsContainer = () => {
  const { root, grid ,underlinedText} = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
          <section>
          <MuiThemeProvider theme={THEME}>
                <Typography variant="h4" color="inherit">
                  <span className={underlinedText}>
                  Why Us? 
                  </span>
                </Typography>
                </MuiThemeProvider>
            </section>
          </Paper>
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <setion>
          <PrimarySection
            data={Primaryarray}
          />
          </setion>
         
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <SecondarySection
          data={Secondaryarray}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default WhyUsContainer;
