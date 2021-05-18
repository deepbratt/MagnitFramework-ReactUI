import React from "react";
import { useStyles } from "./careerStyles";
import { Card, CardContent, Paper, Button } from "@material-ui/core";
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
  } = classes;
  const { DoveGray, whiteColor, Harlequin } = Colors;
  return (
    <>
      <Paper className={root} elevation={0}>
        <img className={RightPattern} alt="image" src={rightPattern} />
        <img className={LeftPattern} alt="image" src={leftPattern} />
        <section style={{ color: whiteColor }}>
          <Heading4 title={heading} />
        </section>
        <section className={cardSec}>
          {DataArray.map((data, index) => {
            return (
              <Card className={card}>
                <CardContent key={index}>
                  <section className={devSec}>
                    <section>
                      <Heading5 subTitle={data.title} />
                      <section style={{ color: DoveGray, paddingTop: "10px" }}>
                        <img alt="image" width="10px" src={data.icon} />
                        <Paragraph para={data.span} />
                        <Paragraph para={data.desc} />
                      </section>
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
                    </section>
                  </section>
                </CardContent>
              </Card>
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
      </Paper>
    </>
  );
};

export default OpportunityContext;
