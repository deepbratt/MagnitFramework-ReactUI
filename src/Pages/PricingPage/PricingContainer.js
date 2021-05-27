import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import Pricing from "../../Sections/PricingPageSection/PricingContext";
import {
  PricingArray,
  Heading,
  paragraph,
} from "../../Utils/Constants/Language/en/PricingPageData";
const PricingContainer = () => {
  const { wrapper , text} = useStyles();
  return (
    <>

 
        <Grid container>
          <Grid className={wrapper} item lg={12} md={12} xs={12}>
            <Typography variant="h2">{Heading}</Typography>
            <Typography className={text} variant="body1">{paragraph}</Typography>
          </Grid>
        </Grid>
      <Pricing data={PricingArray} />

    </>
  );
};

export default PricingContainer;
