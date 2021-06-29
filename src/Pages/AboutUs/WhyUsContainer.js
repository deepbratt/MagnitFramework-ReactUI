import React from "react";
import Section from "../Section";
import PointList from "../../Components/PointBadge/PointList";
import CustomTitle from "../Section/CustomTitle";
const WhyUsContainer = ({ data }) => {
  return (
    <Section>
      <CustomTitle text="Why Us?" underlined={true} />
      <PointList data={data} horizontal={true} lgBreakpoint={6} />
    </Section>
  );
};

export default WhyUsContainer;
