import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./Main";
import { banner } from "../../Utils/Constants/Language/en/CareersData";
import Opportunities from "./OpportunityContext";
import Section from "../Section";
import { Data, Array } from "../../Utils/Constants/Language/en/CareersData";
import PointList from "../../Components/PointBadge/PointList";
import CustomTitle from "../Section/CustomTitle";

const CareerContainer = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main width="550px" hero={banner} />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Section>
            <CustomTitle text={Data.title} underlined={true} />
            <PointList lgBreakpoint={3} data={Array} />
          </Section>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Opportunities />
        </Grid>
      </Grid>
    </>
  );
};

export default CareerContainer;
