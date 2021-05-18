import React from "react";
import { useStyles } from "../HomePageSections/PartnerWithUsContext/sectionStyles";
import { SolutionsStyles } from "../../Pages/AppSolutionsPage/SolutionsStyles";
import { Typography, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";
import CustomImage from "../../Components/CustomImage";

const FeaturesRow = (props) => {
  const data = props.data;

  const { cardSec, para } = useStyles();
  const { supportSub } = SolutionsStyles();

  return (
    <>
      {data.map((text, index) => {
        return (
          <Grid key={index} item className={cardSec}>
            <Grid container>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "40px",
                }}
                item
                xs={12}
                lg={3}
                sm={12}
              >
                <Grid
                  item
                  style={{ backgroundColor: text.color }}
                  className={supportSub}
                >
                  <CustomImage alt="icon" src={text.icon} />
                </Grid>
              </Grid>
              <MuiThemeProvider theme={THEME}>
                <Grid className={para} item xs={12} lg={9}>
                  <Typography variant="h5">{text.title}</Typography>
                  <Typography paragraph={true}>{text.desc}</Typography>
                </Grid>
              </MuiThemeProvider>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default FeaturesRow;
