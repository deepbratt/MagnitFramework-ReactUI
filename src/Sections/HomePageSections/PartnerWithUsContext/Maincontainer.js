import React from "react";
import PointList from "../../../Components/PointBadge/PointList";
import Section from "../../../Pages/Section";
import CustomTitle from "../../../Pages/Section/CustomTitle";

const Container = ({data,title}) => {
  return (
    <>
      <Section>
      <CustomTitle underlined={true} text={title}/>
        <PointList data={data} horizontal={true} lgBreakpoint={6}/>
      </Section>
    </>
  );
};

export default Container;
