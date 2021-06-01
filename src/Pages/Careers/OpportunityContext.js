import React from "react";
import { useStyles } from "./careerStyles";
import { Grid, Typography, Card } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import {
  DataArray,
  heading,
} from "../../Utils/Constants/Language/en/CareersData";
import CustomButton from "../../Components/CustomButton";
import ReadMore from "../../Components/ReadMore";
import CustomTitle from "../Section/CustomTitle";
import Section from "../Section";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
const OpportunityContext = () => {
  const classes = useStyles();
  const { card, remoteArea } = classes;
  const { whiteColor, skyBlue } = Colors;

  return (
    <>
      <Section
        style={{ position: "relative" }}
        backColor={skyBlue}
        patterns={ourWorkSectionPatterns}
      >
        <CustomTitle color={whiteColor} text={heading} underlined={false} />

        <Grid
          style={{ marginBottom: "40px", display :"flex" }}
          container
          justify="center"
          spacing={2}
        >
          {/* <section className={cardSec}> */}
          {DataArray.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index} style={{display:"flex"}}>
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
