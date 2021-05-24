import React from "react";
import WeOffer from "../../Sections/SolutionsPageSection/WeOfferContext";
import { Grid } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import { useStyles } from "../../Sections/SolutionsPageSection/weOfferStyles";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Sections/SolutionsPageSection/Banner";
import CommentSection from "../../Components/CommentSection";
import Main from "../../Sections/SolutionsPageSection/WhyUsContainer"
import { Array } from "../../Utils/Constants/Language/en/SolutionsPageData";

const Solutions = () => {
  const { linearBackground } = Colors;
  const { root } = ServicesSectionStyles();
  return (
    <>
    <CommentSection>
        <Grid
          className={root}
          style={{ paddingBottom: "50px", background: linearBackground }}
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Banner />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <WeOffer data={Array} />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Main />
        </Grid>

        </CommentSection>
      

    </>
  );
};

export default Solutions;
