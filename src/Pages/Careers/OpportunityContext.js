import React from "react";
import { useStyles } from "./careerStyles";
import {
  Card,
  CardContent,
  Paper,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import Heading6 from "../../ContainerStructure/Headings/Heading6";
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
import ReadMore from "../../Components/ReadMore";

const OpportunityContext = () => {
  const classes = useStyles();
  const {
    root,
    cardSec,
    card,
    devSec,
    HeadSec,
    para,
    button,
    RightPattern,
    LeftPattern,
    btn,
    remoteArea,
    bottomStyle,
  } = classes;
  const { DoveGray, whiteColor, Harlequin } = Colors;
  return (
    <>
      <Grid container className={root} spacing={0} justify="center">
        <Grid item xs={12}>
          <img className={RightPattern} alt="" src={rightPattern} />
          <img className={LeftPattern} alt="" src={leftPattern} />
          <section style={{ color: whiteColor }}>
            <Heading4 title={heading} />
          </section>
        </Grid>
        {/* <section className={cardSec}> */}
        {DataArray.map((data, index) => {
          return (
            <Grid
              xs={12}
              sm={4}
              md={4}
              lg={3}
              item
              className={card}
              key={index}
            >
              <Grid className={devSec}>
                <Grid xs={12} className={HeadSec}>
                  <Typography variant="subtitle1" component="subtitle1">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid className={remoteArea}>
                  <div style={{ marginRight: ".5rem" }}>
                    <img alt="" width="10px" src={data.icon} />
                  </div>
                  <div>
                    <Typography variant="subtitle2" component="subtitle2">
                      {data.span}
                    </Typography>
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
              </Grid>
              <Grid xs={12} className={bottomStyle}>
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
        {/* </section> */}
        <Grid item xs={12}>
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
      </Grid>
    </>
  );
};

export default OpportunityContext;
