import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./Main"
import {banner} from "../../Utils/Constants/Language/en/CareersData"
import Opportunities from "./OpportunityContext"
import WorkWithUs from "./WorkWithUsContainer"
const CareerContainer = () => {

  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main hero={banner}/>
        </Grid>
        <Grid style={{margin: "0 5%"}} item lg={12} md={12} xs={12}>
          <WorkWithUs />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Opportunities/>
        </Grid>
      </Grid>
    </>
  );
};

export default CareerContainer;