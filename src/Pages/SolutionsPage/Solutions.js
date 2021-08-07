import React from "react";
import WeOffer from "../../Sections/SolutionsPageSection/WeOfferContext";
import { Grid } from "@material-ui/core";
import ServicesSectionStyles from "../WebServices/style";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Sections/SolutionsPageSection/Banner";
import CommentSection from "../../Components/CommentSection";
import {
  SolutionOfferedSection,
  benefitsData,
  benefitsHeading,
} from "../../Utils/Constants/Language/en/SolutionsPageData";
import Section from "../Section";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { DoYouWant } from "../WebServices/constants";
import PointList from "../../Components/PointBadge/PointList";
import RequestQuoteSection from "../../Sections/RequestQuoteSection";

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
          <WeOffer data={SolutionOfferedSection} />
        </Grid>
        <Section title={benefitsHeading}>
          <Grid item lg={12} md={12} xs={12}>
            <PointList data={benefitsData} horizontal={true} lgBreakpoint={6} />
          </Grid>
        </Section>
        <Section>
          <RequestQuoteSection/>
        </Section>
      </CommentSection>
    </>
  );
};

export default Solutions;
