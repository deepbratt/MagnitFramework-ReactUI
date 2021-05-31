import React from "react";
import { useStyles } from "./careerStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import {
  DataArray,
  heading,
  rightPattern,
  leftPattern,
} from "../../Utils/Constants/Language/en/CareersData";
import CustomButton from "../../Components/CustomButton";
import ReadMore from "../../Components/ReadMore";
import CustomTitle from "../Section/CustomTitle";
import Section from "../Section";
const OpportunityContext = () => {
  const classes = useStyles();
  const {
    root,
    card,
    devSec,
    HeadSec,
    para,
    RightPattern,
    LeftPattern,
    remoteArea,
    bottomStyle,
  } = classes;
  const { whiteColor,skyBlue } = Colors;
  return (
    <>
     <Section backColor={skyBlue}>
     <img className={RightPattern} alt="" src={rightPattern} />
          <img className={LeftPattern} alt="" src={leftPattern} />
      <div  style={{flexGrow: 1}}>
      <Grid  className={root} contianer spacing={0} justify="center"  >
        <Grid item xs={12}>
          <section>
          <CustomTitle color={whiteColor} text={heading} underlined={false}/>
          </section>
        </Grid>
  
        {/* <section className={cardSec}> */}
      {DataArray.map((data, index) => {
          return (
           
            <Grid
              xs={12}
              sm={4}
              md={4}
              lg={4}
              item
              className={card}
              key={index}
            >
              <Card className={devSec} >
              <CardContent>
                <Grid xs={12} className={HeadSec}>
                  <Typography variant="subtitle1">{data.title}</Typography>
                </Grid>
                <Grid className={remoteArea}>
                  <div style={{ marginRight: ".5rem" }}>
                    <img alt="" width="10px" src={data.icon} />
                  </div>
                  <div>
                    <Typography variant="subtitle2">{data.span}</Typography>
                  </div>
                </Grid>
                <Grid xs={12} className={para}>
                  <Typography variant="body1" component="body1">
                    <ReadMore
                      text={data.desc}
                      maxLines={3}
                      ellipses="... Read More"
                    />
                  </Typography>
                </Grid>
               </CardContent>
               <Grid xs={12} className={bottomStyle}>
                <CustomButton>{data.buttonText}</CustomButton>
              </Grid>
              </Card>
            
            
            </Grid>
          );
        })} 
      
        {/* </section> */}
        <Grid item xs={12}>
          <CustomButton color="secondary">Learn More</CustomButton>
        </Grid>
        </Grid>
      </div>
      </Section>
    </>
  );
};

export default OpportunityContext;
