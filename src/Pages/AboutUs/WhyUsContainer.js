import React from "react";
import {PatrnerWithUsSectionTitle,PrimaryArray} from "../../Utils/Constants/Language/en/PartnerWithUsData"
import Section from "../Section";
import PointList from "../../Components/PointBadge/PointList"
const WhyUsContainer = () => {
  return (
    <Section title={PatrnerWithUsSectionTitle}>
    <PointList data={PrimaryArray} horizontal={true} lgBreakpoint={6}/>
  </Section>
  );
};

export default WhyUsContainer

