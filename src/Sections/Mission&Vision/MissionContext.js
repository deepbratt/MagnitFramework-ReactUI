import React from "react";

import { missionStyles } from "./missionStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

import {
  MidSection,
  MainData,
} from "../../Utils/Constants/Language/AboutUsData";
import Patten1 from "../../assets/AboutUs/vision1.png";
import Patten2 from "../../assets/AboutUs/vision2.png";
import CustomImage from "../../Components/CustomImage";
import Section from "../../Pages/Section";
import { Colors } from "../../Theme/color.constants";

const MissionContext = ({data}) => {
  const { card, root, Icon, underlined, leftPattern, rightPattern } =
    missionStyles();
  const { firstTitle, secondTitle, missionText, visionText } = MidSection;
  const {skyBlue}= Colors;
  return (
    <>
    <Section backColor={skyBlue}>
    <CustomImage className={leftPattern} src={Patten1} alt="" />
        <CustomImage className={rightPattern} src={Patten2} alt="" />
      <Grid
        container
        className={root}
        spacing={2}
        justify="center"
      >
       
{/* 
       {data.map((data,index)=>{
         return(
          <Grid key = {index} style={{ zIndex: 1, display:"flex" }} item xs={11} md={5} lg={4}>
          <Card className={card}>
            <Grid item xs={12}>
              <CardContent>
                <Grid item xs={12}>
                  <CustomImage className={Icon} src={data.icon} alt="Icon" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">{data.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    gutterBottom
                  >
                    {data.text}
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Grid className={underlined} item xs={3} />
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
         )
       })} */}

 
      </Grid>
      </Section>
    </>
  );
};

export default MissionContext;
