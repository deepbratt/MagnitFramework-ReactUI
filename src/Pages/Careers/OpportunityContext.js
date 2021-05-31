import React from "react";
import { useStyles } from "./careerStyles";
import { Grid, Typography, Card, Hidden } from "@material-ui/core";
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
  const { card, RightPattern, LeftPattern, remoteArea } = classes;
  const { whiteColor, skyBlue } = Colors;

  const ourWorkSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPattern}
            style={{ position: "absolute" }}
            item
            xs={3}
          >
            <img width="100%" height="100%" src={leftPattern} alt="" />
          </Grid>
        </Hidden>
      ),
      styles: LeftPattern,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPattern}`}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img width="100%" height="100%" src={rightPattern} alt="" />
          </Grid>
        </Hidden>
      ),
      styles: RightPattern,
    },
  ];

  return (
    <>
      <Section
        style={{ position: "relative" }}
        backColor={skyBlue}
        patterns={ourWorkSectionPatterns}
      >
        <CustomTitle color={whiteColor} text={heading} underlined={false} />

        <Grid
          style={{ marginBottom: "40px" }}
          container
          justify="center"
          spacing={2}
        >
          {/* <section className={cardSec}> */}
          {DataArray.map((data, index) => {
            return (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <Card className={card}>
                  <Grid>
                    <Grid xs={12}>
                      <Typography color="textPrimary" variant="h5">
                        {data.title}
                      </Typography>
                    </Grid>
                    <Grid className={remoteArea}>
                      <div style={{ marginRight: ".5rem" }}>
                        <img alt="" width="10px" src={data.icon} />
                      </div>
                      <div>
                        <Typography color="textSecondary" variant="subtitle2">
                          {data.span}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <Typography
                        color="textSecondary"
                        variant="body1"
                        gutterBottom
                      >
                        <ReadMore
                          text={data.desc}
                          maxLines={3}
                          ellipses="... Read More"
                        />
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid xs={12}>
                    <CustomButton>{data.buttonText}</CustomButton>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {/* </section> */}
        <Grid item xs={12}>
          <CustomButton color="secondary">Learn More</CustomButton>
        </Grid>
      </Section>
    </>
  );
};

export default OpportunityContext;
