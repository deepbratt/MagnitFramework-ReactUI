import React from "react";
import {PatrnerWithUsSectionTitle,PrimaryArray} from "../../Utils/Constants/Language/en/PartnerWithUsData"
import Section from "../Section";
import PointList from "../../Components/PointBadge/PointList"
import CustomTitle from "../Section/CustomTitle"
const WhyUsContainer = () => {
  return (
    <Section title={PatrnerWithUsSectionTitle}>
    <CustomTitle text={"Why Us?"} underlined={true}/>
    <PointList data={PrimaryArray} horizontal={true} lgBreakpoint={6}/>
  </Section>
  );
};

export default WhyUsContainer

