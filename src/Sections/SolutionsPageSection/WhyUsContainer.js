import React from "react";
import {
    benefitsData,
    benefitsHeading,
  } from "../../Utils/Constants/Language/en/SolutionsPageData";
import PointList from "../../Components/PointBadge/PointList"
import Section from "../../Pages/Section"


const WhyUsContainer = () => {

  return (
    <Section title={benefitsHeading}>
    <PointList data={benefitsData} horizontal={true} />
  </Section>
  );

}

export default WhyUsContainer
