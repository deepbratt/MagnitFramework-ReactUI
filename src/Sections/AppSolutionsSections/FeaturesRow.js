import React from "react";
import { useStyles } from "../HomePageSections/PartnerWithUsContext/sectionStyles";
import { SolutionsStyles } from "../../Pages/AppSolutionsPage/SolutionsStyles";
import { Typography, Grid } from "@material-ui/core";
import CustomImage from "../../Components/CustomImage";

const FeaturesRow = (props) => {
  const { flexDirection, data } = props;

  const { para } = useStyles();
  const { supportSub } = SolutionsStyles();

  return (
    <Grid
      container
      style={{
        display: "flex",
        alignContent: "space-around",
      }}
      spacing={2}
    >
      {data.map((text, index) => {
        return (
          <Grid
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: flexDirection,
            }}
            item
            xs={12}
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={2}
              className={supportSub}
            >
              <CustomImage alt="icon-data" src={text.icon} />
            </Grid>

            <Grid className={para} item xs={12} md={8} lg={10}>
              <Typography color="textPrimary" variant="h5">
                {text.title}
              </Typography>
              <Typography variant="body1">{text.text}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FeaturesRow;
