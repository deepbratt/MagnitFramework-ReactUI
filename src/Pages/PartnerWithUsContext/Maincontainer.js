import React from "react";
import { useStyles, THEME } from "./containerStyles";
import { Typography, Paper, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";
import { Colors } from "../../Theme/color.constants";
import { isoIcon } from "../../assets/icons/icon.constants";

const { PartnerSectionIcons } = Colors;
const {
  appIcon,
  reliableIcon,
  innovativeIcon,
  agileIcon,
  transparencyIcon,
  moneyIcon,
  supportIcon,
  timeIcon,
  dataIcon,
  qualityIcon,
  geekyIcon,
  appFill,
  innovativeFill,
  reliableFill,
  supportFill,
  agileFill,
  timeFill,
  moneyFill,
  dataFill,
  isoFill,
  qualityFill,
  geekyFill,
  transparencyFill,
} = PartnerSectionIcons;

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
          <PrimarySection
            appColor={appIcon}
            reliableColor={reliableIcon}
            innovativeColor={innovativeIcon}
            agileColor={agileIcon}
            transparencyColor={transparencyIcon}
            moneyColor={moneyIcon}
            appFill={appFill}
            innovativeFill={innovativeFill}
            reliableFill={reliableFill}
            agileFill={agileFill}
            transparencyFill={transparencyFill}
            moneyFill={moneyFill}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection
            qualityColor={qualityIcon}
            geekyColor={geekyIcon}
            supportColor={supportIcon}
            timeColor={timeIcon}
            dataColor={dataIcon}
            isoColor={isoIcon}
            qualityFill={qualityFill}
            geekyFill={geekyFill}
            supportFill={supportFill}
            timeFill={timeFill}
            dataFill={dataFill}
            isoFill={isoFill}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
