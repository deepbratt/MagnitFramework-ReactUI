import React from "react";
import { useStyles } from "../PartnerWithUsContext/containerStyles";
import { Paper, Grid } from "@material-ui/core";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import { Colors } from "../../Theme/color.constants";

const {
  yellowOrange,
  lightOrange,
  pastelBlue,
  peacockGreen,
  lightblue,
  persianGreen,
  orangeRed,
  Orchid,
  skyBlueColor,
  heliotrope,
  darkBlue,
  fillColor,
} = Colors;

const WhyUsContainer = () => {
  const { root, grid } = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <Heading4 title="Why Us?" />
          </Paper>
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <PrimarySection
            appColor={yellowOrange}
            reliableColor={lightOrange}
            innovativeColor={peacockGreen}
            agileColor={lightblue}
            transparencyColor={persianGreen}
            moneyColor={Orchid}
            appFill={fillColor}
            reliableFill={fillColor}
            innovativeFill={fillColor}
            agileFill={fillColor}
            transparencyFill={fillColor}
            moneyFill={fillColor}
          />
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <SecondarySection
            qualityColor={orangeRed}
            geekyColor={pastelBlue}
            supportColor={skyBlueColor}
            timeColor={heliotrope}
            dataColor={darkBlue}
            qualityFill={fillColor}
            geekyFill={fillColor}
            supportFill={fillColor}
            timeFill={fillColor}
            dataFill={fillColor}
            isoFill={fillColor}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default WhyUsContainer;
