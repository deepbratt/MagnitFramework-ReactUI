import React from "react";
import PointList from "../../../Components/PointBadge/PointList";
import Section from "../../../Pages/Section";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import {
  PrimaryArray
} from "../../../Utils/Constants/Language/en/PartnerWithUsData";
const Container = () => {
  return (
    <>
      <Section>
      <CustomTitle underlined={true} text={"Why Partner with Us?"}/>
        <PointList data={PrimaryArray} horizontal={true} lgBreakpoint={6}/>
      </Section>
    </>
  );
};

export default Container;
