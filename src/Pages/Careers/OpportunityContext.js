import React from "react";
import { useStyles } from "./careerStyles";
import { Card, CardContent, Paper, Button, Grid } from "@material-ui/core";
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import {
  DataArray,
  heading,
  rightPattern,
  leftPattern,
} from "../../Utils/Constants/Language/en/CareersData";
import CustomButton from "../../Components/CustomButton";


const OpportunityContext = () => {
  const classes = useStyles();
  const {
    root,
    cardSec,
    card,
    devSec,
    button,
    RightPattern,
    LeftPattern,
    btn,
    remoteArea,
    bottomStyle
  } = classes;
  const { DoveGray, whiteColor, Harlequin } = Colors;
  return (
    <>
      <Grid className={root} elevation={0}>
        <img className={RightPattern} alt="image" src={rightPattern} />
        <img className={LeftPattern} alt="image" src={leftPattern} />
        <section style={{ color: whiteColor }}>
          <Heading4 title={heading} />
        </section>
        <section className={cardSec}>
          {DataArray.map((data, index) => {
            return (
              <Grid xs={12} md={3}  className={card} key={index}>
                  <Grid className={devSec}>
                    <Grid xs={12} >
                      <Heading5 subTitle={data.title} />
                      </Grid>
                      <Grid className={remoteArea} >
                        <div style={{ marginRight:".5rem"}}>
                        <img alt="image" width="10px" src={data.icon} />
                        </div>
                        <div>
                        <Paragraph para={data.span} />
                        </div>
                        </Grid>
                        <Grid xs={12} >
                        <Paragraph para={data.desc} />
                      </Grid>
                  </Grid>
                  <Grid xs={12} className={bottomStyle }>
                      <CustomButton
                        style={{
                          textTransform: "none",
                        }}
                        variant="contained"
                        className={button}
                        size={Breakpoints()}
                      >
                        {data.buttonText}
                      </CustomButton>
                      </Grid>
              </Grid>
            );
          })}
        </section>
        <CustomButton
          style={{
            textTransform: "none",
            backgroundColor: Harlequin,
            color: whiteColor,
          }}
          variant="contained"
          size={Breakpoints()}
        >
          Learn More
        </CustomButton>
      </Grid>
    </>
  );
};

export default OpportunityContext;
