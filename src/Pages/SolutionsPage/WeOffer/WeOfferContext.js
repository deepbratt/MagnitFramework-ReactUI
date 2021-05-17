import React from "react";
import { useStyles } from "./weOfferStyles";
import { Card, CardContent, Paper, Button } from "@material-ui/core";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Colors } from "../../../Theme/color.constants";
import {Array}  from "../../../Utils/Constants/Language/en/SolutionsPageData";
import {heading,subheading}  from "../../../Utils/Constants/Language/en/SolutionsPageData"
import CustomButton from "../../../Components/CustomButton";

const WeOfferContext = () => {
  const classes = useStyles();
  const { root, cardSec, card, devSec, button } = classes;
  const {DoveGray} = Colors
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <Heading4 title={heading} />
          <Paragraph para= {subheading}/>
        </section>
        <section className={cardSec}>
         {Array.map((data,index) =>{
           return( <Card className={card}>
            <CardContent key = {index}>
              <section className={devSec}>
                <section>
                  <img alt="image" width="50px" src = {data.Icon} />
                  <Heading5 subTitle={data.title} />
                  <section style={{ color: DoveGray, paddingTop: "10px" }}>
                    <Paragraph para={data.paragraph} />
                  </section>
                  <CustomButton
                    style={{
                      textTransform: "none",
                    }}
                    variant="contained"
                    className={button}
                    size={Breakpoints()}
                  >
                    Learn More
                  </CustomButton>
                </section>
              </section>
            </CardContent>
          </Card>) 
         })}
        </section>
      </Paper>
    </>
  );
};

export default WeOfferContext;
