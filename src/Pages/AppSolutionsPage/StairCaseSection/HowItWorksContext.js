import React from "react";
import { useStyles } from "../../AboutUs/NumberContext/numberStyles";
import { missionStyles } from "./useStyles";
import { Card, CardContent, Paper, Grid ,Typography} from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import {THEME} from "../../../ContainerStructure/Headings/headingStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  StairCaseData,
  stairCaseHeading,
} from "../../../Utils/Constants/Language/en/AppSolutionsData";
import CustomImage from "../../../Components/CustomImage"
const HowItWorksContext = () => {
  const { cardSec } = useStyles();
  const { card2, root, devSec, image, underlined } = missionStyles();
  return (
    <>
      <Paper className={root} elevation={0}>
        <Grid container>
          <Grid item lg={12} xs={12}>
          <MuiThemeProvider theme={THEME}>
              <Typography variant="h4" color="inherit">
                <span className={underlined}>{stairCaseHeading}</span>
              </Typography>
            </MuiThemeProvider>
         
          </Grid>
        </Grid>
        <section style={{ paddingBottom: "20px" }} className={cardSec}>
          {StairCaseData.map((data, index) => {
            return (
              <Card style={{ marginTop: data.margin }} className={card2}>
                <CardContent style={{ padding: "0px" }}>
                  <section className={image}>
                    <CustomImage src={data.img} alt="image" />
                  </section>
                  <section
                    style={{
                      border: `solid ${data.color}`,
                      borderWidth: "30px 0px 0px 30px",
                    }}
                    className={devSec}
                  >
                    <section>
                      <Heading5 subTitle={data.title} />
                      <Paragraph para={data.desc} />
                    </section>
                  </section>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </Paper>
    </>
  );
};

export default HowItWorksContext;
